import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../Services/app-context";
import { PostReaderType } from "../PostReader/PostReader";
import {
  FindSenderInput,
  SenderListItem,
  ListWrapper,
} from "./SenderList.styles";

const SenderList: FC<{ allPosts: PostReaderType }> = ({ allPosts }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { setCurrentSender, currentSender } = useAppContext();
  const { posts } = allPosts;
  const navigate = useNavigate();
  let { sender } = useParams();

  useEffect(() => {
    if (sender) {
      setCurrentSender(sender);
    }
  }, []);

  const senders = posts
    .map(({ from_name }) => from_name)
    .filter((value, index, self) => self.indexOf(value) === index);

  const filterName = (searchString: string) =>
    senders
      .filter((sender: string) =>
        sender.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
      )
      .sort();

  const countingPostBySender = (sender: string) => {
    return posts.filter((post) => post.from_name === sender).length;
  };

  const handleSelectSender = (name: string) => {
    setCurrentSender(name);
    navigate(`/posts/${name}`);
  };
  return (
    <React.Fragment>
      <FindSenderInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Enter a sender name'
      ></FindSenderInput>

      <ListWrapper>
        {filterName(searchValue).map((name: string, index: number) => (
          <React.Fragment key={index}>
            <SenderListItem
              highlight={currentSender === name}
              onClick={() => handleSelectSender(name)}
            >
              {name}
              <span style={{ float: "right" }}>
                {countingPostBySender(name)}
              </span>
            </SenderListItem>
          </React.Fragment>
        ))}
      </ListWrapper>
    </React.Fragment>
  );
};

export default SenderList;
