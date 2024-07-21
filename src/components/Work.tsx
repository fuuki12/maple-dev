import { createSignal } from "solid-js";
import { css } from "solid-styled";

import logo from "~/assets/logo.jpg";
import githubIcon from "~/assets/github.svg";
import zennIcon from "~/assets/zenn.svg";

export default function Work() {
  css`
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
      max-width: 14rem;
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
  return (
    <section>
      <div class="card">
        <h3>Profile</h3>
        <img id="profile" src={logo} />
        <h2>Maple</h2>
        <span id="gray">software engineer</span>
        <span>
          株式会社SODAでフロントエンドエンジニアをしています。
          <br />
          フロントエンドアーキテクチャやデザインシステムの構築に興味があります。
          <br />
          <small id="gray">※このサイトは全てSolidJSで作成しています。</small>
        </span>
        <div id="icon">
          <a href="http://github.com/fuuki12">
            <img class="network-icon" src={githubIcon} />
          </a>
          <a href="https://zenn.dev/maple_siro">
            <img class="network-icon" src={zennIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}
