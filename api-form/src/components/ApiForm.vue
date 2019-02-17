<template>
  <div class="hello">
    {{ msg }}
    <select-api></select-api>
  </div>
</template>

<script>
import SelectApi from '@/components/modules/SelectApi'
import ArgumentItem from '@/components/modules/ArgumentItem'
import axios from 'axios'

export default {
  name: 'ApiForm',
  props: {
    msg: String
  },
  components: {
    SelectApi,
    ArgumentItem
  }
}
</script>
