import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPosts, filterByWord, selectKeyword } from "../../app/postsSlice";
import { Input, Selection } from "../../styles/UI-kit";

import { Card, CardMobile, Option, Icon, ModalCard } from "./styles";
import { options } from "./options";
import FilterIcon from "./icons/FilterIcon";
import CloseIcon from "./icons/CloseIcon";

const Filter = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const [modalShown, setModalShown] = useState(false);
  const keyword = useSelector(selectKeyword);

  const filterByUser = () => {
    const userId = document.getElementById("user-select").value;
    dispatch(filterPosts(Number(userId)));
    window.scrollTo(0, 0);

    setWord("");
  };

  const filterByUserMobile = () => {
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
    if (document.getElementById("user-select").value !== 0) {
      document.getElementById("user-select").value = 0;
    }
    window.scrollTo(0, 0);
  };

  const findWordMobile = (e) => {
    e.preventDefault();
    if (e.target.value != "") {
      setWord(e.target.value);
      dispatch(filterByWord(e.target.value));
    } else {
      setWord("");
      dispatch(filterByWord(""));
    }
    if (document.getElementById("user-select-mobile").value !== 0) {
      document.getElementById("user-select-mobile").value = 0;
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Card>
        <h2>Фильтры</h2>
        <div>
          <Option>
            <p>Автор</p>
            <Selection name="users" id="user-select" onChange={filterByUser}>
              {options.map((elem) => (
                <option key={elem.value} value={elem.value}>
                  {elem.text}
                </option>
              ))}
            </Selection>
          </Option>
          <Option>
            <p>Поиск по cодержанию</p>
            <Input type="text" value={word} onChange={findWord} />
          </Option>
        </div>
      </Card>

      <CardMobile>
        <div className="header">
          <h2>Посты</h2>
          <Icon onClick={() => setModalShown(!modalShown)}>
            <FilterIcon />
          </Icon>
        </div>
        <div className="search">
          <p>Поиск по cодержанию</p>
          <Input type="text" value={word} onChange={(e) => findWord(e)} />
        </div>
        {modalShown && (
          <ModalCard>
            <div className="header">
              <h2>Фильтры</h2>
              <Icon onClick={() => setModalShown(false)}>
                <CloseIcon />
              </Icon>
            </div>
            <div>
              <Option>
                <p>Автор</p>
                <Selection
                  name="users"
                  id="user-select-mobile"
                  onChange={filterByUserMobile}
                >
                  {options.map((elem) => (
                    <option key={elem.value} value={elem.value}>
                      {elem.text}
                    </option>
                  ))}
                </Selection>
              </Option>
            </div>
          </ModalCard>
        )}
      </CardMobile>
    </>
  );
};

export default Filter;
