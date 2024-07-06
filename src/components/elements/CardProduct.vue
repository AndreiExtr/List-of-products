<template>
  <div class="card">
    <div class="card_foto">
      <img :src="require(`@/img/${imageSrc}`)">
    </div>
    <p class="card_title">{{ title }}</p>
    <p class="card_subtitle">{{ subtitle }}</p>

    <div class="card_countBt">
      <p class="card_countBt_count">{{ count }}</p>
      <ButtonUI />
    </div>
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
    },
    count: {
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
  align-items: flex-start;
  width: 312px;
  height: 552px;
  border: 1px solid #D58C51;
  padding: 32px 20px;
  gap: 16px;

  &_foto{
    width: 100%;
    height: 270px;
    text-align: center;
  }

  &_title{
    font-weight: 500;
    font-size: 17px;
    text-align: left;
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
    width: 100%;
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    text-align: left;
    margin-bottom: auto;
  }

  &_countBt{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &_count{
      font-weight: 500;
      font-size: 17px;
      color: #ffffff;
    }
  }

  &:hover &_countBt_count {
      color: #D58C51;
  }

  &:hover &_title {
    color: #D58C51;
  }

  &:hover &_subtitle {
    color: #D58C51;
  }
}

</style>
