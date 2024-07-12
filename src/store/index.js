import { createStore } from 'vuex'

export default createStore({
  state: {
    countProductsInBasket: 0,
    allPriceProductsInBasket: 0,
    products: [
      { id: 0, img: '1.png', title: 'Устрицы по рокфеллеровски', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры', count: 2700 },
      { id: 1, img: '2.png', title: 'Свиные ребрышки на гриле с зеленью', subtitle: 'Не следует, однако забывать, что реализация намеченных плановых', count: 1600 },
      { id: 2, img: '4.png', title: 'Креветки по-королевски в лимонном соке', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу', count: 1820 },
      { id: 3, img: '5.png', title: 'Устрицы по рокфеллеровски', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры', count: 2700 }
    ],
    basketProducts: []
  },
  getters: {
    getCountProductsInBasket: state => state.countProductsInBasket,
    getAllPriceProductsInBasket: state => state.allPriceProductsInBasket,
    getProducts: state => state.products,
    getBasketProducts: state => state.basketProducts
  },
  mutations: {
    incrementProductCount (state) {
      state.countProductsInBasket++
    },
    addProductToBasket (state, product) {
      state.basketProducts.push(product)
      state.countProductsInBasket++
      state.allPriceProductsInBasket += product.count
    },
    removeProductFromBasket (state, productId) {
      const index = state.basketProducts.findIndex(product => product.id === productId)
      if (index !== -1) {
        state.countProductsInBasket--
        state.allPriceProductsInBasket -= state.basketProducts[index].count
        state.basketProducts.splice(index, 1)
      }
    }
  },
  actions: {
    addProductToBasket ({ commit }, product) {
      commit('addProductToBasket', product)
    },
    removeProductFromBasket ({ commit }, productId) {
      commit('removeProductFromBasket', productId)
    }
  },
  modules: {}
})
