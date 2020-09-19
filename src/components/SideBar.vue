<template>
  <div class="sidenav">
    <div class="wrapper" v-if="getCategories.length">
      <p>CATEGORIES</p>
      <ul v-for="cat in getCategories" :key="cat.ID">
        <li @click="() => getPosts(cat, 'category')">{{ cat.name }}</li>
      </ul>
    </div>
    <div class="wrapper" v-if="getTags.length">
      <p>POPULAR TAGS</p>
      <ul v-for="tag in getTags" :key="tag.ID">
        <li @click="() => getPosts(tag, 'tag')">{{ tag.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidenav {
  height: 100%;
  padding-top: 20px;
}
.wrapper {
  border-top: 5px solid #000;
  color: #2b2b2b;
  font-size: 14px;
  font-weight: 900;
  padding-top: 7px;
  padding-bottom: 7px;
  text-align: left;
  cursor: pointer;
}
ul {
  padding: 0;
}
li {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  list-style-type: none;
  line-height: 1em;
}

li:hover {
  color: rgba(0, 0, 0, 0.4);
}
</style>
