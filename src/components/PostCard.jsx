// Importing the Link component from react-router-dom which is used for declarative, accessible navigation in your application
import { Link } from "react-router-dom";

// Importing an image (profileImg) from a relative path
import profileImg from '../assets/profile.jpeg';

// Exporting a function component named PostCard which accepts props: title, body, and id
export default function PostCard({title, body, id}) {
  return (
    // Wrapping the component elements within a div with several utility classes for styling 
    // (from Tailwind CSS), including styles for background color, padding, rounded corners, and hover effect.
    <div className="bg-blue-200 hover:bg-blue-100 px-4 py-2 rounded-md">
        
        {/* // Heading element displaying the post's title. The id (preceded by a dot) is displayed
        // with a larger font size than the title. */}
        <h1 className="text-lg font-bold ">
            <span className="text-xl">{id + ". "}</span>
            {title}
        </h1>

        {/* // Paragraph element displaying the post's body content with small text size. */}
        <p className="text-sm">{body}</p>

        {/* // A div containing user information, including an image and username. The elements within
        // this div have a margin between them and applied styles for image size, rounding, and object fit. */}
        <div className="flex space-x-2 my-2">
          <img className="w-10 h-10 rounded-full object-cover" src={'/src/assets/profile.jpeg'} alt="image de l'utilisateur" />
          <h1 className="text-lg font-semibold">Utisateur 10</h1>
        </div>

        {/* // A Link component which navigates to a detail page for the specific post when clicked,
        // with styles applied for text color. */}
        <Link to={`/detail/${id}`} className="text-blue-800 ">Voir plus</Link>
    </div>
  )
}
