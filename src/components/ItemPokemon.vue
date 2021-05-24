<template>
  <div class="itemPokemon">
    <div class="itemPokemon__text">
      <p>
        <slot></slot>
      </p>
    </div>
    <div class="itemPokemon__badge">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22" cy="22" r="22" fill="#F5F5F5" />
        <path
          d="M20.6052 9.90444L17.4318 16.627L10.3316 17.7086C9.05834 17.9015 8.54806 19.5415 9.47142 20.4809L14.6082 25.7107L13.3933 33.0984C13.1746 34.4338 14.5208 35.4341 15.6482 34.8096L22 31.3213L28.3518 34.8096C29.4792 35.429 30.8254 34.4338 30.6067 33.0984L29.3918 25.7107L34.5286 20.4809C35.4519 19.5415 34.9417 17.9015 33.6684 17.7086L26.5682 16.627L23.3948 9.90444C22.8262 8.70615 21.1787 8.69092 20.6052 9.90444Z"
          fill="#ECA539"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemPokemon",
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import "../scss/globals.scss";

.itemPokemon {
  border-radius: 5px;
  margin: 10px;

  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 10px 17px 20px;
  &__text {
    text-transform: capitalize;
    width: 80%;
    p {
      color: $gray-dark;
      font-weight: 500;
    }
  }
  %__badge {
    width: 20%;
  }
}
</style>
