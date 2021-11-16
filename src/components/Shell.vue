<template>
  <div class="shell">
    <FilterRow
      :filterList="{ genre: genresList, author: artistsList, year: yearsList }"
      @onFilterChanged="onFilterChange"
    ></FilterRow>
    <MovieCard
      v-for="(album, i) in displayList"
      :key="i"
      :title="album.title"
      :artist="album.author"
      :imageDesc="album.title + ' cover'"
      :imagePath="album.poster"
      :year="album.year"
    ></MovieCard>
    <Loader v-if="loading"></Loader>
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "./MovieCard.vue";
import Loader from "./Loader.vue";
import FilterRow from "./FilterRow.vue";
export default {
  components: { MovieCard, Loader, FilterRow },
  name: "Shell",
  data() {
    return {
      apiEndpoint: "https://flynn.boolean.careers/exercises/api/array/music",
      albumList: [],
      displayList: [],
      loading: true,
      filterObject: {},
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios.get(this.apiEndpoint).then((resp) => {
        // debugger;
        this.albumList = resp.data.response;
        this.populateDisplayList();
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      });
    },
    onFilterChange(newFilterObject) {
      this.filterObject = newFilterObject;
      this.populateDisplayList();
    },
    populateDisplayList() {
      if (Object.keys(this.filterObject).length === 0) {
        this.displayList = this.albumList;
      } else {
        this.displayList = this.albumList.reduce((acc, el) => {
          let toAdd = true;
          for (const [key, value] of Object.entries(this.filterObject)) {
            // console.log(`${key}: ${value}`);
            if (el[key] !== value) {
              toAdd = false;
              break;
            }
          }
          if (toAdd) {
            acc.push(el);
          }
          return acc;
        }, []);
      }
    },
  },
  computed: {
    genresList() {
      return this.albumList.reduce((acc, value) => {
        if (!acc.includes(value.genre)) {
          //   debugger;
          acc.push(value.genre);
        }
        return acc;
      }, []);
    },
    artistsList() {
      return this.albumList.reduce((acc, value) => {
        if (!acc.includes(value.author)) {
          //   debugger;
          acc.push(value.author);
        }
        return acc;
      }, []);
    },
    yearsList() {
      return this.albumList.reduce((acc, value) => {
        if (!acc.includes(value.year)) {
          //   debugger;
          acc.push(value.year);
        }
        return acc;
      }, []);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
</style>