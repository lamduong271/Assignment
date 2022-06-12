import styled, { css } from "styled-components";

const sharedStyle = css`
  flex: 1 0 50%;
  background: lightgreen;
`;

const inputSharedStyled = css`
  height: 40px;
  width: 70%;
  margin: 30px;
  padding: 0 20px;
  outline: none;
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

export const FindPostInput = styled.input`
  ${inputSharedStyled}
`;
