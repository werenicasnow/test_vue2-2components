<template>
  <td>
    <slot name="cell" :item=" {text: 'ячейка'}"></slot>
  </td>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>