<template>
  <header class="head">
    <a>НАША ПРОДУКЦИЯ</a>
  </header>
</template>

<script>

export default {
  name: 'HeadBlock',
  components: {
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
    font-weight: 700;
    font-size: 31px;
    margin: 0;
    color: #ffffff;
  }
}
</style>
