import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './style/App.css'

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'Post 1', body: 'Body description'},
		{id: 2, title: 'Javacript', body: 'Body description'},
		{id: 3, title: 'Php', body: 'Body description'}
	])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
			<PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect 
          defaultValue="Sortare"
          options={[
            
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Lista postarilor"/>
        : <h1 style={{textAlign: 'center'}}>Postari nu s-au gasit</h1> 
      }
    </div>
  );
}

export default App;
