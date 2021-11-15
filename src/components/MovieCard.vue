<template>
  <a href="#" class="movie-card">
    <img :src="imagePath" :alt="imageDesc" />
    <h3 class="title">{{ title }}</h3>
    <ul>
      <li>{{ artist }}</li>
      <li>{{ year }}</li>
    </ul>
  </a>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    artist: String,
    year: String,
    title: String,
    imagePath: String,
    imageDesc: String,
  },
};
</script>

<style>
</style>