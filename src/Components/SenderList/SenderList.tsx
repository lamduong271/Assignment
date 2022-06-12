import React, { FC, useState } from "react";
import { PostReaderType } from "../PostReader/PostReader";
import { FindSenderInput, SenderListItem } from "./SenderList.styles";

const SenderList: FC<{ allPosts: PostReaderType }> = ({ allPosts }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { posts } = allPosts;
  const senders = posts
    .map(({ from_name }) => from_name)
    .filter((value, index, self) => self.indexOf(value) === index);

  const filterName = (searchString: string) =>
    senders.filter((sender: string) =>
      sender.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
    );

  return (
    <React.Fragment>
      <FindSenderInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Enter a sender name'
      ></FindSenderInput>

      <ul>
        {filterName(searchValue).map((name) => (
          <SenderListItem>{name}</SenderListItem>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SenderList;
