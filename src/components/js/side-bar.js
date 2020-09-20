import { mapGetters } from "vuex";
export default {
  name: "SideBar",
  props: {
    msg: String
  },
  methods: {
    getPosts(postObj, name) {
      let params = {
        number: 25,
        order_by: "date",
        order: "DESC",
        page: 0
      };
      params[name] = postObj.name;
      this.$store.dispatch("GET_POSTS", {
        params,
        isNewPage: true
      });
    }
  },
  computed: {
    ...mapGetters(["getCategories", "getTags"])
  },
  created() {
    this.$store.dispatch("GET_CATEGORIES");
    this.$store.dispatch("GET_TAGS");
  }
};
