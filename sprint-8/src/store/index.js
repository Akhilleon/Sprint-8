import { createStore } from 'vuex'
import axios from 'axios'
import users from './modules/users.js'

const store = createStore({
  state: {
    starshipsRaw: {},
    starships: [],
    starshipCard: {},
    page: 1,
    isLoadingMore: false,
  },
  getters: {

  },
  mutations: {
    SET_STARSHIPS(state, starships) {
      state.starships = state.starships.concat(starships);
    },
    storeStarship(state, index) {
        state.starshipCard = state.starships[index];
    },
    SET_STARSHIPS_RAW(state, rawStarships) {
        state.starshipsRaw = rawStarships;
    },
    nextPage(state) {
        if (!state.isLoadingMore) {
          state.page++;
        }
    },
    initialiseStore(state) {
			if(localStorage.getItem('store')) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store')))
      );
      }
		},
  },
  actions: {
    fetchStarshipsRaw({ commit }) {
      if(!this.state.isLoadingMore) {
        this.state.isLoadingMore = true;
        axios.get(`https://swapi.dev/api/starships/?page=${this.state.page}`).then(response => {
          commit('SET_STARSHIPS', response.data.results);
          commit('SET_STARSHIPS_RAW', response.data);
          this.state.isLoadingMore = false;           
          });
      }
    },
  },
  modules: {
    users,
  },
});
store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});
export default store;