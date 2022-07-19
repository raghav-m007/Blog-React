import Sidebar from "../../sidebar/Sidebar"
import SinglePost from "../../singlePost/SinglePost"
import "./single.css"

export default function single() {
  return (
    <div className="single">
      {/* {post} */}
      <SinglePost />
      <Sidebar />
    </div>
  )
}
