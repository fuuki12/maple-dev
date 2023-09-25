import { css } from "solid-styled";

import logo from "../assets/logo.jpg";

export default function Header() {
  css`
    #header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 14rem;
      gap: 8px;
    }

    img {
      border-radius: 100%;
      width: 100%;
      max-width: 5rem;
      height: auto;
    }
  `;
  return (
    <header>
      <div id="header">
        <img src={logo}></img>
        <h2>Maple</h2>
      </div>
    </header>
  );
}
