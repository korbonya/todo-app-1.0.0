import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export default function Detail() {
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});
    const { id } = useParams();
    // date of the day
    const date = new Date().toLocaleDateString();

    useEffect(() => {
        async function fectchPost() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await res.json();
            setPost(data);
        }
        fectchPost();

    }, [id]);

    useEffect(() => {
        async function fectchUser() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            const data = await res.json();
            setUser(data);
        }
        fectchUser();

    }, [post.userId]);

  return (
      <div className="bg-blue-50">
        <div>
            <h1 className="text-2xl font-bold text-center py-4">{user.name}</h1>
            <ul className="text-center ">
                <li>{user.phone}</li>
                <li>{user.email} </li>
            </ul>
        </div>

          <div className="py-4 px-10 ">
          <h1 className='font-bold text-xl'>{post.title}</h1>
           <h2>le : <span className="italic">{date}</span></h2>
            <p className="font-medium text-lg">{post.body}</p>
            <p className="font-medium text-lg">{post.body}</p>
          </div>
      </div>
  )
}
