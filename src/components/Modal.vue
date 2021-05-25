<template>
  <section class="overlay">
    <div class="modal fade-in">
      <div class="modal__header">
        <!-- <div class="overlay"></div> -->
        <img :src="imagePoke" :alt="poke.name" class="modal__header--img" />
        <button class="modal__header--close" @click="closeModal">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0C5.81855 0 0 5.81855 0 13C0 20.1815 5.81855 26 13 26C20.1815 26 26 20.1815 26 13C26 5.81855 20.1815 0 13 0ZM19.3742 16.4125C19.6206 16.6589 19.6206 17.0573 19.3742 17.3036L17.2984 19.3742C17.052 19.6206 16.6536 19.6206 16.4073 19.3742L13 15.9355L9.5875 19.3742C9.34113 19.6206 8.94274 19.6206 8.69637 19.3742L6.62581 17.2984C6.37944 17.052 6.37944 16.6536 6.62581 16.4073L10.0645 13L6.62581 9.5875C6.37944 9.34113 6.37944 8.94274 6.62581 8.69637L8.70161 6.62056C8.94798 6.37419 9.34637 6.37419 9.59274 6.62056L13 10.0645L16.4125 6.62581C16.6589 6.37944 17.0573 6.37944 17.3036 6.62581L19.3794 8.70161C19.6258 8.94798 19.6258 9.34637 19.3794 9.59274L15.9355 13L19.3742 16.4125Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div class="modal__content">
        <p>Name: {{ poke.name }}</p>
        <p>Weight: {{ poke.weight }}</p>
        <p>Height: {{ poke.height }}</p>
        <p>
          Types:
          {{ poke.types ? poke.types.map((e) => e.type.name).toString() : " " }}
        </p>
      </div>
      <div class="modal__footer">
        <Button content="Share to my friends" @click="shareData" />

        <span v-if="allFavorites.includes(poke.name)">
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
        </span>
        <span v-else>
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
              fill="#BFBFBF"
            />
          </svg>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import Button from "@/components/Button";

export default {
  name: "Modal",
  components: { Button },
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    shareData() {
      let copyData = `${this.$store.state.poke.name},${
        this.$store.state.poke.weight
      },${this.$store.state.poke.height},${
        this.$store.state.poke.types
          ? this.$store.state.poke.types.map((e) => e.type.name).toString()
          : ""
      }`;
      let nodoTemp = document.createElement("textarea");
      document.body.appendChild(nodoTemp);
      nodoTemp.value = copyData;
      nodoTemp.select();
      document.execCommand("copy");
      document.body.removeChild(nodoTemp);
    },
  },
  computed: {
    allFavorites() {
      return this.$store.state.favorite;
    },
    poke() {
      return this.$store.state.poke;
    },
    imagePoke() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.$store.state.poke.id}.png`;
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/scss/globals.scss";

.modal {
  background-color: #fefefe;
  @media (min-width: 768px) {
    width: 570px;
  }
  border: none;
  width: 315px;
  height: 506px;
  max-height: 506px;
  border-radius: 5px;
  font-size: 1.8rem;
  line-height: 150%;
  color: $gray;
  font-weight: 500;
  line-height: 27px;
  &__header {
    height: 220px;
    background-image: url("../assets/modalBackgound.png");
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    
    background-color: #04020e;
    background-blend-mode: screen;

    &--img {
      width: 180px;
      height: 180px;
    }
    &--close {
      position: absolute;
      background: none;
      border: none;
      top: 15px;
      right: 15px;
      animation-duration: 400ms;
      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
  &__content {
    padding: 20px 30px 0 30px;
    text-transform: capitalize;
    p {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(232, 232, 232, 1);
    }
  }
  &__footer {
    padding: 0 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.btn {
  margin: inherit;
}

.overlay {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-in {
	-webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}


/* ----------------------------------------------
 * Generated by Animista on 2021-5-24 11:8:44
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
