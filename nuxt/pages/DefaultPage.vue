<template>
  <Promoted />
</template>

<script>
import Promoted from '~/components/Promoted.vue'

export default {

  components: {
    Promoted
  },

  async fetch({store, params}) {
    await store.dispatch('nodes/GET_PROMOTED')
  },

}
</script>
