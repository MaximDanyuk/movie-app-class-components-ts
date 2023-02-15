/* eslint-disable */

import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { ChangeEvent } from "react";

interface searchProps {
  debouncedShowSearchData: (text: string) => void;
}

class Search extends React.PureComponent<searchProps> {
  state = {
    inputValue: "",
  };

  handleInputValue = (evt: ChangeEvent<HTMLInputElement>) => {
    const { debouncedShowSearchData } = this.props;

    debouncedShowSearchData(evt.target.value);

    this.setState({
      inputValue: evt.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Input
        type="search"
        size="large"
        placeholder="Type to search"
        prefix={<SearchOutlined />}
        className="search"
        value={inputValue}
        onChange={(evt) => this.handleInputValue(evt)}
      />
    );
  }
}
export default Search;
