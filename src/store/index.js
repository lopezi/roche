import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
    state: {
        covid: []
    },
    actions: {
        loadData({commit}) {
            axios
                .get('https://api.covid19api.com/summary')
                .then(data => {
                    let covid = data.data
                    commit('SET_DATA', covid)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mutations: {
        SET_DATA(state, covid) {
           state.covid = covid
        }
    },
    getters: {

    }
})
