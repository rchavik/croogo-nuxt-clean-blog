<template>
  <header class="masthead" v-bind:style="{ backgroundImage: `url(${masthead.backgroundImage})` }">
    <div class="overlay" />
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>{{ masthead.heading }} </h1>
            <span class="subheading">{{ masthead.subheading }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Masthead extends Vue {

  get masthead () {
    const current = this.$store.state.nodes.current;
    const imagePath = current.linked_assets && current.linked_assets.FeaturedImage && current.linked_assets.FeaturedImage.length > 0
      ? current.linked_assets.FeaturedImage[0].path
      : '//picsum.photos/800/450'
    return {
      heading: current.title ,
      subheading: current.excerpt,
      backgroundImage: imagePath,
    }
  }

}
</script>
