import { api } from "./apiUrls";
import { makeRequest } from "./apiUtils.js";

const { getPosts, getCategories, getTags, getPostDetails } = api;
export default {
  getPosts(callback, params) {
    makeRequest(getPosts, callback, params);
  },
  getCategories(callback) {
    makeRequest(getCategories, callback);
  },
  getTags(callback) {
    makeRequest(getTags, callback);
  },
  getPostDetails(callback, pathValue) {
    makeRequest(getPostDetails(pathValue), callback);
  }
};
