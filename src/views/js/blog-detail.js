import { mapGetters } from "vuex";
export default {
  name: "BlogDetails",
  computed: {
    ...mapGetters(["getPostDetails"])
  },
  created() {
    this.$store.dispatch("RESET_DETAILS");
    this.$store.dispatch("GET_POST_DETAILS", {
      pathValue: this.$route.params.id
    });
  }
};
