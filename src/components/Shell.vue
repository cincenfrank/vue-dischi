<template>
  <div class="shell">
    <MovieCard
      v-for="(album, i) in albumList"
      :key="i"
      :title="album.title"
      :artist="album.author"
      :imageDesc="album.title + ' cover'"
      :imagePath="album.poster"
      :year="album.year"
    ></MovieCard>
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "./MovieCard.vue";
export default {
  components: { MovieCard },
  name: "Shell",
  data() {
    return {
      apiEndpoint: "https://flynn.boolean.careers/exercises/api/array/music",
      albumList: [],
      loading: true,
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios.get(this.apiEndpoint).then((resp) => {
        debugger;
        this.albumList = resp.data.response;
        this.loading = false;
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
</style>