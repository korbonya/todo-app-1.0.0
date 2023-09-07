import { Link } from "react-router-dom"

export default function PostCard({title, body, id}) {
  return (
    <div className="bg-blue-200 hover:bg-blue-100 px-4 py-2 rounded-md">
        <h1 className="text-lg font-bold ">
            <span className="text-xl">{id + ". "}</span>
            {title}</h1>
        <p className="text-sm">{body}</p>
        <Link to={`/detail/${id}`} className="text-blue-800 ">Voir plus</Link>
    </div>
  )
}
