import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
export function Create(){
    const history = useHistory()
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[author,setAuthor] = useState('yushi')   
    const[isLoading,setIsLoading] = useState(false)
    function addBlog(){
        let data ={
            title : title,
            body : body,
            author :author,
        }
        let fetchData = {
            method:'post',
            body : JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }
        fetch('http://localhost:8000/blogs', fetchData)
        setId=((id)=>id+1)
    }

    function handleSubmit(e){
            e.preventDefault();
            const blog={title, body, author};
            setIsLoading(true);
            fetch('http://localhost:8000/blogs',{method:'post',
            body : JSON.stringify(blog),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })})
            .then(()=>{
            console.log('New blog added');
            setIsLoading(false)
            history.push('/')
            }
            )
        
    }
    return <div className="create">
        <h2>Add new Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            ></textarea>
            <label>Select author</label>
            <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yushi">yushi</option>
            </select>
            {isLoading ? (<button>Adding...</button>):(<button>Add blog</button>)}
        </form>
    </div>
}