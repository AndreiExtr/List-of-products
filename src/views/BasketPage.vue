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
          gap: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 'auto',
          padding: '16px 0'}"
        v-bind:customTitleStyle="{
          width: '100%'}"
        v-bind:customImgStyle="{
          height: '132px',
          width: 'auto'}"
        v-bind:customCountBtStyle="{
          gap: '16px',
          justifyContent: 'flex-end'}"
        imageSrc="1.png"
        title="Устрицы по рокфеллеровски"
        count="2 700 ₽"
        :isActiveSubtitle="false"
        :isActiveAdd="false"
        :isActiveDel="true"
      />
      <CardProduct
        v-bind:customClass="'custom-card'"
        v-bind:customStyle="{
          border: 'none',
          gap: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 'auto',
          padding: '16px 0'}"
        v-bind:customTitleStyle="{
          width: '100%'}"
        v-bind:customImgStyle="{
          height: '132px',
          width: 'auto'}"
        v-bind:customCountBtStyle="{
          gap: '16px',
          justifyContent: 'flex-end'}"
        imageSrc="2.png"
        title="Свиные ребрышки на гриле с зеленью"
        count="1 600 ₽"
        :isActiveSubtitle="false"
        :isActiveAdd="false"
        :isActiveDel="true"
      />
      <CardProduct
        v-bind:customClass="'custom-card'"
        v-bind:customStyle="{
          border: 'none',
          gap: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 'auto',
          padding: '16px 0'}"
        v-bind:customTitleStyle="{
          width: '100%'}"
        v-bind:customImgStyle="{
          height: '132px',
          width: 'auto'}"
        v-bind:customCountBtStyle="{
          gap: '16px',
          justifyContent: 'flex-end'}"
        imageSrc="4.png"
        title="Креветки по-королевски в лимонном соке"
        count="1 820 ₽"
        :isActiveSubtitle="false"
        :isActiveAdd="false"
        :isActiveDel="true"
      />
  </div>
  <div class="backet_decoration">
    <div class="backet_decoration-text">
      <p class="title">ЗАКАЗ НА СУММУ:</p>
      <p class="count">6 220 ₽</p>
    </div>
    <ButtonUI />
  </div>
</template>

<script>
import BackIcon from '@/components/icons/BackIcon.vue'
import CardProduct from '@/components/elements/CardProduct'
import ButtonUI from '@/components/ui/ButtonUI'

export default {
  name: 'BasketPage',
  components: {
    BackIcon,
    CardProduct,
    ButtonUI
  },
  props: {}
}
</script>

<style lang="scss" scoped>
.basket_head {
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
  gap: 8px;
  padding: 134px 200px;
}

.backet_decoration {
  height: 90px;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  padding: 8px 200px;
  z-index: 20;
  background-color: #161516;
  bottom: 0;
  border-top: 1px solid #D58C51;

  &-text{
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 16px;

    .title{
      font-weight: 400;
      font-size: 21px;
      margin: 0;
      color: #ffffff;
    }

    .count{
      font-weight: 400;
      font-size: 21px;
      margin: 0;
      color: #D58C51;
    }
  }
}
</style>
