<template>

  <div class="card border-light">
    <h5 class="card-header">
      {{block.title}}
    </h5>
    <div class="card-body">
      {{block.body}}
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Block from '~/models/Block'

@Component
export default class DefaultBlock extends Vue {

  @Prop(Block) readonly block: Block | undefined

}
</script>
