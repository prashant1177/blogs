import { format } from "date-fns";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostPage({}) {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3001/post/${id}`).then((response) => {
      response.json().then((Info) => {
        setPostInfo(Info);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div>
      <h1>{postInfo.title}</h1>
      <hr/>
      <p>{postInfo.summary}</p>
      <div className="image">
        <img
          src={`http://localhost:3001/${postInfo.cover}`}
          alt="Thumbnail of post"
        />
      </div>
      <div dangerouslySetInnerHTML={{__html: postInfo.content}}></div>
    </div>
  );
}
