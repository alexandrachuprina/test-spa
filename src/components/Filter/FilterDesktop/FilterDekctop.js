import React from "react";
import { Input, Selection } from "../../../styles/UI-kit";
import { Card, Option } from "./styles";
import { options } from "../options";

const FilterDesktop = ({ word, filterByUser, findWord }) => {
  return (
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
  );
};

export default FilterDesktop;
