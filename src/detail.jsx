import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

export default function Detail() {
    const { id } = useParams();
    const {data:post, loading:loadPost, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const {data:user, loading:loadUser, } = useFetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`);
    // date of the day
    const date = new Date().toLocaleDateString();

    if(loadPost || loadUser) return (
        <div className='text-center text-xl font-bold py-4'>
            <p>Chargement des données...</p>
        </div>
    )



   

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
