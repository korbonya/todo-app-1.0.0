import { Link, Outlet } from "react-router-dom"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
        <div className="min-h-screen w-56 bg-blue-100">
            <div className="w-full pt-10 ">
                <Link to="">
                    <button className="px-4 py-1 my-2 bg-blue-500 hover:bg-blue-700 text-white w-full" >Dashbord</button>
                </Link>
                <Link to="users">
                    <button className="px-4 py-1 my-2 bg-blue-500 hover:bg-blue-700 text-white w-full" >Dashbord</button>
                </Link>
                <Link to="setting">
                    <button className="px-4 py-1 my-2 bg-blue-500 hover:bg-blue-700 text-white w-full" >Dashbord</button>
                </Link>
            </div>
        </div>
        <div className="w-full overflow-hidden">
          <Outlet />
        </div>
    </div>
  )
}
