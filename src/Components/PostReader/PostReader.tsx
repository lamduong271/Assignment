import React, { FC, useEffect, useState } from "react";
import { instance } from "../../Services/api";
import { useAppContext } from "../../Services/app-context";
import PostList from "../Posts/PostList";
import SenderList from "../SenderList/SenderList";
import {
  PostsContainer,
  SenderContainer,
  PostListContainer,
} from "./PostReader.styles";

export interface PostReaderType {
  page: number;
  posts: SinglePostReaderType[];
}

export interface SinglePostReaderType {
  created_time: string;
  from_id: string;
  from_name: string;
  id: string;
  message: string;
  type: string;
}

const Post: FC = () => {
  const [allPosts, setAllPosts] = useState<PostReaderType | null>(null);
  const { slToken } = useAppContext();
  useEffect(() => {
    const getAllPosts = async () => {
      const response = await instance.get("/posts", {
        params: {
          sl_token: slToken || localStorage.getItem("slToken"),
          page: 1,
        },
      });

      const { data } = response.data;
      setAllPosts(data);
    };
    getAllPosts();
  }, [slToken]);

  if (allPosts) {
    return (
      <PostsContainer>
        <SenderContainer>
          <SenderList allPosts={allPosts} />
        </SenderContainer>
        <PostListContainer>
          <PostList allPosts={allPosts}></PostList>
        </PostListContainer>
      </PostsContainer>
    );
  }
  return null;
};

export default Post;
