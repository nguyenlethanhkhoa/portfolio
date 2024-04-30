import { useEffect, useState } from "react";
import BlogLayout from "../../layout/blog";
import { useAppDispatch, useAppSelector } from "../../lib/hook/app.hook";
import { clearSelectedPost, getPosts } from "../../lib/slice/post.slice";
import { Button, Card, Col, Form, Row, Stack } from "react-bootstrap";
import PostList from "../../component/post-list.component";
import PostForm from "../../component/post-form.component";
import { useNavigate, useParams } from "react-router-dom";

const PostPage: React.FC = () => {

    const { slug } = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const posts = useAppSelector(state => state.post.posts);

    useEffect(() => {
        if (!slug) {
            dispatch(getPosts({}));
        }
        else {
            dispatch(clearSelectedPost())
        }
    }, [slug]);

    return (
        <>
            {!slug && (
                <>
                    <div
                        className="p-2 mb-3"
                        style={{
                            position: 'sticky',
                            top: 95,
                            alignSelf: 'flex-start',
                            width: '100%',
                            zIndex: 10
                        }}
                    >

                        <Form>
                            <Row>
                                <Col sm={9} md={9} lg={9}>
                                    <Form.Group>
                                        <Form.Control
                                            className="w-100"
                                            type="text"
                                            placeholder="Search"
                                            onKeyUp={(e) => {
                                                if (e.code == 'Enter') {
                                                    dispatch(getPosts({ search: e.currentTarget.value }));
                                                }
                                            }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={3} md={3} lg={3}>
                                    <Form.Group>
                                        <Button onClick={() => navigate('/dashboard/create-post')}>New Post</Button>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <PostList
                        isEditable={true}
                        posts={posts}
                    />
                </>
            )}

            {slug && (
                <PostForm
                    postSlug={slug}
                />
            )}
        </>
    );
}

export default PostPage;