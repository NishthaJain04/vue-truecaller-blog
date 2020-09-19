<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-9" v-if="getPosts && getPosts.length">
          <div v-for="(post, i) in getPosts" :key="i">
            <BlogCard class="blog" :post="post" />
          </div>
          <infinite-loading force-use-infinite-wrapper @infinite="getNextPage">
            <div
              slot="no-more"
              class="font-grey"
              style="margin-top: 20%;"
            ></div>
          </infinite-loading>
        </div>
        <div class="col-3">
          <SideBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/blogs.js" />
