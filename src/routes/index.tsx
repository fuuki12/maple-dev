import { createResource, createEffect, onMount } from "solid-js";

import Profile from "~/components/Profile";
import Header from "~/components/Header";
import About from "~/components/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Profile />
      <About />
    </main>
  );
}
