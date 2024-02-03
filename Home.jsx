import { BlogList } from "./BlogList"
import { useFetch } from "./useFetch"

export function Home(){
    function handleDelete(id){
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }
    const {data, isLoading, error} = useFetch('http://localhost:8000/blogs')
    return<div className="home">
        {error && <div>{error}</div>}
        { isLoading && <p>Loading</p>}
        { data && <BlogList blogs={data} title="All blogs" handleDelete={handleDelete}/>}
    </div>
}