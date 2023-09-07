import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export default function Detail() {
    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function fectchPost() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await res.json();
            setPost(data);
        }
        fectchPost();

    }, [id]);

  return (
      <div>
            <h1 className='font-bold text-xl'>{post.title}</h1>
            <p>{post.body}</p>
      </div>
  )
}
