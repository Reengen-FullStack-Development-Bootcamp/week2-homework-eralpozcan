<template>
  <div class="hotelpage">
    <div class="d-flex justify-content-center">
        <div class="card mb-3 mx-2" style="max-width: 1024px;"> <!-- mx değerini değiştir debug için öyle-->
            <div class="row no-gutters">
                <div class="col image">
                    <b-carousel
                        id="carousel-fade"
                        style="text-shadow: 0px 0px 2px #000"
                        fade
                        indicators
                        img-width="650"
                        img-height="650"
                        class="carounsel"
                    >   <!-- for ile imagelar çekilip eklenecek -->
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
                    <div class="row">
                        <div class="col justify-content-start">
                            <p class="card-title">{{hotel.motelName}}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6 border">
                            <p class="card-text text-desc text-align-left">{{hotel.motelDesc}}</p>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <div class="col-12 border">
                                    <p class="mt-3 card-price card-text">Total : ${{CalcTotalPrice}}</p>
                                </div>
                                <div class="col mt-2 border">
                                    <div class="row d-flex justify-content-around mt-2">
                                        <div class="col">
                                            <select
                                                class="primary-border item-number rounded"
                                                v-model="itemNumberAdult"
                                                name="item-number"
                                                id="item-number"
                                            >
                                                <option v-for="(i, index) in 10" :value="i" :key="index">{{
                                                i
                                                }}</option>
                                            </select>
                                            <p class="mt-2 rounded">Adult</p>
                                        </div>
                                        <div class="col">
                                            <select
                                                class="primary-border item-number rounded"
                                                v-model="itemNumberChild"
                                                name="item-number"
                                                id="item-number"
                                            >
                                                <option v-for="(i, index) in 10" :value="i" :key="index">{{
                                                i
                                                }}</option>
                                            </select>
                                            <p class=" mt-2 rounded">Child</p>
                                        </div>  
                                    </div>                                                           
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="justify-items-around border">
                                <b-button id="tooltip-button-interactive" variant="gray">
                                    <font-awesome-icon icon="parking"/>
                                    <b-tooltip target="tooltip-button-interactive">Free Parking</b-tooltip>
                                </b-button>
                                <b-button id="tooltip-button-interactive1" variant="gray">
                                    <font-awesome-icon icon="swimming-pool"/>
                                    <b-tooltip target="tooltip-button-interactive1">Pool</b-tooltip>
                                </b-button>
                                <b-button id="tooltip-button-interactive2" variant="gray">
                                    <font-awesome-icon icon="wifi"/>
                                    <b-tooltip target="tooltip-button-interactive2">Free Wifi</b-tooltip>
                                </b-button>                                                                
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <label for="start-datepicker">Start Date</label>
                            <b-form-datepicker id="start-datepicker" v-model="checkInDate" class="mb-2" size="sm" placeholder="Choose a start date" locale="en" required></b-form-datepicker>
                        </div>
                        <div class="col-6">
                            <label for="end-datepicker">End Date</label>
                            <b-form-datepicker id="end-datepicker" v-model="checkOutDate" class="mb-2" size="sm" placeholder="Choose a end date" locale="en" required></b-form-datepicker>
                        </div>                  
                    </div>
                    <div class="row">
                        <div class="col">
                            <b-button variant="gray border" @click="goForm">
                                Next <font-awesome-icon icon="chevron-right"/>
                            </b-button>  
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
import {vuelidate} from '@/mixins/global'
import hotels from '@/assets/data/hotel.json'

export default {
  name: 'HotelPage',
  props: {
  },
  mixins: [vuelidate],
  data() {
      return {
        hotels,
        hotel:{},
        selected: null,
        itemNumberAdult:1,
        itemNumberChild:1,
        checkInDate: '',
        checkOutDate: '',
      }
    },
  computed:{
      // Toplam ücretin hesabının yapıldığı yer computed fonksiyon
      CalcTotalPrice(){
          return (Math.floor(this.hotel.motelPrice.adult * this.itemNumberAdult) + Math.floor(this.hotel.motelPrice.child * this.itemNumberChild)) * this.CalculateDate
      },
      //Tarih hesabının yapıldığı yer
      CalculateDate(){
        if (this.checkInDate != '' && this.checkOutDate != ''){
            let start = new Date(this.checkInDate)
            let end = new Date(this.checkOutDate)
            if (start !==null && end !== null) {
                let result = ((end - start)/86400000)
                if (result <1) return ''
                    return result
            }else {
                return 0
            }
        }else{
            return 0
        }

      },
    },
    methods:{
        goForm(){
            if(this.checkOutDate != '' && this.checkInDate != ''){
                this.$router.push({
                    name: "Rez",
                    params: { totalPerson: this.itemNumberAdult + this.itemNumberChild,adultCount:this.itemNumberAdult,childCount:this.itemNumberChild,stayDate:this.CalculateDate },
                });
            }
        },
    },
  created(){
      const motelId = this.$route.params.id;
      this.hotel = this.hotels.find(hotel => hotel.id == motelId)
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-number {
  height: 38px;
  padding-left: 10px;
  cursor: pointer;
  outline: none;
}
.text-desc {
    text-align: left;
}
.image {
    margin-left:5px;
    margin-top:5px;
}

</style>
