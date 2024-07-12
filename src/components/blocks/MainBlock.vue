<template>
  <div class="content_main">
    <div class="content_main_cards1">
      <CardProduct
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :imageSrc="product.img"
        :title="product.title"
        :subtitle="product.subtitle"
        :count="product.count"
        :isActiveSubtitle="true"
        :isActiveAdd="true"
        :isActiveDel="false"
      />
    </div>
    <div class="content_main_cards2">
      <CardProduct
        v-for="product in products"
        :key="product.id + '2'"
        :id="product.id"
        :imageSrc="product.img"
        :title="product.title"
        :subtitle="product.subtitle"
        :count="product.count"
        :isActiveSubtitle="true"
        :isActiveAdd="true"
        :isActiveDel="false"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardProduct from '@/components/elements/CardProduct'

export default {
  name: 'MainBlock',
  components: {
    CardProduct
  },
  computed: {
    ...mapGetters(['getProducts']),
    products () {
      return this.getProducts
    }
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
  padding: 40px 0;

  &_cards1{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px
  }

  &_cards2{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px
  }
}
</style>
