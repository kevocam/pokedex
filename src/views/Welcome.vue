<template>
  <section class="welcome">
    <div class="welcome__img">
      <img src="@/assets/welcome.png" alt="pokemon_pikachu" />
    </div>
    <div class="welcome__content">
      <div class="welcome__content--title">
        <h1>Welcome to Pokédex</h1>
      </div>
      <div class="welcome__content--description">
        <p>
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>
      </div>
      <div class="welcome__content--button">
        <router-link to="/list">
          <Button class="btn-active" content="Get started" icon="start" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button";
export default {
  name: "Welcome",
  components: {
    Button,
  },
};
</script>

<style scoped lang="scss">
@import "../scss/globals.scss";

.welcome {
  width: 100%;
  &__img {
    width: 100%;
    margin: 70px 0 60px 0;
    display: flex;
    justify-content: center;
  }
  &__content {
    text-align: center;
    &--title h1 {
      font-size: 2.6rem;
      font-weight: 700;
      color: $gray-dark;
    }
    &--description p {
      font-size: 1.8rem;
      max-width: 315px;
      line-height: 2.7rem;
      margin: 0 auto;

      font-weight: 500;
      color: $gray;
      margin-top: 30px;
      margin-bottom: 50px;
      @media (min-width: 700px) {
        max-width: 570px;
      }
    }
  }
}
</style>
