import { format } from "date-fns";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <Link to={`/post/${_id}`}>
        <div className="image">
          <img src={`http://localhost:3001/${cover}`} alt="Thumbnail of post" />
        </div>
      </Link>{" "}
      <div className="content">
        <Link to={`/post/${_id}`}>
          {" "}
          <h2>{title} </h2>
        </Link>
        <p className="info">
          <a href="/" className="author">
            {author.username}
          </a>
          <time>{format(new Date(createdAt), "yyyy-MM-dd")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
