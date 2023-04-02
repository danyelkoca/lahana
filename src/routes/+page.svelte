<script>
  import Navbar from "$components/Navbar.svelte";
  import { language } from "$stores/main";
  import carrot from "$assets/landing/carrot.png";
  import jar from "$assets/landing/jar.png";

  const strings = {
    main_message: {
      en: "Healthiest pickles you can imagine",
      jp: "日本で最も美味しいピクルスを作っています",
    },
    register: {
      en: "Register to our waiting list",
      jp: "お待ちリストに登録する",
    },
    second_message: {
      en: "It's not only healthy, but it's also freaking delicious",
      jp: "美味しいだけでなく、健康的なピクルスです",
    },
  };
</script>

<Navbar color={"white"} background_color={"#702963"} />
<div class="container">
  <!-- <div class="img-container">
    <img class="carrot" src={carrot} alt="lahana" />
  </div> -->
  <div class="sub-container container-main">
    <div class="main-message">
      <h1 class={`${$language}`}>
        {strings["main_message"][$language]}
      </h1>
    </div>
    <div class="img-container">
      <img src={carrot} alt="lahana" />
    </div>
  </div>
  <div class="container-cta">
    <button>{strings["register"][$language]}</button>
  </div>
  <div class="sub-container container-secondary">
    <div class="img-container">
      <img src={jar} alt="lahana" />
    </div>
    <div class="main-message">
      <h1 class={`${$language}`}>
        {strings["second_message"][$language]}
      </h1>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .sub-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0 2rem 0;
    flex-direction: row;
  }
  .container-main {
    background-color: rgba(112, 41, 99, 0.1);
  }

  .container-secondary {
    background-color: rgba(102, 170, 0, 0.2);
  }

  .container-main .main-message {
    max-width: 50vw;
  }
  .container-main img {
    max-width: 50vw;
  }
  .container-secondary .main-message {
    max-width: 65vw;
  }
  .container-secondary img {
    max-width: 35vw;
  }
  .container-cta {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 2rem 0;
    flex-direction: row;
  }

  .container-cta button {
    background-color: rgba(112, 41, 99, 1);
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 1rem;
    color: white;
  }

  .img-container {
    padding: 0;
  }

  .img-container img {
    width: 100%;
    object-fit: cover;
    display: block;
  }

  .main-message {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem;
    color: rgb(86, 14, 75);
  }
  .main-message .jp {
    font-weight: 400;
  }
</style>
