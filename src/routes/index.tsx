import { createResource, createEffect, onMount } from "solid-js";

import Profile from "~/components/Profile";
import Header from "~/components/Header";
import About from "~/components/About";
import Work from "~/components/Work";

export default function Home() {
  return (
    <main>
      <Header />
      <Profile />
      <Work />
      <About />
    </main>
  );
}
