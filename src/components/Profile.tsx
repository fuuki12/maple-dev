import { createSignal } from "solid-js";
import { css } from "solid-styled";

import logo from "../assets/logo.jpg";

export default function Profile() {
  const [count, setCount] = createSignal(0);
  css`
    #article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 8px;
      margin-top: 24px;
    }

    img {
      border-radius: 50%;
      width: 100%;
      max-width: 12rem;
      height: auto;
    }

    span {
      color: #999;
    }
  `;
  return (
    <div id="article">
      <img src={logo}></img>
      <h2>Maple</h2>
      <span>software engineer</span>
      <p>ベンチャーで主にReactを書いてます。SolidJS Love</p>
    </div>
  );
}
