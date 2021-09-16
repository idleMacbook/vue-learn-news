import {
  fetchAskList,
  fetchItem,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
} from '../api';

export default {
  /* FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => context.commit('SET_NEWS', response.data))
      .catch((error) => console.log(error));
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((response) => context.commit('SET_ASK', response.data))
      .catch((error) => console.log(error));
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then((response) => context.commit('SET_JOBS', response.data))
      .catch((error) => console.log(error));
  }, */
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => commit('SET_NEWS', data))
      .catch((error) => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => commit('SET_ASK', data))
      .catch((error) => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => commit('SET_JOBS', data))
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => commit('SET_USER', data))
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, Itemid) {
    fetchItem(Itemid)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch((error) => console.log(error));
  },
};
