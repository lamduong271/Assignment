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
