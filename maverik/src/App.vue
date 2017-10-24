<template>
  <div id="app">
    <b-container class="main">
      <LightSwitch/>
      <LightColor/>
    </b-container>
  </div>
</template>

<script>
import LightSwitch from './components/LightSwitch'
import LightColor from './components/LightColor'

export default {
  name: 'app',
  components: {
    LightSwitch,
    LightColor
  }
}
</script>


<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/dist/bootstrap-vue.css';

html, body {
  height: 100%;
}

body {
  background-color: $gray-100;
}

#app {
  height: 100%;
  display: grid;

  @include media-breakpoint-up(xs) {
    grid-template-columns: 1% 95% 1%;
  }

  @include media-breakpoint-up(md) {
    grid-template-columns: repeat(3, 1fr);
  }

  grid-template-areas: ". a .";
  grid-gap: 10px;
}

.main {
  grid-area: a;
  align-self: center;
  justify-self: center;
}

</style>
