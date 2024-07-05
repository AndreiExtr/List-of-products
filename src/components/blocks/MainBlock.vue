<template>
  <div class="content_main">
    <CardProduct
      imageSrc="1.png"
      title="Заголовок"
      subtitle="Подзаголовок"
    />
  </div>
</template>

<script>
import CardProduct from '@/components/elements/CardProduct'

export default {
  name: 'MainBlock',
  components: {
    CardProduct
  },
  props: {
  }
}
</script>

<style lang="scss" scoped>
.content_main{
  margin-top: 134px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px
}
</style>
