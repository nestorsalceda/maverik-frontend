<template>
  <div class="light-switch">
    <b-card header="Light State" class="text-center">
      <b-button :pressed.sync="turnedOn" size="lg" variant="outline-primary">
        Turn On
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'LightSwitch',
  data () {
    return {
      turnedOn: false
    }
  }
}
</script>

<style lang="scss">
.light-switch {
  margin-top: 1rem;
}
</style>
