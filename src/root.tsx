// @refresh reload
import { Suspense } from "solid-js";
import { useAssets } from "solid-js/web";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { css, renderSheets, StyleRegistry, type StyleData } from "solid-styled";

import logo from "./assets/logo.jpg";

function GlobalStyles() {
  css`
    @global {
      body {
        font-family: Gordita, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
          "Helvetica Neue", sans-serif;
        mergin: 0 !important;
      }

      a {
        margin-right: 1rem;
      }

      main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
      }

      header {
        display: flex;
        min-height: 10vh;
        border: 0.0625rem solid #dee2e6;
      }
      #header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 14rem;
        gap: 8px;
      }

      h1 {
        color: #335d92;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 4rem auto;
        max-width: 14rem;
      }

      h2 {
        font-family: Open Sans;
        -webkit-tap-highlight-color: transparent;
        color: inherit;
        font-size: inherit;
        line-height: 1.55;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-family: Open Sans;
        font-weight: normal;
        font-size: 1.375rem;
        line-height: 1.4;
        margin: 0;
      }

      p {
        max-width: 14rem;
        margin: 2rem auto;
        line-height: 1.35;
      }

      img {
        border-radius: 100%;
        width: 100%;
        max-width: 5rem;
        height: auto;
      }

      @media (min-width: 480px) {
        h1 {
          max-width: none;
        }

        p {
          max-width: none;
        }
      }
    }
  `;
  return null;
}

export default function Root() {
  const sheets: StyleData[] = [];
  useAssets(() => renderSheets(sheets));

  return (
    <StyleRegistry styles={sheets}>
      <Html lang="en">
        <Head>
          <Title>Maple</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Body>
          <GlobalStyles />
          <Suspense>
            <ErrorBoundary>
              <header>
                <div id="header">
                  <img src={logo}></img>
                  <h2>Maple</h2>
                </div>
              </header>
              <div>
                <A href="/">Index</A>
                <A href="/about">About</A>
              </div>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </Body>
      </Html>
    </StyleRegistry>
  );
}
