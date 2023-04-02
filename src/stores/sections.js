import { readable } from "svelte/store";
import About from "$components/sections/About.svelte";
import Blog from "$components/sections/Blog.svelte";
import Contact from "$components/sections/Contact.svelte";
import Cart from "$components/sections/Cart.svelte";
import about from "$assets/icons/about.svelte";
import blog from "$assets/icons/blog.svelte";
import cart from "$assets/icons/cart.svelte";
import contact from "$assets/icons/contact.svelte";

export const sections = readable([
  {
    id: "cart",
    title: "Cart",
    component: Cart,
    icon: cart,
  },
  {
    id: "about",
    title: "About",
    component: About,
    icon: about,
  },
  {
    id: "blog",
    title: "Blog",
    component: Blog,
    icon: blog,
  },
  {
    id: "contact",
    title: "Contact",
    component: Contact,
    icon: contact,
  },
]);
