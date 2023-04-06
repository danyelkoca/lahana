<script>
  import Navbar from "$components/Navbar.svelte";
  import { language } from "$stores/main";
  import carrot from "$assets/landing/carrot.png";
  import jar from "$assets/landing/jar.png";
  import landing from "$assets/landing/landing-2.jpg";

  const strings = {
    main_message: {
      en: "Healthiest and most delicious pickles in Japan are work in progress...",
      jp: "日本で最も美味しくて健康的なピクルスを作っています",
    },
    singup: {
      en: "Sign up to our waiting list to get informed when we launch!",
      jp: "お待ちリストに登録する",
    },
  };

  async function post(event) {
    const formEl = event.target;
    const data = new FormData(formEl);

    // you can see everything about the form
    console.dir(data);

    const response = await fetch(formEl.action, {
      method: "POST",
      body: data,
    });
    const responseData = await response.json();

    console.log(responseData);
  }
</script>

<Navbar color={"white"} background_color={"#702963"} />
<div class="container">
  <div class="main">
    <div class="left">
      <p
        class="main-message"
        style={`font-weight: ${$language == "jp" ? "400" : ""}`}
      >
        {strings.main_message[$language]}
      </p>
      <hr class="hr" />
      <p
        class="second-message"
        style={`font-weight: ${$language == "jp" ? "400" : ""}`}
      >
        {strings.singup[$language]}
      </p>
      <form
        class="form"
        method="POST"
        action="/login"
        on:submit|preventDefault={post}
      >
        <input
          name="email"
          type="email"
          placeholder="example@email.com"
        /><button>Sign up</button>
      </form>
    </div>
    <div class="right">
      <div class="img-container">
        <div class="img-sub-container">
          <img src={landing} alt="lahana" />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    background-color: #f9eef7;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    widows: 600px;
  }

  .container .left,
  .container .right {
    width: 50%;
    min-width: 50%;
    max-width: 50%;
  }

  .container .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-container {
    position: relative;
    z-index: 1;
  }

  .img-container::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 2rem;
    right: 0rem;
    bottom: 0rem;
    border-radius: 1rem;
    background-color: rgba(112, 41, 99, 0.2);
    z-index: -1;
  }

  .img-sub-container {
    max-width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    margin: 1rem;
    z-index: 2;
  }

  .img-container img {
    object-fit: cover;
    display: block;
    width: 100%;
    max-width: 400px;
    z-index: 2;
  }

  .main-message,
  .second-message {
    color: #702963;
    font-weight: bold;
  }

  .main-message {
    font-size: 2.75rem;
    line-height: 1.25em;
    margin: 1rem;
  }

  .hr {
    margin: 1rem;
    border: 0.5px solid rgba(112, 41, 99, 0.3);
  }

  .second-message {
    margin: 2rem 1rem 1rem 1rem;
    color: #494d64;
  }

  .form {
    margin: 1rem;
    display: flex;
    flex-direction: row;
  }

  input {
    border: 0.05rem solid #702963;
    padding: 0.5rem;
    border-radius: 0.5rem 0 0 0.5rem;
    min-width: 250px;
  }
  button {
    border: 0.05rem solid #702963;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 0 0.5rem 0.5rem 0;
    background-color: #702963;
    color: white;
    font-weight: lighter;
  }
</style>
