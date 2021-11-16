<template>
  <select v-model="filterValue" :id="selectName" @change="emitValue">
    <option v-for="(value, i) in valueList" :key="i + '-option'" :value="value">
      {{ value }}
    </option>
  </select>
</template>

<script>
export default {
  name: "FilterSelect",
  props: {
    valueList: Array,
    selectName: String,
  },
  data() {
    return {
      filterValue: "",
    };
  },
  methods: {
    emitValue() {
      //   debugger;
      this.$emit("onChange", this.selectName, this.filterValue);
    },
    resetFilter() {
      this.filterValue = "";
    },
  },
};
</script>

<style>
</style>