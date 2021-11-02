<template>
  <div class="hotels">
      <Form v-for="i,index in totalPerson" :key="index" :i="i" class="mt-5" /> 
  </div>
</template>

<script>
import Form from "@/components/Form"

export default {
  name: 'Rez',
  components:{
      Form,
  },
  props: {
  },
  data(){
      return {
        totalPerson:null,
        RezDetail:[Object] 
      }
  },
  created(){
    this.totalPerson = this.$route.params.totalPerson
    this.RezDetail =  this.$route.params
    console.log(this.$route.params)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}


</style>
