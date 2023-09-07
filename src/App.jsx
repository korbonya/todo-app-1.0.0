import { Fragment, useEffect, useState } from "react";
import PostCard from "./components/PostCard";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // if(posts.length === 0) return (
  //   <div className='text-center text-xl font-bold py-4'>
  //     <p>Chargement des posts...</p>
  //   </div>
  // )

  return (
    <>
      <h1 className="text-center text-xl font-bold py-4">Liste des posts</h1>
      <div className="grid grid-cols-3 px-10 gap-2">
        {posts.length !== 0 ? (
          posts.map((post) => (
            <Fragment key={post.id}>
              <PostCard {...post} />
            </Fragment>
          ))
        ) : (
          <div className="text-cente  text-xl font-bold py-4">
            <p>Chargement des posts...</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
