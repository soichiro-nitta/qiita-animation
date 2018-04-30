<template>
  <div class='TheLeft'>
    <div
      class='TheLeft_Background'
      ref='background'
    />
    <div
      class='TheLeft_Title'
      ref='title'
    >
      TheLeft Component
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {TweenMax, Expo, Elastic} from 'gsap'

export default {
  computed: {
    ...mapGetters({
      entered: 'entered'
    })
  },
  watch: {
    entered (val) {
      this.flash()
      val ? this.enter() : this.leave()
    }
  },
  methods: {
    flash () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.title, 0.05, {
          color: 'red',
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
          scaleX: 1,
          ease: Expo.easeOut
        })
      })
    },
    leave () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.background, 1, {
          scaleX: 0,
          ease: Expo.easeOut
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.TheLeft {
  position: relative;
  width: 28%;
  height: 200px;

  &_Background {
    width: 100%;
    height: 100%;
    background: #0f0f0f;
    transform: scaleX(0);
    transform-origin: left center;
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