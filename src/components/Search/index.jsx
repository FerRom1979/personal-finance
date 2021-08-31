import React from "react";
import InputCustom from "../inputCustom";

import { WrapperSearch } from "./Search.styles";

const Search = () => {
  return (
    <WrapperSearch>
      <InputCustom placeholder={"Search"} />
    </WrapperSearch>
  );
};

export default Search;
