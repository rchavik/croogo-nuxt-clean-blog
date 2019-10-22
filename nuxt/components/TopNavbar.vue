<template>
  <nav id="mainNav" class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand">{{ siteTitle }}</nuxt-link>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars" />
      </button>
      <div id="navbarResponse" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li v-for="link in links" :key="link.id" class="nav-item">
            <nuxt-link :to="link.path">{{link.title}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import croogoConfig from '~/croogo.config'

@Component
export default class TopNavbar extends Vue {

  @Prop(String) readonly menu: String | undefined

  get siteTitle () {
    return croogoConfig.title
  }

  get links () {
    return this.$store.state.links[this.$props.menu]
  }

  async mounted () {
    await this.$store.dispatch('links/GET_LINKS', this.$props.menu);
  }

}
</script>
