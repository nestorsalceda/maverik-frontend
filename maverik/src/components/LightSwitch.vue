<template>
  <div class="light-switch">
    <b-card header="Light State" class="text-center">
      <b-button :pressed.sync="turnedOn" size="lg" variant="outline-primary" @click="onClick">
        {{ message }}
      </b-button>
    </b-card>
  </div>
</template>

<script>
import { LightsService, HttpClient } from 'maverik-core'

const service = new LightsService(new HttpClient())

console.log(service)

const TURN_ON_MESSAGE = 'Turn On'
const TURN_OFF_MESSAGE = 'Turn Off'

export default {
  name: 'LightSwitch',
  data () {
    return {
      turnedOn: false,
      message: 'Turn On'
    }
  },
  methods: {
    onClick () {
      if (this.turnedOn) {
        service.turnOn()
        this.message = TURN_OFF_MESSAGE
      } else {
        service.turnOff()
        this.message = TURN_ON_MESSAGE
      }
    }
  }
}
</script>

<style lang="scss">
.light-switch {
  margin-top: 1rem;
}
</style>
