import { createStore } from 'vuex'

// Функция для сохранения состояния в localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('vuex-state', serializedState)
  } catch (err) {}
}

export default createStore({
  state: {
    countProductsInBasket: 0,
    allPriceProductsInBasket: 0,
    products: [
      { id: 0, img: '1.png', title: 'Устрицы по рокфеллеровски', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры', price: 2700 },
      { id: 1, img: '2.png', title: 'Свиные ребрышки на гриле с зеленью', subtitle: 'Не следует, однако забывать, что реализация намеченных плановых', price: 1600 },
      { id: 2, img: '4.png', title: 'Креветки по-королевски в лимонном соке', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу', price: 1820 },
      { id: 3, img: '5.png', title: 'Устрицы по рокфеллеровски', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры', price: 2700 }
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
      saveState(state)
    },
    addProductToBasket (state, product) {
      state.basketProducts.push(product)
      state.countProductsInBasket++
      state.allPriceProductsInBasket += product.price
      saveState(state)
    },
    removeProductFromBasket (state, productId) {
      const productIndex = state.basketProducts.findIndex(product => product.id === productId)
      if (productIndex !== -1) {
        const product = state.basketProducts[productIndex]
        state.basketProducts.splice(productIndex, 1)
        state.countProductsInBasket--
        state.allPriceProductsInBasket -= product.price
        saveState(state)
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
