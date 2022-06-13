import styled, { css } from "styled-components";

const sharedStyle = css`
  flex: 1 0 50%;
  box-sizing: border-box;
  padding: 20px;
`;

export const PostsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const PostListContainer = styled.div`
  ${sharedStyle}
`;

export const SenderContainer = styled.div`
  ${sharedStyle}
`;

export const Loading = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #349fad;
  text-align: center;
  color: white;
  font-size: 20px;
`;
