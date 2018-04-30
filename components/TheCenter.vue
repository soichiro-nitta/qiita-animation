<template>
  <div class='TheCenter'>
    <div
      class='TheCenter_Background'
      ref='background'
    />
    <div
      class='TheCenter_Title'
      ref='title'
    >
      TheCenter Component
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {TweenMax, Expo} from 'gsap'

export default {
  computed: {
    ...mapGetters({
      entered: 'entered'
    })
  },
  watch: {
    async entered (val) {
      await this.$delay(500)
      this.flash()
      val ? this.enter() : this.leave()
    }
  },
  methods: {
    flash () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.title, 0.05, {
          color: 'blue',
          scale: 1.3,
          ease: Expo.easeIn,
          repeat: 19,
          yoyo: true
        })
      })
    },
    enter () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.background, 1, {
          scale: 1,
          rotation: 360,
          startAt: {
            rotation: 0,
          },
          ease: Expo.easeOut
        })
      })
    },
    leave () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.background, 1, {
          scale: 0,
          rotation: 0,
          startAt: {
            rotation: 360,
          },
          ease: Expo.easeOut
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.TheCenter {
  position: relative;
  width: 28%;
  height: 200px;

  &_Background {
    width: 100%;
    height: 100%;
    background: #0f0f0f;
    transform: scale(0);
  }

  &_Title {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 15px;
  }
}
</style>