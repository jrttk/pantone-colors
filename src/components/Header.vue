<template>
  <section class="pv4 bg-white mb4" id="header">
    <h1 class="tc mb3 mt0">Pantone Colors</h1>
    <p class="tc gray">A collections of Pantone Colors with names & hex codes ✨🎨</p>
  </section>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
#header {
  box-shadow: 0 10px 20px rgba(0,0,0,.05);
}
</style>