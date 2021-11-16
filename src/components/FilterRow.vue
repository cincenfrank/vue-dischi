<template>
  <div class="filter-row">
    <div class="filter-column" v-for="(filter, i) in filterList" :key="i">
      <label :for="i">{{ i }}</label>
      <FilterSelect
        :value="filterObject[i]"
        :selectName="i"
        :valueList="filter"
        @onChange="filterChanged"
      ></FilterSelect>
    </div>
    <!-- <FilterSelect :valueList="artistsList"></FilterSelect> -->
    <button @click="applyFilter">Filter</button>
    <button @click="resetFilter">Remove Filter</button>
  </div>
</template>

<script>
import FilterSelect from "./FilterSelect.vue";
export default {
  components: { FilterSelect },
  name: "FilterRow",
  props: {
    filterList: Object,
  },
  data() {
    return {
      filterObject: {},
    };
  },
  methods: {
    filterChanged(key, value) {
      this.filterObject[key] = value;
    },
    applyFilter() {
      this.$emit("onFilterChanged", this.filterObject);
    },
    resetFilter() {
      this.filterObject = {};
      //   this.$refs.FilterSelect.resetFilter();
      this.$emit("onFilterChanged", this.filterObject);
    },
  },
};
</script>

<style>
</style>