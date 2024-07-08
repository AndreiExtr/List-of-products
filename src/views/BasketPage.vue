<template>
  <div class="basket_head">
    <router-link to="/">
      <BackIcon />
    </router-link>
    <a class="basket_head-title">КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</a>
  </div>
  <div class="backet_cards">
        <CardProduct
        v-bind:customClass="'custom-card'"
        v-bind:customStyle="{
          border: 'none',
          gap: '88px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 'auto',
          padding: '32px 0'}"
        v-bind:customTitleStyle="{
          width: '100%'}"
        v-bind:customImgStyle="{
          height: 'auto',
          width: 'auto'}"
        v-bind:customCountBtStyle="{
          gap: '16px',
          justifyContent: 'flex-end'}"
        imageSrc="1.png"
        title="Устрицы по рокфеллеровски"
        count="2 700 ₽"
      />
      <CardProduct
        v-bind:customClass="'custom-card'"
        v-bind:customStyle="{
          border: 'none',
          gap: '88px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 'auto',
          padding: '32px 0'}"
        v-bind:customTitleStyle="{
          width: '100%'}"
        v-bind:customImgStyle="{
          height: 'auto',
          width: 'auto'}"
        v-bind:customCountBtStyle="{
          gap: '16px',
          justifyContent: 'flex-end'}"
        imageSrc="2.png"
        title="Свиные ребрышки на гриле с зеленью"
        count="1 600 ₽"
      />
      <CardProduct
        v-bind:customClass="'custom-card'"
        v-bind:customStyle="{
          border: 'none',
          gap: '88px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 'auto',
          padding: '32px 0'}"
        v-bind:customTitleStyle="{
          width: '100%'}"
        v-bind:customImgStyle="{
          height: 'auto',
          width: 'auto'}"
        v-bind:customCountBtStyle="{
          gap: '16px',
          justifyContent: 'flex-end'}"
        imageSrc="4.png"
        title="Креветки по-королевски в лимонном соке"
        count="1 820 ₽"
      />
    </div>
</template>

<script>
import BackIcon from '@/components/icons/BackIcon.vue'
import CardProduct from '@/components/elements/CardProduct'

export default {
  name: 'BasketPage',
  components: {
    BackIcon,
    CardProduct
  },
  props: {}
}
</script>

<style lang="scss" scoped>
.basket_head{
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 64px;
  padding: 48px 200px;
  z-index: 20;
  background-color: #161516;

  &-title{
    font-weight: 500;
    font-size: 31px;
    margin: 0;
    color: #ffffff;
  }
}

.backet_cards{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 134px 200px;
}
</style>
