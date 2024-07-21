import { For, createEffect, onCleanup } from "solid-js";
import { css } from "solid-styled";

import logo from "~/assets/logo.jpg";
import nextIcon from "~/assets/nextdotjs.svg";
import reactIcon from "~/assets/react.svg";
import solidIcon from "~/assets/solid.svg";
import typescriptIcon from "~/assets/typescript.svg";
import svelteIcon from "~/assets/svelte.svg";
import pythonIcon from "~/assets/python.svg";
import githubActionIcon from "~/assets/githubactions.svg";
import javascriptIcon from "~/assets/javascript.svg";
import amazonawsIcon from "~/assets/amazonaws.svg";
import goIcon from "~/assets/go.svg";
import kotlinIcon from "~/assets/Kotlin logo.svg";
import vueIcon from "~/assets/Vue.js.svg";

export default function Profile() {
  css`
    #icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 80%;
      gap: 12px;
      padding: 14px;
      border: 0.0625rem solid #dee2e6;
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

    .progress-bar {
      width: 100%;
      background-color: #f1f1f1;
      border-radius: 8px;
      overflow: hidden;
    }

    .progress {
      height: 20px;
      background-color: #b5b5ff;
      text-align: center;
      line-height: 20px;
      color: white;
      border-radius: 8px;
    }

    #gray {
      color: #999;
    }
  `;

  createEffect(() => {
    const handleScroll = () => {
      // ドキュメントの高さ
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      // 現在のスクロール位置
      const scrollTop = document.documentElement.scrollTop;
      // スクロール位置に基づいてプログレスを計算（0から100まで）
      const scrollPercent = (scrollTop / docHeight) * 100;

      // 各プログレスバーの長さを更新
      iconObj.forEach((icon, index) => {
        const progressBar = document.querySelector(
          `#progress-${index}`
        ) as HTMLElement;
        if (progressBar) {
          progressBar.style.width = `${Math.min(scrollPercent, icon.level)}%`;
        }
      });
    };

    // スクロールイベントリスナーを追加
    window.addEventListener("scroll", handleScroll);

    // コンポーネントのアンマウント時にイベントリスナーを削除
    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  const iconObj = [
    { img: javascriptIcon, name: "JavaScript", level: 95 },
    { img: typescriptIcon, name: "TypeScript", level: 90 },
    { img: reactIcon, name: "React", level: 90 },
    { img: vueIcon, name: "Vue.js", level: 80 },
    { img: nextIcon, name: "Next.js", level: 80 },
    { img: solidIcon, name: "SolidJS", level: 75 },
    { img: svelteIcon, name: "Svelte", level: 60 },
    { img: pythonIcon, name: "Python", level: 70 },
    { img: kotlinIcon, name: "Kotlin", level: 60 },
    { img: goIcon, name: "Go", level: 30 },
    { img: githubActionIcon, name: "GitHub Actions", level: 65 },
    { img: amazonawsIcon, name: "AWS", level: 50 },
  ];

  return (
    <section>
      <div class="card">
        <h3>Skills</h3>
        <For each={iconObj}>
          {(key, index) => (
            <div id="icon">
              <img class="network-icon" src={key.img} />
              <div class="progress-bar">
                <div
                  id={`progress-${index()}`}
                  class="progress"
                  style={{ width: "0%" }}
                >
                  {key.name}
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
