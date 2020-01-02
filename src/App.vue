<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Toolbar -->
    <section class="mb4">
      <div class="container bb pb3 b--light-gray">
        <div class="flex-ns justify-between items-center">
          <div class="tl-ns tc mb0-ns mb3">
            <span class="f7">*Click on color to copy hex code to clipboard</span>
          </div>
          <div class="flex items-center justify-end-ns justify-center">
            <span class="f7 gray mr2">View mode</span>
            <i
              v-html="$octicons['list-unordered'].toSVG()"
              class="mh2 pointer dib mt1"
              :class="{ 'o-10': mode !== 'list' }"
              @click="mode = 'list'"
            ></i>
            <i
              v-html="$octicons['project'].toSVG()"
              class="mh2 pointer dib mt1"
              @click="mode = 'grid'"
              :class="{ 'o-10': mode !== 'grid' } "
            ></i>
          </div>
        </div>
      </div>
    </section>

    <!-- TODO: Categorized -->
    <!-- <section>
      <div v-for="(cat, i) in categories" :key="`cat-${i}`">
        <h1 class="f4">{{ cat.name }}</h1>
        <ul>
          <li class="preview-palettes" :style="{ backgroundColor: val.hex }" v-for="(val, i) in colors.filter(val => val.group === cat.hex)" :key="`cl-${i}`"></li>
        </ul>
      </div>
    </section>-->

    <!-- Colors -->
    <section>
      <div class="container">
        <div class="row" v-if="mode === 'list'">
          <div
            class="col-md-4 col-sm-6 mb4 grow pointer flex justify-center"
            v-for="(val, i) in colors"
            :key="`c-${i}`"
            v-clipboard:copy="`#${val.hex}`"
            v-clipboard:success="onCopy"
          >
            <div
              class="palette mb3 mr3"
              :style="{ backgroundColor: `#${val.hex}`}"
            ></div>
            <div>
              <h1 class="f6 tl dark-gray mb1">{{ val.name }}</h1>
              <h2 class="f7 tl light-silver ttu tracked">{{ val.code }}</h2>
            </div>
          </div>
        </div>
        <div class="row" v-if="mode === 'grid'">
          <div
            class="col-md-2 col-sm-3 col-6 mb4 grow pointer"
            v-for="(val, i) in colors"
            :key="`c-${i}`"
            v-clipboard:copy="`#${val.hex}`"
          >
            <div class="palette mb3 center" :style="{ backgroundColor: `#${val.hex}` }"></div>
            <h1 class="f6 tc dark-gray mb1">{{ val.name }}</h1>
            <h2 class="f7 tc light-silver ttu tracked">{{ val.code }}</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
//Components
import Header from "./components/Header.vue";

// Colors
import colorsJSON from "./assets/colors.json";

// Vue
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {
  colors = colorsJSON.colors;
  mode = "grid";
  
  categories = [
    { hex: "#000000	", name: "Black" },
    { hex: "#808080", name: "Gray" },
    { hex: "#ffffff", name: "White" },
    { hex: "#ff0000	", name: "Red" },
    { hex: "#ffa500", name: "Orange" },
    { hex: "#ffff00", name: "Yellow" },
    { hex: "#008000", name: "Green" },
    { hex: "#00ffff", name: "Cyan" },
    { hex: "#0000ff", name: "Blue" },
    { hex: "#800080", name: "Purple" }
  ];

  // Methods
  onCopy() {
    let toast = this.$toasted.show("🎨 Color copied to clipboard", {
      position: "bottom-center",
      duration: 5000
    });
  }
}
</script>