import { For, createSignal } from "solid-js";
import { css } from "solid-styled";

import logo from "~/assets/logo.jpg";
import nextIcon from "~/assets/nextdotjs.svg";
import reactIcon from "~/assets/react.svg";
import solidIcon from "~/assets/solidjs.svg";
import typescriptIcon from "~/assets/typescript.svg";
import svelteIcon from "~/assets/svelte.svg";
import pythonIcon from "~/assets/python.svg";
import githubActionIcon from "~/assets/githubaction.svg";
import javascriptIcon from "~/assets/javascript.svg";
import amazonawsIcon from "~/assets/amazonaws.svg";

export default function Profile() {
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

    #icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 8px;
    }

    #profile {
      border-radius: 50%;
      width: 100%;
      max-width: 12rem;
      height: auto;
    }

    .network-icon {
      border-radius: 30%;
      width: 100%;
      max-width: 3rem;
      height: auto;
      pointer: cursor;

      &:hover {
        opacity: 0.5;
      }
    }

    #gray {
      color: #999;
    }
  `;

  const iconObj = [
    { img: nextIcon, name: "Next.js" },
    { img: reactIcon, name: "React" },
    { img: solidIcon, name: "SolidJS" },
    { img: typescriptIcon, name: "TypeScript" },
    { img: svelteIcon, name: "Svelte" },
    { img: pythonIcon, name: "Python" },
    { img: githubActionIcon, name: "GitHub Actions" },
    { img: javascriptIcon, name: "JavaScript" },
    { img: amazonawsIcon, name: "AWS" },
  ];

  return (
    <div id="article">
      <h2>Skills</h2>
      <For each={iconObj}>
        {(key) => {
          return (
            <div id="icon">
              <img class="network-icon" src={key.img} />
              <span>{key.name}</span>
            </div>
          );
        }}
      </For>
    </div>
  );
}
