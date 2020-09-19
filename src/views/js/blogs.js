import BlogCard from "@/components/BlogCard.vue";
import SideBar from "@/components/SideBar.vue";
import { mapGetters } from "vuex";
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "Blogs",
  components: {
    BlogCard,
    SideBar,
    InfiniteLoading
  },
  data() {
    return {
      page: 0
    };
  },
  computed: {
    ...mapGetters(["getPosts", "found"])
  },
  methods: {
    getPostsList(success) {
      this.$store.dispatch("GET_POSTS", {
        params: {
          number: 25,
          order_by: "date",
          order: "DESC",
          page: this.page
        },
        success,
        isNewPage: this.page === 0
      });
    },
    getNextPage($state) {
      this.page = this.page + 1;
      if (this.page < this.found / 25) {
        this.getPostsList(() => $state.loaded());
      } else {
        $state.loaded();
        $state.complete();
      }
    }
  },
  created() {
    this.$store.dispatch("RESET_POSTS");
    this.getPostsList();
  }
};
