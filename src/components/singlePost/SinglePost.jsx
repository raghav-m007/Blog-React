import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">]
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />


                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.

                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <spam className="singlePostAuthor">Author: <b>Raghav</b></spam>
                    <spam className="singlePostAuthor">1 hour ago</spam>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a ea totam doloribus iste deleniti quae iure voluptates modi nemo facere ipsa possimus excepturi sed repellat repudiandae, dolores voluptatem perspiciatis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a ea totam doloribus iste deleniti quae iure voluptates modi nemo facere ipsa possimus excepturi sed repellat repudiandae, dolores voluptatem perspiciatis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a ea totam doloribus iste deleniti quae iure voluptates modi nemo facere ipsa possimus excepturi sed repellat repudiandae, dolores voluptatem perspiciatis!
                </p>
            </div>
        </div>
    )
}
