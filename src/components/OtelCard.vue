<template>
  <div class="otelcard">
    <div class="row justify-content-center mt-2">
        <div class="card mb-3 mx-2 " style="max-width: 1024px;"> <!-- mx değerini değiştir debug için öyle-->
            <div class="row no-gutters">
                <div class="col-md-4">
                    <b-carousel
                        id="carousel-fade"
                        style="text-shadow: 0px 0px #000"
                        fade
                        indicators
                        class="carounsel"
                    >   <!-- for ile imagelar çekilip eklenecek  img ayarlamaları çöp-->
                        <b-carousel-slide class="image"
                            :img-src="require(`@/assets/images/hotels/${hotel.id}/1.jpg`)"
                        ></b-carousel-slide>
                        <b-carousel-slide class="image"

                            :img-src="require(`@/assets/images/hotels/${hotel.id}/2.jpg`)"
                        ></b-carousel-slide>
                        <b-carousel-slide class="image"
                            :img-src="require(`@/assets/images/hotels/${hotel.id}/3.jpg`)"
                        ></b-carousel-slide>
                    </b-carousel>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div>
                            <p class="card-title">{{hotel.motelName}} <b-form-rating :value="hotel.motelRating" show-value show-value-max size="sm" no-border readonly precision="1" disable="true" inline="true"></b-form-rating></p>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <p class="card-text">{{hotel.motelDesc}}</p>
                            </div>
                            <div class="col-5">
                                <div class="row">
                                    <a class="location" @click="showModal">Show Location</a>
                                    <p class="mt-3 card-price card-text">Starting $ {{hotel.motelPrice.adult}}</p>
                                    <p class="card-text"><small class="text-muted"></small></p>
                                </div>
                                <div class="row">
                                    <div>
                                        <b-button :href="`/reserve/${hotel.id}`" pill>Reserved</b-button>
                                    </div>
                                    <b-modal ref="my-modal" hide-footer hide-header>
                                        <div class="modal-body mb-0 p-0">
                                            <div id="map-container-google-16" class="z-depth-1-half map-container" style="height: 400px">
                                            <iframe :src="hotel.motelLocation"
                                                frameborder="0" style="border:0" allowfullscreen></iframe>
                                            </div>
                                            <div class="row d-flex flex-wrap mt-1 align-content-center">
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-info btn-md">Save location <b-icon variant="gray" icon="geo-alt"></b-icon></button>
                                                    <button type="button" @click="hideModal()" class="btn btn-outline-info btn-md" data-dismiss="modal">Close <i class="fas fa-times ml-1"></i></button> 
                                                </div>
                                                                            
                                            </div>
                                        </div>
                                    </b-modal>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtelCard',
  props: {
      hotel:{type:Object,required:true}
  },
  data(){
      return {
        value:3.7,       
      }
  },
  methods:{
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
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
a {
  color: #42b983;
}
.carounsel {
    margin-left: 1vh;
    margin-top: 1vh;
    margin-bottom: 0.5vh;
}

.map-container {
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
.map-container iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}
.location {
    text-decoration:underline;
    font-size:10px;
}


</style>
