<template>
  <div class="p-name"
       @sort-change="handleSortChange"
       sortable sort-type="custom"
       :row-key="ep_data.itemNo"
  ></div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    methods: {
      handleSortChange(cloumn, order) {
        this.getProScgsfx(cloumn.column, order)
      },
    }
  }
</script>
<style lang="scss" scoped>
  .p-name {
  }
</style>
