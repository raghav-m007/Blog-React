import "./singlePost.css";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";





export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            //   setPost(res.data);
            //   setTitle(res.data.title);
            //   setDesc(res.data.desc);
            setPost(res.data);

        };
        getPost();
    }, [path]);

    console.log(location)
    return (
        <div className="singlePost">]
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={post.photo} className="singlePostImg" alt="" />
                )}


                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b> {post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>

                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
