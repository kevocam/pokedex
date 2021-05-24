<template>
  <Loading v-if="this.$store.state.load" />
  <section class="emptyList">
    <div class="inputContainer">
      <div class="input">
        <div class="input__icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7552 15.5622L14.2499 12.0574C14.0917 11.8992 13.8772 11.8113 13.6522 11.8113H13.0791C14.0495 10.5705 14.6261 9.00967 14.6261 7.31179C14.6261 3.27273 11.3528 0 7.31304 0C3.27329 0 0 3.27273 0 7.31179C0 11.3508 3.27329 14.6236 7.31304 14.6236C9.01121 14.6236 10.5723 14.0471 11.8134 13.0768V13.6498C11.8134 13.8748 11.9013 14.0892 12.0595 14.2474L15.5648 17.7522C15.8953 18.0826 16.4297 18.0826 16.7567 17.7522L17.7517 16.7573C18.0822 16.4269 18.0822 15.8926 17.7552 15.5622ZM7.31304 11.8113C4.82731 11.8113 2.81271 9.80061 2.81271 7.31179C2.81271 4.82648 4.82379 2.81223 7.31304 2.81223C9.79876 2.81223 11.8134 4.82297 11.8134 7.31179C11.8134 9.79709 9.80228 11.8113 7.31304 11.8113Z"
              fill="#BFBFBF"
            />
          </svg>
        </div>
        <div class="input__text">
          <input v-model="search" placeholder="Search" type="text" />
        </div>
      </div>
    </div>
    <div class="listPokemon">
     
       <!-- LOST -->

       <Lost v-show="allPokemons.length == 0"/>

      <div
        class="itemPokemon"
        v-for="pokemon in allPokemons"
        :key="pokemon.name"
      >
        <div class="itemPokemon__text" @click="openModal(pokemon.name)">
          <p>
            {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
          </p>
        </div>
        <div class="itemPokemon__badge" @click="savePoke(pokemon.name)">
          <span v-if="allFavorites.find((e) => e === pokemon.name)">
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
    </div>
    <Navigation />

    <Modal v-on:close-modal="closeModal" v-if="isModalOpen" />
  </section>
</template>

<script>
// @ is an alias to /src

import api from "../api";
import Modal from "@/components/Modal";
import Navigation from "@/components/Navigation";
import Loading from "@/views/Loading";
import Lost from "@/components/Lost";


/* import ItemPokemon from "@/components/ItemPokemon";
 */
export default {
  name: "ListPokemon",
  components: { Modal, Navigation, Loading, Lost /* ItemPokemon */ },

  data() {
    return {
      pokemons: [],
      pokemonInfo: [],
      isModalOpen: false,
    };
  },
  methods: {
    /* searchPoke(event){
        this.$store.dispatch("searchPoke", event);      
        
      }, */
    remove(search) {
      this.$store.dispatch("remove", search);
    },
    openModal(id) {
      this.isModalOpen = true;
      this.$store.dispatch("fetchPoke", id);
    },
    closeModal() {
      this.isModalOpen = false;
    },
    savePoke(id) {
      this.$store.dispatch("savePoke", id);
    },
    query(search) {
      console.log("hey");
      this.$store.dispatch("searchPoke", search);
    },
  },
  created() {
    //llamamos al metodo en vuex genera la llamada de los pokemons
    api.getPokemons().then((data) => (this.pokemons = data));
    this.$store.dispatch("fetchTodos");
  },
  computed: {
    search: {
      get() {
        return this.$store.state.filter.query;
      },
      set(val) {
        this.$store.commit("SET_QUERY", val);
      },
    },
    allFavorites() {
      return this.$store.state.favorite;
    },
    allPokemons() {
      return this.$store.state.todos;
    },
    poke() {
      return this.$store.state.poke;
    },
  },
};
</script>

<style lang="scss">
@import "../scss/globals.scss";

.emptyList {
  width: 100%;
  padding: 35px 0;
}
.inputContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  width: 315px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  &__icon {
    padding: 15px 0 16px 15px;
    height: 100%;
  }
  &__text {
    height: 100%;
    input {
      height: 100%;
      font-size: 1.6rem;
      border: none;
      padding-left: 10px;
      color: $gray-ligth;
      outline: none;
      &:focus {
        color: $gray-dark;
        font-weight: 500;
      }
    }
  }
}
.listPokemon {
  width: 100%;
  padding-top: 40px;
  max-width: 570px;
  margin: 0 auto;
}

.itemPokemon {
  border-radius: 5px;
  margin: 10px;

  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 10px 17px 20px;
  &:hover {
    background-color: $gray-ligth;
    cursor: pointer;
  }

  &__text {
    width: 85%;
    height: 100%;

    p {
      color: $gray-dark;
      font-weight: 500;
      width: 100%;
      height: 100%;
      &:hover {
        background-color: $gray-ligth;
        cursor: pointer;
      }
    }
  }
  %__badge {
    width: 15%;
  }
}
</style>

