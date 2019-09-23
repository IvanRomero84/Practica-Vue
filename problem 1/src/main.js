import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    numero: 0,
    rice: [
      {
        id: 1,
        title: `Nigiri mix`,
        image: `apeteat_2018_nigirimix.jpg`,
        price: `0.50`,
      },
    ],
    chicken: [
      {
        id: 2,
        title: `Wrap cesar`,
        image: `apeteat_2019_wrapcesar.jpg`,
        price: `0.50`,
      },
    ],
    salad:
      [
        {
          id: 3,
          title: `Ensaladilla rusa`,
          image: `apeteat_2017__ensaladilla_rusa.jpg`,
          price: `0.50`,
        },
        {
          id: 4,
          title: `Ensalada quinoa y pollo`,
          image: `apeteat_2019_ensaladaquinoachicken.jpg`,
          price: `0.50`,
        },
      ]
  },
  mutations: {
    count(state) {
      state.numero++;
    },
    showRice() {
      document.getElementById('rice').setAttribute('class', '')
      document.getElementById('chicken').setAttribute('class', 'hide')
      document.getElementById('salad').setAttribute('class', 'hide')
    },
    showSalad() {
      document.getElementById('salad').setAttribute('class', '')
      document.getElementById('rice').setAttribute('class', 'hide')
      document.getElementById('chicken').setAttribute('class', 'hide')
    },
    showChicken() {
      document.getElementById('chicken').setAttribute('class', '')
      document.getElementById('salad').setAttribute('class', 'hide')
      document.getElementById('rice').setAttribute('class', 'hide')
    },
    showAll() {
      document.getElementById('rice').setAttribute('class', '')
      document.getElementById('salad').setAttribute('class', '')
      document.getElementById('chicken').setAttribute('class', '')
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,

  render: h => h(App)
}).$mount('#app')


