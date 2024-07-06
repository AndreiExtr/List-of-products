<template>
  <div class="content_main">
    <div class="content_main_cards1">
        <CardProduct
        imageSrc="1.png"
        title="Устрицы по рокфеллеровски"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        count="2 700 ₽"
      />
      <CardProduct
        imageSrc="2.png"
        title="Свиные ребрышки на гриле с зеленью"
        subtitle="Не следует, однако забывать, что реализация намеченных плановых"
        count="1 600 ₽"
      />
      <CardProduct
        imageSrc="4.png"
        title="Креветки по-королевски в лимонном соке"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
        count="1 820 ₽"
      />
      <CardProduct
        imageSrc="5.png"
        title="Устрицы по рокфеллеровски"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        count="2 700 ₽"
      />
    </div>
    <div class="content_main_cards2">
        <CardProduct
        imageSrc="1.png"
        title="Устрицы по рокфеллеровски"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        count="2 700 ₽"
      />
      <CardProduct
        imageSrc="2.png"
        title="Свиные ребрышки на гриле с зеленью"
        subtitle="Не следует, однако забывать, что реализация намеченных плановых"
        count="1 600 ₽"
      />
      <CardProduct
        imageSrc="4.png"
        title="Креветки по-королевски в лимонном соке"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
        count="1 820 ₽"
      />
      <CardProduct
        imageSrc="5.png"
        title="Устрицы по рокфеллеровски"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        count="2 700 ₽"
      />
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/elements/CardProduct'

export default {
  name: 'MainBlock',
  components: {
    CardProduct
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
