<template>
  <div class="about">
    <div v-if="getPostDetails">
      <div class="post-container">
            <div class="img-container">
              <img :src="getPostDetails.featured_image"/>
            </div>
            <div class="post-body" v-html="getPostDetails.content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
name: "BlogDetails",
  computed: {
    ...mapGetters(['getPostDetails']),
  },
  created() {
    this.$store.dispatch('RESET_DETAILS');
    this.$store.dispatch('GET_POST_DETAILS', {
      pathValue: this.$route.params.id
    });
    // console.log()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post-container {
  border-radius: 16px;
  margin: 12px;
  text-align: left;
  line-height: 1em;
  width: 100%;
}
.card-title {
  font-size: 16px;
  text-align: left;
  padding-left: 16px;
}
.post-body {
  padding: 16px 0 0 16px;
}
.post-continue {
  padding: 0 0 16px 16px;
}
.img-container {
    width: 100%;
    padding: 16px;
    img {
      height: 100%;
      width: 100%;
    }
}
</style>