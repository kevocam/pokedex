import { createStore } from "vuex";

export default createStore({
  state: {
    poke: {},
    favorite: [],
    load: true,
    loadingStatus: "notLoading",
    todos: [],

    filter: {
      query: "",
      available: true,
    },
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.load = status;
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    SET_POKE(state, poke) {
      state.poke = poke;
    },
    SET_FAVORITE(state, poke) {
      //comprobamos si ya existe el pokemon en favoritos
      state.favorite.includes(poke) ? "" : state.favorite.push(poke);
    },
    SET_FILTER(state, payload) {
      console.log(payload);
      console.log(state.todo);
    },
    REMOVE(state, searchInput) {
      state.todos = console.log(searchInput);
    },
    SEARCH_POKE(state, payload) {
      console.log(payload);
      state.cache = state.todos.filter((item) => {
        console.log(item.name);
        return item.name.includes(payload);
      });

      payload;
    },
    SET_QUERY(state, query) {
      if (query.length > 1) {
        state.filter.query = query;
        state.todos = state.todos.filter((item) => item.name.includes(query));
      }
    },
  },
  getters: {
    filteredPokemon(state) {
      let todos = state.todos;
      if (state.filter.query.length > 2) {
        return todos.filter((movie) =>
          movie.name.toLowerCase().includes(state.filter.query)
        );
      }
      return todos;
    },
  },
  actions: {
    //llamada a la API todos pokemones
    fetchTodos(context) {
      context.commit("SET_LOADING_STATUS", true);
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((data) => data.json())
        .then((data) => {
          context.commit("SET_LOADING_STATUS", false);
          context.commit("SET_TODOS", data.results);
        });
    },
    ///llamada a la api, por nombre de pokemon
    fetchPoke(context, payload) {
      context.commit("SET_LOADING_STATUS", true);
      fetch("https://pokeapi.co/api/v2/pokemon/" + payload.toLowerCase())
        .then((data) => data.json())
        .then((data) => {
          context.commit("SET_LOADING_STATUS", false);
          context.commit("SET_POKE", data);
        });
    },
    savePoke(context, id) {
      context.commit("SET_FAVORITE", id);
    },
    searchPoke(context, id) {
      context.commit("SEARCH_POKE", id);
    },
    remove(context, id) {
      context.commit("REMOVE", id);
    },
  },
  modules: {},
});
