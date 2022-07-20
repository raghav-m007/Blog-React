import "./singlePost.css";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";



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
                    <spam className="singlePostAuthor">Author: <b>{post.username}</b></spam>
                    <spam className="singlePostDate">{new Date(post.createdAt).toDateString()}</spam>

                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
