<template>
  <div class="card">
    <div class="card_foto">
      <img :src="require(`@/img/${imageSrc}`)">
    </div>
    <p class="card_title">{{ title }}</p>
    <p class="card_subtitle">{{ subtitle }}</p>

    <ButtonUI />
  </div>
</template>

<script>
import ButtonUI from '@/components/ui/ButtonUI'

export default {
  name: 'CardProduct',
  components: {
    ButtonUI
  },
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Заголовок по умолчанию'
    },
    subtitle: {
      type: String,
      default: 'Подзаголовок по умолчанию'
    }
  }
}
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 312px;
  height: 552px;
  border: 1px solid #D58C51;
  padding: 16px;
  gap: 16px;

  &_foto{
    width: 300px;
    height: 270px;
    text-align: center;
  }

  &_title{
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    color: #ffffff;
    margin: 0;
    overflow: hidden; /* скрываем текст, который не помещается в заданную высоту */
    text-overflow: ellipsis; /* добавляем многоточие для обрезанного текста */
    white-space: wrap;
    max-width: 100%;
    max-height: 64px;
  }

  &_subtitle{
    color: #ffffff;
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }

  // &_btn{
  //   width: 140px;
  //   background-color: #3278FF;
  //   color: #ffffff;
  //   padding: 8px 16px;
  //   border: 0;
  //   margin-top: 12px;
  //   border-radius: 6px;
  // }

  // &_btn:hover{
  //   background-color: #0f4fcf;
  // }
}
</style>
