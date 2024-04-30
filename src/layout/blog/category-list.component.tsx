import React, { ReactNode, useEffect } from "react";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../lib/hook/app.hook";
import { getCategories } from "../../lib/slice/category.slice";

const CategoryList: React.FC = () => {

    const dispatch = useAppDispatch();

    const categories = useAppSelector(state => state.category.categories);

    useEffect(() => {
        dispatch(getCategories({}));
    }, [])

    return (
        <Card className="w-100">
            <Card.Body>
                {categories.map(category => (
                    <Link to={`/${category.slug}`}>
                        <Card.Text>{category.name}</Card.Text>
                    </Link>
                ))}
            </Card.Body>
        </Card>
    );
}

export default CategoryList;
