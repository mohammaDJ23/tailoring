import styled from "styled-components";

export const content = styled.div`
  &.side-navigation {
    z-index: 2;
    width: 300px;
    top: 0;
    left: 0;
  }

  .level-one {
    padding-left: 26px;
  }

  .arrow {
    transition: transform 0.2s;
  }

  .rotate-90 {
    transform: rotate(90deg);
  }
`;

export const text = styled.p`
  &.fs-20 {
    font-size: 20px;
  }
`;

export const img = styled.img``;
