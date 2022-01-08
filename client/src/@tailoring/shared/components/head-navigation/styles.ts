import styled from "styled-components";

export const content = styled.div`
  &.head-container {
    z-index: 2;
    top: -100px;
    left: 0;
    transition: top 0.4s;

    @media screen and (max-width: 1200px) {
      top: 0;
    }
  }
`;
