import { For } from "solid-js";
import { css } from "solid-styled";

import logo from "~/assets/logo.jpg";

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
      min-height 7vh;
    }

    img {
      border-radius: 50%;
      width: 100%;
      max-width: 5.5rem;
      height: auto;
    }

    a {
      position: relative;
      color: brown;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 50%;
      background: brown;
      transition: width 0.3s ease, left 0.3s ease;
    }

    a:focus {
      color: #d3b8ae;
      outline: none;
    }

    a:focus::after {
      width: 100%;
      left: 0;
    }
  `;

  const navs = [
    { url: "/", name: "Top" },
    { url: "/about", name: "About" },
    { url: "/Work", name: "Work" },
    { url: "/Zenns", name: "Zenns" },
  ];

  return (
    <header>
      <div id="header">
        <img src={logo}></img>
        <h1>Maple</h1>
      </div>
      {/* <div id="">
        <For each={navs}>{(item) => <a href={item.url}>{item.name}</a>}</For>
      </div> */}
    </header>
  );
}
