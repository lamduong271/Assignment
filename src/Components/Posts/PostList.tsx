import React, { FC, useState } from "react";
import { useAppContext } from "../../Services/app-context";
import { PostReaderType } from "../PostReader/PostReader";
import {
  FindPostInput,
  PostItem,
  DatePost,
  PostContent,
  PostInputWrapper,
  SortButton,
  ListWrapper,
} from "./PostList.styles";

const PostList: FC<{ allPosts: PostReaderType }> = ({ allPosts }) => {
  const [searchPostValue, setSearchPostValue] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const { currentSender } = useAppContext();

  const formatDate = (dateString: string) => {
    let date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(date);
  };

  const filterPostsBySender = allPosts.posts.filter(
    (post) => post.from_name === currentSender
  );

  const filterPostByText = filterPostsBySender.filter((post) =>
    post.message
      .toLocaleLowerCase()
      .includes(searchPostValue.toLocaleLowerCase())
  );

  const sortByCreationTime = filterPostByText.sort((postA, postB): number => {
    if (new Date(postA.created_time) < new Date(postB.created_time)) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <React.Fragment>
      <PostInputWrapper>
        <FindPostInput
          value={searchPostValue}
          onChange={(e) => setSearchPostValue(e.target.value)}
          placeholder='Enter post content'
        ></FindPostInput>
        <SortButton onClick={() => setSortOrder("asc")}>sort asc</SortButton>
        <SortButton onClick={() => setSortOrder("desc")}>sort desc</SortButton>
      </PostInputWrapper>
      <ListWrapper>
        {currentSender && <div>Post by: {currentSender}</div>}
        {sortByCreationTime.map((post) => (
          <PostItem key={post.id}>
            <PostContent>{post.message}</PostContent>
            <DatePost>{formatDate(post.created_time)}</DatePost>
          </PostItem>
        ))}
      </ListWrapper>
    </React.Fragment>
  );
};

export default PostList;
