<template>
  <header class="head">
    <a>НАША ПРОДУКЦИЯ</a>
    <div class="head_shopping">
      <div class="head_shopping_text">
        <p>3 товара</p>
        <p>на сумму 3 500 ₽</p>
      </div>
      <router-link to="/shopping">
        <div class="head_shopping_bt">
          <BasketIcon />
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
import BasketIcon from '../icons/BasketIcon.vue'

export default {
  name: 'HeadBlock',
  components: {
    BasketIcon
  },
  props: {
  }
}
</script>

<style lang="scss">
.head{
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 70px;
  z-index: 20;
  background-color: #161516;

  a{
    font-weight: 500;
    font-size: 31px;
    margin: 0;
    color: #ffffff;
  }

  &_shopping{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    &_text{
      font-weight: 500;
      font-size: 17px;
      text-align: left;
      color: #ffffff;
      text-align: right;
    }

    &_bt{
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #D58C51;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>
