import { Fragment, useEffect, useState } from "react";
import PostCard from "./components/PostCard";

import { useFetch } from "./useFetch";

function App() {
  const {data:posts, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

  if(error) return (
    <div className='text-center text-xl font-bold py-4'>
      <p>Une erreur est survenue...</p>
    </div>
  )


  return (
    <>
      <h1 className="text-center text-xl font-bold py-4">Liste des posts</h1>
      <div className="grid grid-cols-3 px-10 gap-2">
        {!loading ? (
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
