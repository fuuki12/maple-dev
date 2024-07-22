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
import { hydrate, renderToString } from "solid-js/web";
import top from "~/assets/top.webp";
import ParticlesBackground from "~/components/ParticlesBackground";

function GlobalStyles() {
  css`
    @global {
      body {
        font-family: "M PLUS 2", sans-serif;
        margin: 0 !important;
        background-color: #000;
      }

      a {
        margin-right: 1rem;
      }

      main {
        text-align: center;
        margin: 0 auto;
      }

      header {
        display: flex;
        justify-content: center;
        min-height: 7vh;
        background-color: #fff;
        border: 0.0625rem solid #dee2e6;
        box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1);
      }

      h1 {
        color: #d78484;
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
        font-weight: normal;
        font-size: 1.375rem;
        line-height: 1.4;
        margin: 0;
      }

      h3 {
        color: #d78484;
        font-size: inherit;
        line-height: 1.55;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.55rem;
      }

      p {
        max-width: 14rem;
        margin: 2rem auto;
        line-height: 1.35;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40%;
        gap: 8px;
        margin: 50px auto;
        background-color: #e0e0e0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        border-radius: 10px;
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Body>
          <GlobalStyles />
          <ParticlesBackground />
          <Suspense>
            <ErrorBoundary>
              {/* <div>
                <A href="/">Index</A>
                <A href="/about">About</A>
              </div> */}
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
