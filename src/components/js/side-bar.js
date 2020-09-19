import { mapGetters } from "vuex";
export default {
  name: "SideBar",
  props: {
    msg: String
  },
  methods: {
    getPosts(obj, name) {
      let params = {
        number: 25,
        order_by: "date",
        order: "DESC",
        page: 0
      };
      params[name] = obj.slug;
      this.$store.dispatch("RESET_POSTS");
      this.$store.dispatch("GET_POSTS", {
        params
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
