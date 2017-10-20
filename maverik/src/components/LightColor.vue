<template>
  <div class="light-color">
    <b-card header="Light Color" class="text-center">
      <b-form-input v-model="color" size="lg" type="color" @input="onInputChanged"></b-form-input>
    </b-card>
  </div>
</template>

<script>
import { LightsService, HttpClient } from 'maverik-core'

const service = new LightsService(new HttpClient())

console.log(service)

export default {
  name: 'LightColor',
  data () {
    return {
      color: '#ffffff'
    }
  },
  methods: {
    onInputChanged () {
      service.color(this.color.replace('#', ''))
    }
  }
}
</script>

<style lang="scss">
.light-color {
  margin-top: 1rem;
}
</style>
