<template>
  <div class='TheBackground'>
    <div
      class='TheBackground_Wrap'
      ref='wrap'
      >
      <div
        class='TheBackground_WrapShadow'
        ref='shadow'
      >
        TheBackground
      </div>
      <div
        class='TheBackground_WrapFace'
        ref='face'
      >
        TheBackground
      </div>
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
      await this.$delay(1100)
      val ? this.enter() : this.leave()
    }
  },
  methods: {
    enter () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.wrap, 2, {
          scale: 1.2,
          rotation: 712,
          startAt: {
            rotation: 0,
          },
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.shadow, 2, {
          y: '3px',
          x: '3px',
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.face, 2, {
          y: '-3px',
          x: '-3px',
          ease: Expo.easeOut
        })
      })
    },
    leave () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.wrap, 2, {
          scale: 0,
          rotation: 0,
          startAt: {
            rotation: 712,
          },
          ease: Expo.easeInOut
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.TheBackground {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  font-size: 12vw;
  font-weight: bold;
  line-height: 1.5;
  &_Wrap {
    position: relative;
    transform: scale(0);
  }
  &_WrapShadow {
    color: #0f0f0f;
  }
  &_WrapFace {
    position: absolute;
    top: 0;
    left: 0;
    color: #2d2d2d;
  }
}
</style>
