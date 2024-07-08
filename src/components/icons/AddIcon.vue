<template>
  <button class="card_btn">
    <svg class="card_btn-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="14.5" stroke="white"/>
      <path d="M14.9999 9.28564V20.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M20.3571 14.8214L9.28564 14.8214" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>
  </button>
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
    display: flex;
    justify-content: center;
    align-items: center;

    &-icon circle,
    &-icon path {
    transition: stroke 0.2s ease;
  }

    &-icon:hover path {
    stroke: #ffffff; /* Цвет иконки при наведении */
  }

  &-icon:hover circle{
    fill: #D58C51; /* Цвет иконки при наведении */
    stroke: none;
  }
}
</style>
