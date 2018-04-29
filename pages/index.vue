<template>
  <div class='index'>
    <TheBackground />
    <div class='boxes'>
      <TheLeft />
      <TheCenter />
      <TheRight />
    </div>
    <TheButton />
  </div>
</template>

<script>
import TheBackground from '~/components/TheBackground.vue'
import TheLeft from '~/components/TheLeft.vue'
import TheCenter from '~/components/TheCenter.vue'
import TheRight from '~/components/TheRight.vue'
import TheButton from '~/components/TheButton.vue'

export default {
  components: {
    TheBackground,
    TheLeft,
    TheCenter,
    TheRight,
    TheButton
  }
}
</script>

<style lang='scss' scoped>
.index {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  .boxes {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 60%;
    height: 200px;
  }
}
</style>
