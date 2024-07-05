<template>
  <div class="home">
    <HeadBlock />
    <MainBlock />
  </div>
</template>

<script>
import HeadBlock from '@/components/blocks/HeadBlock'
import MainBlock from '@/components/blocks/MainBlock'

export default {
  name: 'MainPage',
  components: {
    HeadBlock,
    MainBlock
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column; /* Измените на column для вертикального расположения */
  height: 100%; /* Занимает всю высоту родительского элемента */
  width: 100%;
}
</style>
