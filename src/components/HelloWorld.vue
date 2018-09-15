<template>
    <div class="homeWrap">
        <div class="userInfo">
            {{getaccount}}
        </div>
        <div><button @click="addaccount(1)">增加账户余额</button></div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    ...mapMutations([
        'addaccount'
    ])
  },
  computed:{
      getaccount(){
          console.log(this.$store);
          return this.$store.getters.accountGetter(1)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
