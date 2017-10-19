<template>
  <div id="app">
    <b-container>
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

body {
  background-color: $gray-100;
}
</style>
