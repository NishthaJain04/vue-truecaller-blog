<template>
  <div class="sidenav">
    <div class="wrapper" v-if="getCategories.length">
      <p>CATEGORIES</p>
      <ul v-for="cat in getCategories" :key="cat.ID" @click="() => getPosts(cat, 'category')">
        <li>{{ cat.name }}</li>
      </ul>
    </div>
    <div class="wrapper" v-if="getTags.length">
      <p>POPULAR TAGS</p>
      <ul v-for="tag in getTags" :key="tag.ID" @click="() => getPosts(tag, 'tag')">
        <li>{{ tag.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script src="./js/side-bar.js" />

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
  list-style-type: none;
  line-height: 1em;
}

li:hover {
  color: rgba(0, 0, 0, 0.4);
}
</style>
