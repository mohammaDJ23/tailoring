import styled from "styled-components";

export const content = styled.div`
  &.card-wrapper {
    border-radius: 10px;
    padding: 20px;

    @media screen and (max-width: 400px) {
      padding: 12px;
    }
  }
`;
