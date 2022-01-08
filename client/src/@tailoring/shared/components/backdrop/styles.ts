import styled from "styled-components";

export const content = styled.div`
  &.backdrop {
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 0.4s, visibility 0.4s;
  }
`;
