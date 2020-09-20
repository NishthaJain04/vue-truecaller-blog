const API_BASE_PATH = "https://public-api.wordpress.com/rest/v1.1/sites/107403796/";
export const api = {
  getCategories: API_BASE_PATH + "categories",
  getTags: API_BASE_PATH + "tags?order_by=count",
  getPosts: API_BASE_PATH + "posts",
  getPostDetails(postId) {
    return `${API_BASE_PATH}posts/${postId}`;
  }
};
