import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SelectApi = {
    state: {
        selected: '',
        options: [
            { text: 'item1', value: 'item1' },
            { text: 'item2', value: 'item2' },
            { text: 'item3', value: 'item3' },
        ]
    },
    getters: {
        getOptions(state, getters, rootState) {
            return state.options;
        }
    }
}

export default new Vuex.Store({
    modules: {
        SelectApi
    }
})