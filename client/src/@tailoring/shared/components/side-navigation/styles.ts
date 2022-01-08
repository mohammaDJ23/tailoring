import styled from "styled-components";

export const content = styled.div`
  &.side-navigation {
    z-index: 4;
    width: 300px;
    top: 0;
    left: 0;
    transition: left 0.4s;

    @media screen and (max-width: 768px) {
      width: 250px;
    }

    @media screen and (max-width: 300px) {
      width: 220px;
    }
  }

  &.enable-navigation {
    @media screen and (max-width: 1200px) {
      left: 0;
    }
  }

  &.disable-navigation {
    @media screen and (max-width: 1200px) {
      left: -300px;
    }
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
