import React, {useState} from "react";  
import MyButton from "./UI/button/Mybutton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id:Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }
  
  return (
    <form>
      <MyInput 
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Introduceti titlul" />

      <MyInput 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Introduceti descrierea" />

      <MyButton onClick={addNewPost}>Adauga</MyButton>
    </form>
  )
}

export default PostForm