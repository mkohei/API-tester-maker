import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const select_api = {
    state: {
        selected: 'xxxxxxxxxxx',
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

/*
fetch('http://localhost:3000/apis')
    .then(res => res.json())
    .then(res => {select_api.state.apis = res})
*/


/** 
 * new Vuexの後にresponseが来ると、
 * componentからは変更後のstateを後から取りに行かなければならない？
 * ここは非同期じゃなくて、全部読み込んでから処理を開始したい
 */
fetch('http://localhost:3000/apis')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        select_api.state.apis = res
    })

console.log(select_api.state)

export default new Vuex.Store({
    namespace: true,
    modules: {
        select_api
    },
})