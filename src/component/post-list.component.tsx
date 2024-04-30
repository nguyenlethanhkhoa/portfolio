import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../lib/hook/app.hook";
import { getPosts } from "../lib/slice/post.slice";
import { Post } from "../lib/api/post.api";
import PostForm from "./post-form.component";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";


interface PostListProps {
    posts: Post[];
    isEditable: boolean;
    onSelectPost?: (postSlug: string) => void;
}

const PostList: React.FC<PostListProps> = ({ isEditable, posts, onSelectPost }) => {

    const navigate = useNavigate();

    const formatDate = (date: any, local: string = "en-US") => {
        const d = new Date(date)
        const options: any = { year: 'numeric', month: 'short', day: 'numeric' }
        const res = d.toLocaleDateString(local, options)
        return res
    }


    return (
        <>
            {posts.map(post => (
                <Card
                    key={post.id}
                    style={{ width: '18rem' }}
                    className="w-100 bordered mb-3 post-wrapper pointer"
                    data-bs-theme="light"
                >
                    {post.thumbnail && !isEditable && (
                        <Link to={`/${post.slug}`}>
                            <Card.Img variant="top" className="p-0" src={post.thumbnail} />
                        </Link>
                    )}
                    <Card.Body>
                        {post.category && (
                            <Card.Text>
                                <Badge bg="secondary">{post.category?.name}</Badge>
                            </Card.Text>
                        )}
                        <Card.Title>
                            {isEditable && (
                                <Stack direction="horizontal" gap={2}>
                                    <Link className="me-auto" to={`/dashboard/post/${post.slug}`} data-bs-theme="light">{post.title}</Link>
                                    <Button variant="primary" onClick={() => navigate(`/dashboard/post/${post.slug}`)}>
                                        <CiEdit />
                                    </Button>
                                    <Button variant="danger">
                                        <MdDeleteOutline />
                                    </Button>
                                </Stack>
                            )}
                            {!isEditable && (
                                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            )}
                        </Card.Title>

                        <Card.Text className="date">{formatDate(post.createdAt)}</Card.Text>
                        <Card.Text className="summary">{post.summary}</Card.Text>

                        {post.tags && (
                            <Card.Text>
                                {post.tags?.map(tag => (
                                    <>
                                        <Badge
                                            key={tag.id}
                                            className="px-3 py-2 tag"
                                        >
                                            {tag.name}
                                        </Badge>
                                        {' '.replace(/ /g, "\u00A0\u00A0")}
                                    </>
                                ))}
                            </Card.Text>
                        )}
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}

export default PostList;