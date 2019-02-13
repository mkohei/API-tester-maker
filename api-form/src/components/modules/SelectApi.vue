<template>
    <div>
        <select v-model="selected">
            <!-- eslint-disable-next-line -->        
            <option v-for='option in options' v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
        <p>{{ selected }} = {{ selected2 }}</p>

        <hr>

        <select v-model="selected">
            <option v-for="api in apis" v-bind:value="api.url">
                {{ api.name }}   |   {{ api.key }}
            </option>
        </select>

        <hr>

        <p>{{ getApiConfigs }}</p>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import store from '@/store'

export default {
    name: 'SelectApi',
    props: {
        msg: String
    },
    data() {
        return {
            selected: store.state.select_api.selected,
            // storeにあるstateから持ってきたい
            // 最終はfetchとかでjsonから
            options: store.state.select_api.options,
            selected2: store.state.select_api.selected,
            apis: store.state.select_api.apis,

            /**
             * formm全体を1componentとするのであれば
             * とりあえずlocalでそれぞれの情報を持っていて...
             * そもそもそれなら、全体で共有するタイミングがないな...
             * あー,結果とか？
             */
        }
    },
    computed: {
        getApiConfigs: function() {
            fetch(this.selected)
                .then(res => res.json)
                .then(res => {
                    console.log(res)
                })
            return this.selected + " | aiueo"
        }
    }
}
</script>

