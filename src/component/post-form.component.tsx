import { isEditable } from "@testing-library/user-event/dist/utils";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Post, PostFormData, Tag } from "../lib/api/post.api";
import { Badge, Button, Card, Form, Stack } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAppDispatch, useAppSelector } from "../lib/hook/app.hook";
import { getPostBySlug, updatePost } from "../lib/slice/post.slice";
import { Category } from "../lib/api/category.api";
import { LuImagePlus } from "react-icons/lu";
import { getCategories } from "../lib/slice/category.slice";

interface PostFormProps {
    postSlug?: string;
    onSave?: () => void;
    onCancel?: () => void;
}

interface PostData extends PostFormData {
    id?: number;
    slug?: string;
}

const PostForm: React.FC<PostFormProps> = ({ postSlug, onSave, onCancel }) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const fileInputRef: any = useRef(null);
    const categories = useAppSelector(state => state.category.categories);

    const [ckEditor, setCkEditior] = useState<any>();
    const [tags, setTags] = useState<string[]>([]);
    const [post, setPost] = useState<PostData>({
        title: '',
        slug: '',
        thumbnail: '',
        summary: '',
        content: '',
        categoryId: null,
        tags: []
    });

    useEffect(() => {

        dispatch(getCategories({}))

        if (postSlug) {
            dispatch(getPostBySlug(postSlug))
                .unwrap()
                .then((resp) => {
                    if (!resp) {
                        navigate('/dashboard');
                    }

                    setPost({
                        ...resp,
                        categoryId: resp.category ? resp.category.id : null,
                        tags: []
                    });

                    setTags(resp.tags.map(tag => tag.name));
                });
        }
    }, []);

    return (
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <input
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                            onChange={(event) => {
                                if (!event.target.files || !event.target.files.length) {
                                    return;
                                }

                                const reader = new FileReader();
                                reader.readAsDataURL(event.target.files[0]);
                                reader.onloadend = () => {
                                    if (!reader.result?.toString()) {
                                        return;
                                    }

                                    setPost({
                                        ...post,
                                        thumbnail: reader.result?.toString()
                                    });
                                }
                            }}
                        />
                        <div
                            className="pointer"
                            style={{
                                height: 250,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: post.thumbnail ? `url(${post.thumbnail})` : 'lightgray',
                                // backgroundPosition: 'center',
                                // backgroundSize: 'cover',
                                // backgroundRepeat: 'no-repeat',
                                borderRadius: 5
                            }}
                            onClick={() => fileInputRef.current.click()}
                        >
                            <LuImagePlus className="mx-auto" style={{
                                fontSize: 50
                            }} />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Post title"
                            value={post.title}
                            onChange={(e) => setPost({
                                ...post,
                                title: e.target.value
                            })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={post.summary}
                            onChange={(e) => setPost({
                                ...post,
                                summary: e.target.value
                            })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Choose Category" onChange={(e) => {
                            setPost({ ...post, categoryId: parseInt(e.target.value) })
                        }}>
                            <option>--Choose Category--</option>
                            {categories.map(category => (
                                <option value={category.id} selected={category.id == post.categoryId}>{category.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Post tags"
                            onKeyUp={(e) => {
                                if (e.code == 'Enter') {
                                    const newTag = e.currentTarget.value;
                                    if (tags.indexOf(newTag) != -1) {
                                        return
                                    }

                                    setTags([...tags, newTag]);

                                    e.currentTarget.value = '';
                                }
                            }}
                        />
                        <Stack gap={2} direction="horizontal" className="my-2">
                            {tags.map(tag => (
                                <div
                                    key={tag}
                                    className="py-1 px-2"
                                    style={{
                                        border: '1px solid gray',
                                        borderRadius: '5px'
                                    }}
                                >
                                    <span className="mx-1">{tag}</span>{' '}
                                    <Button size="sm" className="py-0" onClick={() => {
                                        const index = tags.indexOf(tag);
                                        if (index != -1) {
                                            tags.splice(index, 1);
                                            setTags([...tags]);
                                        }

                                    }}>x</Button>
                                </div>
                            ))}
                        </Stack>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Content</Form.Label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={post.content}
                            onReady={editor => {
                                setCkEditior(editor);
                            }}
                        />
                    </Form.Group>

                    <Stack direction="horizontal">
                        <Button
                            className="me-auto"
                            variant="primary"
                            type="button"
                            onClick={async () => {
                                const postData: PostFormData = {
                                    ...post,
                                    content: ckEditor.getData(),
                                    tags: tags.map((tag) => { return { name: tag } })
                                }

                                if (post.id) {
                                    const updatedPost = await dispatch(updatePost({
                                        postId: post.id,
                                        postData: postData
                                    })).unwrap();

                                    setPost({
                                        ...updatedPost
                                    });
                                }

                                if (typeof onSave === 'function') {
                                    onSave();
                                }
                            }}
                        >
                            Save
                        </Button>
                        <Button
                            variant="danger"
                            type="button"
                            onClick={() => {
                                navigate('/dashboard')
                            }}
                        >
                            Cancel
                        </Button>
                    </Stack>
                </Form>
            </Card.Body>
        </Card >
    );
}

export default PostForm;