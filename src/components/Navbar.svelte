<script>
  import { base } from "$app/paths";

  import Logo from "$assets/logo.svelte";

  import { sections } from "$stores/sections";
  import { language } from "$stores/main";
  export let color;
  export let background_color;

  function changeLang(lang) {
    console.log(lang);
    language.set(lang);
  }
</script>

<div
  class="navbar-container"
  style={`background: ${background_color}; color: ${color}`}
>
  <div class="navbar">
    <a href="{base}/" class="left">
      <Logo {color} />
      <h3>Lahana</h3>
    </a>
    <div class="right">
      <div class="language">
        <button
          on:click={() => changeLang("en")}
          class={$language == "en" ? "selected" : "notSelected"}
        >
          EN
        </button>
        &nbsp;
        <p>|</p>
        &nbsp;

        <button
          on:click={() => changeLang("jp")}
          class={$language == "jp" ? "selected" : "notSelected"}
        >
          JP
        </button>
      </div>
      {#each $sections as section}
        <a href="{base}/{section.id}">{section.title}</a>
      {/each}
    </div>
  </div>
</div>

<style>
  .language {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
  }
  button {
    font-weight: 300;
    font-size: 0.8rem;
    width: 1.5rem;
  }

  .selected {
    font-weight: 600;
    font-size: 1rem;
  }

  .navbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0.5rem 0.5rem 0.5rem 1rem;
  }

  .left h3 {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 1rem 0.5rem 0.5rem;
  }
  .right a {
    margin: 0.5rem;
    font-weight: 300;
  }
</style>
