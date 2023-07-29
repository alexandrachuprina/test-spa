import React, { useState } from "react";
import { styled, keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  filterPosts,
  filterByWord,
  selectKeyword,
} from "../../features/postsSlice";
import { Input, Selection, queries } from "../../styles/UI-kit";

const Filter = () => {
  const [word, setWord] = useState("");
  const [modalShown, setModalShown] = useState(false);
  const keyword = useSelector(selectKeyword);

  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const showChoosen = () => {
    const userId = document.getElementById("user-select").value;
    dispatch(filterPosts(Number(userId)));
    window.scrollTo(0, 0);
    setWord(keyword);

    setModalShown(false);
  };

  const showChoosenMobile = () => {
    const userId = document.getElementById("user-select-mobile").value;
    dispatch(filterPosts(Number(userId)));
    window.scrollTo(0, 0);
    setWord(keyword);

    setModalShown(false);
  };

  const findWord = (e) => {
    if (e.target.value != "") {
      setWord(e.target.value);
      dispatch(filterByWord(e.target.value));
    } else {
      setWord("");
      dispatch(filterByWord(""));
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Card>
        <h2>Фильтры</h2>
        <div>
          <SelectOption>
            <p>Автор</p>
            <Selection name="users" id="user-select" onChange={showChoosen}>
              <option value="">Все авторы</option>
              <option value="1">Leanne Graham</option>
              <option value="2">Ervin Howell</option>
              <option value="3">Clementine Bauch</option>
              <option value="4">Patricia Lebsack</option>
              <option value="5">Chelsey Dietrich</option>
              <option value="6">Mrs. Dennis Schulist</option>
              <option value="7">Kurtis Weissnat</option>
              <option value="8">Nicholas Runolfsdottir V</option>
              <option value="9">Glenna Reichert</option>
              <option value="10">Clementina DuBuque</option>
            </Selection>
          </SelectOption>
          <SelectOption>
            <p>Поиск по cодержанию</p>
            <Input type="text" value={word} onChange={findWord} />
          </SelectOption>
        </div>
      </Card>

      <Modal>
        <div className="header">
          <h2>Посты</h2>
          <Icon onClick={() => setModalShown(!modalShown)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={theme.black === "true" ? "var(--white)" : "var(--black)"}
              class="bi bi-funnel-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
            </svg>
          </Icon>
        </div>
        <div className="search">
          <p>Поиск по cодержанию</p>
          <Input type="text" value={word} onChange={findWord} />
        </div>
        {modalShown && (
          <ModalCard>
            <div className="header">
              <h2>Фильтры</h2>
              <Icon onClick={() => setModalShown(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill={
                    theme.black === "true" ? "var(--white)" : "var(--black)"
                  }
                  class="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </Icon>
            </div>
            <div>
              <SelectOption>
                <p>Автор</p>
                <Selection
                  name="users"
                  id="user-select-mobile"
                  onChange={showChoosenMobile}
                >
                  <option value="">Все авторы</option>
                  <option value="1">Leanne Graham</option>
                  <option value="2">Ervin Howell</option>
                  <option value="3">Clementine Bauch</option>
                  <option value="4">Patricia Lebsack</option>
                  <option value="5">Chelsey Dietrich</option>
                  <option value="6">Mrs. Dennis Schulist</option>
                  <option value="7">Kurtis Weissnat</option>
                  <option value="8">Nicholas Runolfsdottir V</option>
                  <option value="9">Glenna Reichert</option>
                  <option value="10">Clementina DuBuque</option>
                </Selection>
              </SelectOption>
            </div>
          </ModalCard>
        )}
      </Modal>
    </>
  );
};

export default Filter;

const Card = styled.div`
  width: 390px;
  height: 280px;
  border-radius: 18px;
  padding: 24px 36px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  position: fixed;
  top: 100;
  left: 100;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => p.theme.main};

  h2 {
    font-size: 24px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    color: ${(p) => p.theme.primaryMedium};
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  ${(p) =>
    p.theme.black === "true" && {
      boxShadow: "none",
      border: `1px solid ${p.theme.primary}`,
    }}

  @media (${"180px"} <= width <= ${queries.sm}) {
    display: none;
  }
  @media (width <= ${queries.xl}) {
    width: 300px;
  }
`;

const SelectOption = styled.div`
  margin-bottom: 20px;
  .user-select {
    width: 100%;
  }
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 5;

  h2 {
    font-size: 24px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    color: ${(p) => p.theme.primaryMedium};
    padding: 0;
    margin: 0;
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .search {
    display: flex;
    flex-direction: column;

    @media (width < ${queries.l}) {
      margin-bottom: 45px;
    }
  }

  @media (${queries.sm} < width) {
    display: none;
  }
`;

const position = keyframes`
  from {
    top: 100vh;
  }

  to {
    top: 40px;
  }
`;

const ModalCard = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 96vh;
  padding: 20px;

  overflow: scroll;
  overflow-y: scroll;

  border: 1px solid ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.main};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  h2 {
    font-size: 24px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    color: ${(p) => p.theme.primaryMedium};
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px 0;
  }

  animation: ${position} 0.3s ease-in-out;

  @media (${queries.xs} < width <= ${queries.sm}) {
    padding: 20px 80px;
  }
`;
