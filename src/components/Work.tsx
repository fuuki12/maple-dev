import { For } from "solid-js";
import { css } from "solid-styled";

export default function Work() {
  css`
    .subCard {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 50px auto;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      border-radius: 10px;
    }

    #icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 8px;
    }

    .work-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
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

  const works = [
    {
      title: "株式会社SODA",
      description:
        "CtoCのフロントエンド開発、よりデザインを重視したLPの作成なども行っています。また、フロントエンドアーキテクチャの構築導入を行っております。",
      period: "202402 - 現在",
    },
    {
      title: "株式会社LabBase",
      description:
        "フロントエンドエンジニアとして、就職支援サービスの開発を行っていました。",
      period: "202210 - 202401",
    },
    {
      title: "株式会社DynaxT",
      description:
        "主にJavaやC#を使用した業務系Webアプリケーションのバックエンド開発を行っていました。",
      period: "202210 - 202401",
    },
  ];

  return (
    <section>
      <div class="card">
        <h3>Works</h3>
        <div class="work-container">
          <For each={works}>
            {(work) => (
              <div class="subCard">
                <h4>{work.title}</h4>
                <span>{work.description}</span>
                <span>{work.period}</span>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
