import { Link } from "react-router-dom"
import profileImg from '../assets/profile.jpeg'

export default function PostCard({title, body, id}) {
  return (
    <div className="bg-blue-200 hover:bg-blue-100 px-4 py-2 rounded-md">
        <h1 className="text-lg font-bold ">
            <span className="text-xl">{id + ". "}</span>
            {title}</h1>
        <p className="text-sm">{body}</p>
        <div className="flex space-x-2 my-2">
          <img className="w-10 h-10 rounded-full object-cover" src={'/src/assets/profile.jpeg'} alt="image de l'utilisateur" />
          <h1 className="text-lg font-semibold">Utisateur 10</h1>
        </div>
        <Link to={`/detail/${id}`} className="text-blue-800 ">Voir plus</Link>
    </div>
  )
}
