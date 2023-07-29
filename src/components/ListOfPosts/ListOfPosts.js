import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../Post/Post";
import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

function ListOfPosts() {
  const posts = useSelector((state) => state.posts.afterFilter);
  const [postView, setPostView] = useState("large");
  const [change, setChange] = useState("");

  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (change === "large") {
      setPostView("large");
    } else if (change === "small") {
      setPostView("small");
    } else if (change === "list") {
      setPostView("list");
    }
  }, [change]);

  return (
    <Posts>
      <ButtonsMobile>
        <button className="btn" onClick={() => setChange("large")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={theme.black === "true" ? "var(--white)" : "var(--black)"}
            class="bi bi-grid-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
        </button>
        <button className="btn" onClick={() => setChange("small")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={theme.black === "true" ? "var(--white)" : "var(--black)"}
            class="bi bi-grid-3x3-gap-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
          </svg>
        </button>
        <button className="btn" onClick={() => setChange("list")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill={theme.black === "true" ? "var(--white)" : "var(--black)"}
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </ButtonsMobile>
      <>
        {postView === "large" && (
          <LargeCard>
            {posts.map((elem, index) => (
              <Post
                title={elem.title}
                text={elem.body}
                userId={elem.userId}
                postId={elem.id}
                key={elem.id}
                postView={postView}
                showAuthor={true}
              />
            ))}
          </LargeCard>
        )}

        {postView === "small" && (
          <SmallCard>
            {posts.map((elem, index) => (
              <Post
                title={elem.title}
                text={elem.body}
                userId={elem.userId}
                postId={elem.id}
                key={elem.id}
                postView={postView}
                showAuthor={true}
              />
            ))}
          </SmallCard>
        )}

        {postView === "list" && (
          <List>
            {posts.map((elem, index) => (
              <Post
                title={elem.title}
                text={elem.body}
                userId={elem.userId}
                postId={elem.id}
                key={elem.id}
                postView={postView}
                showAuthor={true}
              />
            ))}
          </List>
        )}
      </>

      <Buttons>
        <button className="btn" onClick={() => setChange("large")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={theme.black === "true" ? "var(--white)" : "var(--black)"}
            class="bi bi-grid-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
        </button>
        <button className="btn" onClick={() => setChange("small")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={theme.black === "true" ? "var(--white)" : "var(--black)"}
            class="bi bi-grid-3x3-gap-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
          </svg>
        </button>
        <button className="btn" onClick={() => setChange("list")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill={theme.black === "true" ? "var(--white)" : "var(--black)"}
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </Buttons>
    </Posts>
  );
}

export default ListOfPosts;

const Posts = styled.div`
  margin-bottom: 60px;

  position: relative;
  margin-left: 480px;
  display: flex;
  flex-direction: row;

  @media (${queries.xxs} <= width <= ${queries.sm}) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (${queries.sm} < width <= ${queries.xl}) {
    margin-left: 380px;
  }
`;

const Buttons = styled.div`
  position: absolute;
  left: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .btn {
    margin-bottom: 20px;
  }

  @media (${queries.xxs} <= width <= ${queries.sm}) {
    display: none;
  }
`;

const ButtonsMobile = styled.div`
  z-index: 50;
  position: fixed;
  top: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 10p 0;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.primary};
  background-color: ${(p) =>
    p.theme.black === "true" ? `${p.theme.darkBg}` : `${p.theme.main}`};

  @media (width > ${queries.sm}) {
    display: none;
  }

  @media (width < ${queries.sm}) {
    width: 60vw;
  }
  @media (${queries.xs} < width <= ${queries.sm}) {
    width: 30vw;
  }
`;

const LargeCard = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  @media (${queries.xxs} <= width <= ${queries.sm}) {
    width: 100%;
  }
`;
const SmallCard = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  row-gap: 50px;

  @media (${queries.xxs} <= width <= ${queries.sm}) {
    width: 100%;
  }
  @media (width < ${queries.xl}) {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
`;
const List = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  @media (width <= ${queries.sm}) {
    width: 100%;
  }
`;
