<template>
  <tr>
    <RCell v-for="idx in 3" :key="idx">
      <template #cell="{ item }">
        <slot name="cell" :item="item" :idxCol="idx"></slot>
      </template>
    </RCell>
  </tr>
</template>

<script>
  import RCell from './RCell.vue';

  export default {
    components: { RCell },
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>