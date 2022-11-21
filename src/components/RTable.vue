<template>
  <table class="my-table">
    <RRow v-for="idxRow in 10" :key="idxRow">
      <template #cell="{ item, idxCol }">
        {{ item.text + idxRow + idxCol }}
      </template>
    </RRow>
  </table>
</template>

<script>
  import RRow from './RRow.vue';

  export default {
    components: { RRow },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .my-table {
    border-collapse: collapse;
    width: 100%;
  }

  .my-table tr td {
    border: 1px solid black
  }
</style>