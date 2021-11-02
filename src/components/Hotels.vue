<template>
  <div class="hotels">
      <OtelCard v-for="hotel,i in hotels" :key="i" :hotel="hotel" class="mt-3"/>
  </div>
</template>

<script>
import OtelCard from "@/components/OtelCard"
import hotels from '@/assets/data/hotel.json'

export default {
  name: 'Hotels',
  components:{
      OtelCard,
  },
  props: {
  },
  data(){
      return {
        hotels,      
      }
  },

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
