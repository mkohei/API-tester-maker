<template>
  <div>{{ msg }}
    <HeaderComponent></HeaderComponent>
    <text-area-component></text-area-component>
    <string-component></string-component>
    <button v-on:click="buttonAction">{{ button }}</button>
  </div>
</template>

<script>
import HeaderComponent from '@/components/modules/HeaderComponent'
import TextAreaComponent from '@/components/modules/TextAreaComponent'
import StringComponent from '@/components/modules/StringComponent'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Form',
  props: {
    msg: String
  },
  methods: mapActions('Form', {
    'buttonAction' : 'buttonAction'
  }),
  computed: mapGetters('Form', {
    'button': 'getButton'
  }),
  components: {
    HeaderComponent,
    TextAreaComponent,
    StringComponent
  }
}
</script>