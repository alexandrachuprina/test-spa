import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Comment from "../Comment/Comment";

import { Card } from "./styles";

function Post({ title, text, postView, user, userId, comments }) {
  const loading = useSelector((state) => state.posts.isLoading);
  const keyword = useSelector((state) => state.posts.keyword);

  const showHighlight = (higlight, text) => {
    if (higlight != "") {
      const parts = text.split(new RegExp(`(${higlight})`, "gi"));
      return parts.map((part) => (
        <>
          {part === higlight ? (
            <b
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "0 4px",
              }}
            >
              {part}
            </b>
          ) : (
            part
          )}
        </>
      ));
    } else {
      return text;
    }
  };

  return (
    <>
      {!loading ? (
        <Card view={postView}>
          <div className="content">
            <h2 className="text">{title}</h2>
            {postView !== "list" && (
              <p className="text">{showHighlight(keyword, text)}.</p>
            )}
          </div>

          <div className="author">
            <p>
              post by
              {/* {postView === "list" && <br />} */}
              <Link to={`/users/${userId}`} className="user">
                {user ? user : null}
              </Link>
            </p>
          </div>

          <div className="comments">
            {comments.map((elem) => (
              <Comment title={elem.email} text={elem.name} key={elem.id} />
            ))}
          </div>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Post;
