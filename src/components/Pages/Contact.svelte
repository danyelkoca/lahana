<script>
  import Navbar from "$components/Navbar.svelte";
  import { language } from "$stores/main";

  const strings = {
    header: {
      en: "Contact",
      jp: "問い合わせ",
    },
  };
</script>

<Navbar color={"#702963"} background_color={"white"} />

<div>{strings.header[$language]}</div>
