import React, { useState } from "react";
import FilterIcon from "../icons/FilterIcon";
import CloseIcon from "../icons/CloseIcon";
import { CardMobile, ModalCard, Icon, Option } from "./styles";
import { Input, Selection } from "../../../styles/UI-kit";
import { options } from "../options";

const FilterMobile = ({ word, filterByUser, findWord }) => {
  const [modalShown, setModalShown] = useState(false);

  const filterPosts = () => {
    filterByUser();
    setModalShown(false);
  };

  return (
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
                onChange={filterPosts}
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
  );
};

export default FilterMobile;
