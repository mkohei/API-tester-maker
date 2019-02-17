<template>
    <div>
        <select v-model="selected">
            <option v-for="api in apis" v-bind:value="api.url">
                {{ api.name }}   |   {{ api.key }}
            </option>
        </select>

        <p>{{ this.arguments }}</p>

        <hr>

        <table>
            <!-- head -->
            <tr>
                <th> Argument </th>
                <th> </th>
                <th> Value </th>
            </tr>
            <!-- body -->
            <tbody v-for="(arg, index) in this.arguments">
                <argument-item v-bind:index="index"></argument-item>
            </tbody>
        </table>


    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import store from '@/store'
import axios from 'axios'

import ArgumentItem from '@/components/modules/ArgumentItem'


export default {
    name: 'SelectApi',
    props: {
        msg: String
    },
    data() {
        return {
            selected: store.state.selected,
            options: store.state.ptions,
            selected2: store.state.selected,
            apis: store.state.apis,
            response: '',
            arguments: store.state.arguments,
            arguments2: store.state.arguments,
        }
    },
    watch: {
        selected: function() {
            console.log("[wath] change selected")
            axios
                .get(this.selected)
                .then(res => res.data)
                .then(res => {
                    store.commit({
                        type: 'setArguments',
                        arguments: res.arguments,
                    })
                    this.arguments = res.arguments
                })
                //.then(res => (this.response = res))
        }
    },
    components: {
        ArgumentItem,
    }
}
</script>

