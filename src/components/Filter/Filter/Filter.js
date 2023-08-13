import React, { useState } from "react";
import FilterDesktop from "../FilterDesktop/FilterDekctop";
import FilterMobile from "../FilterMobile/FilterMobile";
import { useDispatch } from "react-redux";
import { filterByWord, filterPosts } from "../../../app/postsSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");

  const filterByUser = () => {
    const userId = document.getElementById("user-select").value;
    dispatch(filterPosts(Number(userId)));
    window.scrollTo(0, 0);
    setWord("");
  };

  const findWord = (e) => {
    e.preventDefault();
    if (e.target.value != "") {
      setWord(e.target.value.toLowerCase());
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

  return (
    <>
      <FilterDesktop
        word={word}
        filterByUser={filterByUser}
        findWord={findWord}
      />
      <FilterMobile
        word={word}
        filterByUser={filterByUser}
        findWord={findWord}
      />
    </>
  );
};

export default Filter;
