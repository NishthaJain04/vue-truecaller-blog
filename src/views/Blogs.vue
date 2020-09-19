<template>
  <div class="home">
    <div class="container">
      <div class="row" v-if="getPosts && getPosts.length">
        <div class="col-9">
          <div v-for="(post,i) in getPosts" :key="i">
            <BlogCard class="blog" :post="post"/>
          </div>
          <infinite-loading force-use-infinite-wrapper @infinite="getNextPage">
            <div slot="no-more" class="font-grey" style="margin-top: 20%;"></div>
          </infinite-loading>
        </div>
        <div class="col-3">
          <SideBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogCard from "@/components/BlogCard.vue";
import SideBar from "@/components/SideBar.vue";
import { mapGetters } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading';

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
    }
  },
  computed: {
    ...mapGetters(['getPosts', 'getCategories', 'getTags', 'found']),
  },
  methods: {
    getPostsList(success) {
      this.$store.dispatch('GET_POSTS', {
        params: {
          number: 25,
          order_by: 'date',
          order: 'DESC',
          page: this.page
        },
        success,
        isNewPage: this.page === 0
      });
    },
    getNextPage($state) {
      this.page = this.page + 1;
      if (this.page < this.found/25) {
        this.getPostsList(
          () => $state.loaded()
        )
      } else {
        $state.loaded()
        $state.complete()
      }
    }
  },
  created() {
      this.$store.dispatch('RESET_POSTS')
      this.getPostsList()
      this.$store.dispatch('GET_CATEGORIES');
      this.$store.dispatch('GET_TAGS');
  }
};
</script>
