import styled, { keyframes } from "styled-components";

const ani = keyframes`
  0% {
    stroke-dasharray: 1 98;
    stroke-dashoffset: -105;
  }
  
  50% {
    stroke-dasharray: 80 10;
    stroke-dashoffset: -160;
  }
  
  100% {
    stroke-dasharray: 1 98;
    stroke-dashoffset: -300;
  }
`;

export const content = styled.div`
  &.container {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .spinner {
    transform-origin: center;
    animation-name: ${ani};
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier;
    animation-iteration-count: infinite;
  }
`;
