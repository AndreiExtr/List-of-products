<template>
  <div :class="['card', customClass]" :style="customStyle">
    <div :style="customImgStyle" class="card_foto">
      <img :src="require(`@/img/${imageSrc}`)">
    </div>
    <p :style="customTitleStyle" class="card_title">{{ title }}</p>
    <p v-if="isActiveSubtitle" v-bind:class="{ active: isActiveSubtitle }" class="card_subtitle">{{ subtitle }}</p>

    <div :style="customCountBtStyle" class="card_countBt">
      <p class="card_countBt_count">{{ price }} ₽</p>
      <AddIcon v-if="isActiveAdd" v-bind:class="{ active: isActiveAdd }" @click="addToBasket"/>
      <DeleteIcon v-if="isActiveDel" v-bind:class="{ active: isActiveDel }" @click="removeFromBasket"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AddIcon from '../icons/AddIcon.vue'
import DeleteIcon from '../icons/DeleteIcon.vue'

export default {
  name: 'CardProduct',
  components: {
    AddIcon,
    DeleteIcon
  },
  props: {
    id: Number,
    customClass: String,
    customStyle: Object,
    customImgStyle: Object,
    imageSrc: String,
    title: String,
    subtitle: String,
    isActiveSubtitle: Boolean,
    customTitleStyle: Object,
    customCountBtStyle: Object,
    price: Number,
    isActiveAdd: Boolean,
    isActiveDel: Boolean
  },
  methods: {
    ...mapActions(['addProductToBasket', 'removeProductFromBasket']),
    addToBasket () {
      const product = {
        id: this.id,
        img: this.imageSrc,
        title: this.title,
        price: this.price
      }
      this.addProductToBasket(product)
    },
    removeFromBasket () {
      this.removeProductFromBasket(this.id)
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &_title{
    font-weight: 500;
    font-size: 17px;
    text-align: left;
    color: #ffffff;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
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
