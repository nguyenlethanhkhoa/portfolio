import BlogLayout from "../../layout/blog";

const BlogPage: React.FC = () => {

    const generateData = () => {
        const items = [];
        for (let i = 0; i < 50; i++) {
            items.push(<p>KKKKKKKKKKK</p>);
        }

        return items
    }
	return (
		<BlogLayout>
            {
                generateData()
            }
        </BlogLayout>
	);
}

export default BlogPage;