<template>
  <div>
      <div class="post-container" @click="getPostDetails">
        <div class="img-container">
          <img :src="post.featured_image"/>
        </div>
        <div class="post-date">{{ getDate }}</div>
        <div class="post-body" v-html="post.excerpt"></div>
        <div class="post-continue">Continue reading..</div>
      </div>
  </div>
</template>

<script>
import { formatDistance } from "date-fns";
export default {
  name: "BlogsCard",
  props: {
    post: Object
  },
  computed: {
    getDate() {
        return `${formatDistance(new Date(this.post.date), new Date())} ago`
    }
  },
  methods: {
    getPostDetails() {
      this.$router.push(`/post/detail/${this.post.ID}`)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post-container {
  border-radius: 16px;
  box-shadow: 0 2px 16px -4px rgba(0, 0, 0, 0.12);
  margin-bottom: 16px;
  text-align: left;
  line-height: 1em;
  max-width: 700px;
  cursor: pointer;
}
.card-title {
  font-size: 16px;
  text-align: left;
  padding-left: 16px;
}
.post-date {
  font-size: 12px;
  padding-left: 16px;
}
.post-body {
  padding: 16px 0 0 16px;
}
.post-continue {
  padding: 0 0 16px 16px;
  color: #007dcc;
}
.img-container {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    padding: 16px;
    img {
      height: 100%;
      width: 100%;
    }
}
</style>
