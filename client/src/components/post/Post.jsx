import "./post.css"
import { Link } from "react-router-dom";


export default function Post({ post }) {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/12498564/pexels-photo-12498564.jpeg?cs=srgb&dl=pexels-yuliia-tretynychenko-12498564.jpg&fm=jpg" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDesc">{post.desc}
            </p>
        </div>
    )
}
