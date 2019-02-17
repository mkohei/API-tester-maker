import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        namespace: true,
        /*
        modules: {
            select_api
        },
        */
        selected: 'xxxxxxxxxxx',
        options: [
            { text: 'item1', value: 'item1' },
            { text: 'item2', value: 'item2' },
            { text: 'item3', value: 'item3' },
        ],
        apis: [{
            "key": "billing/bulk_upsert",
            "name": "請求先登録更新",
            "url": "http://localhost:3000/a"
        }, {
            "key": "demand/bulk_upsert",
            "name": "請求情報登録更新",
            "url": "http://localhost:3000/b"
        }, {
            "key": "goods/bulk_upsert",
            "name": "商品登録更新",
            "url": "http://localhost:3000/c"
        }],
        arguments: [],
    },
    getters: {
        getOptions(state, getters, rootState) {
            return state.options;
        }
    },
    mutations: {
        setArguments(state, payload) {
            state.arguments = payload.arguments;
        }
    }
})