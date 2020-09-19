import apiUrls from "./apiUrls";
import apiCall from "./apiUtils.js";

export default {
  getPosts(callback, params) {
    apiCall.makeRequest(apiUrls.api.getPosts, callback, params);
  },
  getCategories(callback) {
    apiCall.makeRequest(apiUrls.api.getCategories, callback);
  },
  getTags(callback) {
    apiCall.makeRequest(apiUrls.api.getTags, callback);
  },
  getPostDetails(callback, pathValue) {
    apiCall.makeRequest(apiUrls.api.getPostDetails(pathValue), callback);
  }
};
