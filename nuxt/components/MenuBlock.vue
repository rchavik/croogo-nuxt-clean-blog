<template>

  <div class="card border-light">
    <h5 class="card-header">
      {{block.title}}
    </h5>
    <div class="card-body">

      <ul>
        <li v-for="link in links[menuAlias]" :key="link.id" class="nav-item">
          <nuxt-link v-if="link.path[0] == '/'" :to="link.path">{{link.title}}</nuxt-link>
          <a :href="link.path" target="_blank" v-else>{{link.title}}</a>
        </li>
      </ul>

    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

const getMenuAlias = function(shortcode: string) {
  let re = /\[(menu|m):([A-Za-z0-9_\-]*)(.*?)\]/i
  let result = re.exec(shortcode)
  return result ? result[2] : null
}

export default Vue.extend({

  props: {
    block: {}
  },

  data() {
    return {
      links: this.$store.state.links,
      menuAlias: getMenuAlias(this.$props.block.body),
    }
  },

  async mounted () {
    let menuAlias = getMenuAlias(this.$props.block.body)
    if (menuAlias) {
      await this.$store.dispatch('links/GET_LINKS', menuAlias)
    }
  },

})
</script>
