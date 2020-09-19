import { formatDistance } from "date-fns";
export default {
  name: "BlogsCard",
  props: {
    post: Object
  },
  computed: {
    getDate() {
      return `${formatDistance(new Date(this.post.date), new Date())} ago`;
    }
  },
  methods: {
    getPostDetails() {
      this.$router.push(`/post/detail/${this.post.ID}`);
    }
  }
};
