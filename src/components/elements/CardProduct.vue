<template>
  <div :class="['card', customClass]" :style="customStyle">
    <div :style="customImgStyle" class="card_foto">
      <img :src="require(`@/img/${imageSrc}`)">
    </div>
    <p :style="customTitleStyle" class="card_title">{{ title }}</p>
    <p v-if="isActiveSubtitle" v-bind:class="{ active: isActiveSubtitle }" class="card_subtitle">{{ subtitle }}</p>

    <div :style="customCountBtStyle" class="card_countBt">
      <p class="card_countBt_count">{{ count }}</p>
      <AddIcon v-if="isActiveAdd" v-bind:class="{ active: isActiveAdd }"/>
      <DeleteIcon v-if="isActiveDel" v-bind:class="{ active: isActiveDel }"/>
    </div>
  </div>
</template>

<script>
import AddIcon from '../icons/AddIcon.vue'
import DeleteIcon from '../icons/DeleteIcon.vue'

export default {
  name: 'CardProduct',
  components: {
    AddIcon,
    DeleteIcon
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
      default: ''
    },
    count: {
      type: String,
      default: 'Подзаголовок по умолчанию'
    },
    customClass: {
      type: [String, Object, Array],
      default: ''
    },
    customStyle: {
      type: Object,
      default: () => ({})
    },
    customTitleStyle: {
      type: Object,
      default: () => ({})
    },
    customImgStyle: {
      type: Object,
      default: () => ({})
    },
    customCountBtStyle: {
      type: Object,
      default: () => ({})
    },
    isActiveSubtitle: {
      type: Boolean,
      default: true
    },
    isActiveAdd: {
      type: Boolean,
      default: true
    },
    isActiveDel: {
      type: Boolean,
      default: false
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
    width: auto;
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
