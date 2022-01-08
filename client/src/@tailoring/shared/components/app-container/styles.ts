import styled from "styled-components";

export const content = styled.div`
  &.app-container {
    width: calc(100% - 300px);
    margin-left: 300px;
    padding: 2%;
    transition: margin-left 0.4s, margin-top 0.4s, width 0.4s;

    @media screen and (max-width: 1200px) {
      margin-left: 0;
      margin-top: 64px;
      height: calc(100% - 64px);
      width: 100%;
    }

    @media screen and (max-width: 600px) {
      margin-top: 54px;
      height: calc(100% - 54px);
    }
  }

  &.app-content {
    margin: auto;
    padding: 2%;

    @media screen and (min-width: 768px) {
      max-width: 700px;
    }

    @media screen and (min-width: 1200px) {
      max-width: 850px;
    }
  }

  .card-wrapper {
    height: 100%;
  }

  .css-1t29gy6-MuiToolbar-root {
    @media (min-width: 0px) and (orientation: landscape) {
      min-height: 64px;
    }

    @media (min-width: 600px) {
      min-height: 64px;
    }
  }
`;
