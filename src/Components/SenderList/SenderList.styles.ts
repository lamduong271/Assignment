import styled from "styled-components";

export const SenderListItem = styled.li<{ highlight: boolean }>`
  list-style: none;
  padding: 8px;
  border: ${(props) =>
    props.highlight ? "2px solid  orange" : "1px solid  black"};
  color: ${(props) => (props.highlight ? "orange" : "black")};
  margin: 8px 0;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;

export const FindSenderInput = styled.input`
  height: 40px;
  width: 70%;
  margin: 30px;
  padding: 0 20px;
  outline: none;
  border: 1px solid black;
`;

export const ListWrapper = styled.ul`
  padding: 0 30px;
`;
