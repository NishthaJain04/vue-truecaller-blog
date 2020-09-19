import Vue from "vue";
import Vuex from "vuex";
import api from "../api/blogApis.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    categories: [],
    tags: [],
    postDetails: {},
    found: ""
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getCategories(state) {
      return state.categories;
    },
    getTags(state) {
      return state.tags.slice(0, 10);
    },
    getPostDetails(state) {
      return state.postDetails;
    },
    found(state) {
      return state.found;
    }
  },
  mutations: {
    setPosts(state, val) {
      state.posts = val;
    },
    setCategories(state, val) {
      state.categories = val.categories;
    },
    setTags(state, val) {
      state.tags = val.tags;
    },
    setPostDetails(state, val) {
      state.postDetails = val;
    },
    setFound(state, val) {
      state.found = val;
    }
  },
  actions: {
    GET_POSTS({ state, commit }, { success, params, isNewPage }) {
      api.getPosts(response => {
        if (isNewPage) {
          commit("setFound", response.found);
          commit("setPosts", response.posts);
        } else {
          commit("setPosts", [...state.posts, ...response.posts]);
        }
        success && success(response.posts);
      }, params);
    },
    GET_CATEGORIES({ commit }) {
      api.getCategories(response => {
        commit("setCategories", response);
      });
    },
    GET_TAGS({ commit }) {
      api.getTags(response => {
        commit("setTags", response);
      });
    },
    GET_POST_DETAILS({ commit }, { pathValue }) {
      api.getPostDetails(response => {
        commit("setPostDetails", response);
      }, pathValue);
    },
    RESET_DETAILS({ commit }) {
      commit("setPostDetails", {});
    },
    RESET_POSTS({ commit }) {
      commit("setPosts", []);
    }
  },
  modules: {}
});
