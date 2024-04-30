import { useEffect } from "react";
import BlogLayout from "../../layout/blog";
import { useAppDispatch, useAppSelector } from "../../lib/hook/app.hook";
import { getPostBySlug, getPosts } from "../../lib/slice/post.slice";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { getCategories } from "../../lib/slice/category.slice";
import { Link, useParams } from "react-router-dom";
import PostList from "../../component/post-list.component";
import { useWindowSize } from "../../lib/hook/window.hook";

const BlogPage: React.FC = () => {

    const dispatch = useAppDispatch();
    const windowSize = useWindowSize();

    const { slug } = useParams();


    const posts = useAppSelector(state => state.post.posts);
    const categories = useAppSelector(state => state.category.categories);
    const selectedPost = useAppSelector(state => state.post.selectedPost);

    useEffect(() => {
        dispatch(getPosts({}));
        dispatch(getCategories({}));
    }, []);

    useEffect(() => {
        if (slug) {
            dispatch(getPostBySlug(slug));
        }
    }, [slug]);



    return (
        <>
            <Container style={{
                marginTop: '95px'
            }}>
                <Row>
                    <Col className="mb-3" xs={12} md={4} style={{
                        position: windowSize.w >= 767 ? 'sticky' : 'relative',
                        top: windowSize.w >= 767 ? 95 : 0,
                        alignSelf: 'flex-start',
                    }}>
                        <Card className="w-100 bordered" style={{
                            overflowX: 'auto',
                            scrollbarWidth: 'none',
                        }}>
                            <Card.Body>
                                <Card.Title className="title mb-4">Categories</Card.Title>
                                <Stack direction={windowSize.w >= 767 ? 'vertical' : 'horizontal'} gap={2}>
                                    {categories.map(category => (
                                        <Link to={`/${category.slug}`}>
                                            <Card.Text className="secondary-text">{category.name}</Card.Text>
                                        </Link>
                                    ))}
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        {selectedPost && (
                            <Card className="w-100 bordered">
                                <Card.Body>
                                    <Card.Title>{selectedPost.title}</Card.Title>
                                    <div dangerouslySetInnerHTML={{ __html: selectedPost.content }}></div>
                                </Card.Body>
                            </Card>
                        )}

                        {!selectedPost && (
                            <PostList isEditable={false} posts={posts} onSelectPost={(postSlug) => dispatch(getPostBySlug(postSlug))} />
                        )}
                    </Col>
                </Row>
            </Container >
        </>
    );
}

export default BlogPage;