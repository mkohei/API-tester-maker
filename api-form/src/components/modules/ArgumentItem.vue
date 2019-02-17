<template>
    <tr>
        <td>{{ arg.argument }}</td>
        <td>{{ index }}</td>
        <td>
            <!-- text -->
            <input type="text" v-if="arg.type === 'text'"/>
            <!-- select -->
            <select v-if="arg.type === 'select'">
                <option v-for="row in arg.values">
                    {{ row.content }}
                </option>
            </select>
            <!-- radio -->
        </td>
    </tr>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import store from '@/store'
import axios from 'axios'

export default {
    name: 'ArgumentItem',
    props: ['index'],
    data() {
        return {
            arg: store.state.arguments[this.index],
        }
    },
    methods: {
        logArguments: function() {
            console.log(store.state.arguments)
            this.arguments = store.state.arguments
        }
    }
}
</script>

