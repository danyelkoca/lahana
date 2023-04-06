import { readable } from "svelte/store";
import about from "$assets/icons/about.svelte";
import blog from "$assets/icons/blog.svelte";
import cart from "$assets/icons/cart.svelte";
import contact from "$assets/icons/contact.svelte";

export const sections = readable([
  {
    id: "cart",
    title: { en: "Cart", jp: "カート" },
    icon: cart,
  },
  {
    id: "about",
    title: { en: "About", jp: "私たしについて" },
    icon: about,
  },
  {
    id: "blog",
    title: { en: "Blog", jp: "ブログ" },
    icon: blog,
  },
  {
    id: "contact",
    title: { en: "Contact", jp: "問い合わせ" },
    icon: contact,
  },
]);
