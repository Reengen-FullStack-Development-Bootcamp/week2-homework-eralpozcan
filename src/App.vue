<template>
  <div id="app">
    <Header/>
    <!--<OtelCard/>
    

    <Hotel/>


    <Form/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import json from './assets/data/hotel.json'

export default {
  name: 'App',
  components: {
    Header,
  },
  data (){
    return {
      myJson :json
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
