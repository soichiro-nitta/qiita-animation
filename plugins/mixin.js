import Vue from 'vue'

Vue.mixin({
  methods: {
    $delay (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
})

