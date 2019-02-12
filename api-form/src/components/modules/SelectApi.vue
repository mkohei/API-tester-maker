<template>
    <select v-model="selected">
        <option v-for='option in options' v-bind:value="option.value">
            {{ option.text }}
        </option>
    </select>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SelectApi',
    props: {
        msg: String
    },
    data() {
        return {
            // storeにあるstateから持ってきたい
            // 最終はfetchとかでjsonから
            selected: '',
            options: [
                { text: 'item1', value: 'item1' },
                { text: 'item2', value: 'item2' },
                { text: 'item3', value: 'item3' },
            ]
        }
    },
    comptued: mapGetters({
        'options': 'getOptions'
    })
}
</script>

