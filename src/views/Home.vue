<template>
  <div class="home">
    <button @click="handleClick">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type){
      //this.$router.go(-1)
      // this.$router.go(1)
      // this.$router.back()
      if(type === 'back') this.$router.back()
      // else if(type === 'push') this.$router.push('/parent')
      else if(type === 'push') {
        const name = 'Michael'
        this.$router.push({
          /* name: 'parent',
          query: {
            name: 'Michael'
          }  */

          /* name: 'argu',
          params: {
            name: 'Michael'
          } */
          path: `/argu/${name}`,
        })  // router.js： name 需要配置
      }
      else if(type === 'replace'){
        this.$router.replace({name: 'parent'}) 
      }

    } 
  }
}
</script>
