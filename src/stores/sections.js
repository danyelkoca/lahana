import { readable } from "svelte/store";
import About from "$components/sections/About.svelte";
import Blog from "$components/sections/Blog.svelte";
import Contact from "$components/sections/Contact.svelte";

export const sections = readable([
  {
    id: "about",
    title: "About",
    component: About,
  },
  {
    id: "blog",
    title: "Blog",
    component: Blog,
  },
  {
    id: "contact",
    title: "Contact",
    component: Contact,
  },
]);
