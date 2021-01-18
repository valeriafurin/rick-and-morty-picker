import styled from "styled-components";

export const Button = styled.button`
  width: 220px;
  height: 50px;
  margin-top: 10px;
  margin-left: 1rem;
  border: none;
  outline: none;
  color: #fff;
  background: rgba(98, 164, 171, 0.75);
  cursor: pointer;
  position: relative;
  border-radius: 10px;

  &:hover:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:hover:active {
    color: #000;
  }

  &:hover:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(98, 164, 171, 0.75);
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
