import { fetchItem, fetchList, fetchUserInfo } from '../api';

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
  // Promise
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(({ data }) => commit('SET_LIST', data))
  //     .catch((error) => console.log(error));
  // },
  // async
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // FETCH_NEWS({ commit }) {
  //   fetchNewsList()
  //     .then((response) => {
  //       commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch((error) => console.log(error));
  // },
  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => commit('SET_ASK', data))
  //     .catch((error) => console.log(error));
  // },
  // FETCH_JOBS({ commit }) {
  //   fetchJobsList()
  //     .then(({ data }) => commit('SET_JOBS', data))
  //     .catch((error) => console.log(error));
  // },
  async FETCH_USER({ commit }, userName) {
    try {
      const response = await fetchUserInfo(userName);
      commit('SET_USER', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, Itemid) {
    try {
      const response = await fetchItem(Itemid);
      commit('SET_ITEM', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  /* FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => commit('SET_USER', data))
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, Itemid) {
    fetchItem(Itemid)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch((error) => console.log(error));
  }, */
};
