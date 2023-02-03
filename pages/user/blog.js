import Layout from "../../components/layout";
import Blogs from "./dashboardComponent/blogs";


const Blog = () => {
    const router = useRouter();
    return (
      <Layout>
        <Blogs />
      </Layout>
    )
}

export default Blog;