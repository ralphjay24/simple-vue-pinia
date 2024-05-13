<script>
import { mapState } from 'pinia'
import { useStore } from '../stores/store'
export default {
  name: "HeaderName",
  computed: {
    ...mapState(useStore, ['name']),
  },
}
</script>

<template>
  <div>
    Hello,
    <span class="font-weight-bold">{{ `${name}!` }}</span>
  </div>
</template>

<style scoped>

</style>