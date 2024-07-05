<template>
  <button class="card_btn"></button>
</template>

<script>
export default {
  name: 'ButtonUI',
  components: {
  },
  props: {
  }
}
</script>

<style lang="scss" scoped>
.card_btn{
  height: 32px;
  width: 32px;
  background-image: url('@/img/button_add.svg');
  background-repeat: no-repeat; /* Запрещаем повторение фонового изображения */
}

.card_btn:hover .icon circle,
.card_btn:hover .icon path {
  fill: #D58C51; /* Цвет иконки при наведении */
}
</style>
