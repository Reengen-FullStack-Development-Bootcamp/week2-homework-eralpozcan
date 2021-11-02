<template>
  <div class="form">
    <div class="flex-row justify-content-between">
        <div class="flex-col justify-content-between mx-5 mt-2" style="max-width: 25rem;">
            <div class="col border">
              <div class="row">
                <b-form-group>
                  <b-form-input v-model="$v.name.$model" :state="stateCheck($v.name)" placeholder="Enter your name" aria-describedby="name-feedback"></b-form-input>
                  <b-form-invalid-feedback id="name-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>                
                </b-form-group>
                <b-form-group>
                  <b-form-input v-model="$v.surname.$model" :state="stateCheck($v.surname)" placeholder="Enter your surname" aria-describedby="surname-feedback"></b-form-input>
                  <b-form-invalid-feedback id="surname-feedback">
                    Please enter your surname at least 3 characters.
                  </b-form-invalid-feedback>  
                </b-form-group>
                <b-form-group>
                  <b-form-input v-model="$v.mail.$model" :state="stateCheck($v.mail)" placeholder="aliveli@vuehotel.com" aria-describedby="mail-feedback"></b-form-input>
                  <b-form-invalid-feedback id="mail-feedback">
                    Please enter your email address.
                  </b-form-invalid-feedback>                
                </b-form-group>
                <b-form-group>
                  <b-form-input v-model="$v.age.$model" :state="stateCheck($v.age)" placeholder="18" aria-describedby="age-feedback"></b-form-input>
                  <b-form-invalid-feedback id="age-feedback">
                    Please between 0 - 120.
                  </b-form-invalid-feedback>                
                </b-form-group>
                <b-form-group>
                  <b-form-input v-model="$v.phone.$model" :state="stateCheck($v.phone)" placeholder="+905011234211" aria-describedby="phone-feedback"></b-form-input>
                  <b-form-invalid-feedback id="phone-feedback">
                    Please between 0 - 11.
                  </b-form-invalid-feedback>                
                </b-form-group>
                <b-form-group>
                  <b-form-input v-model="$v.citizenId.$model" :state="stateCheck($v.citizenId)" placeholder="Turkish Citizen ID" aria-describedby="citizenid-feedback"></b-form-input>
                  <b-form-invalid-feedback id="citizenid-feedback">
                    Please at least 11 and just number.
                  </b-form-invalid-feedback>                
                </b-form-group>
                <b-form-group>
                  <b-form-input v-model="$v.hes.$model" :state="stateCheck($v.hes)" placeholder="HES Code" aria-describedby="citizenid-feedback"></b-form-input>
                  <b-form-invalid-feedback id="citizenid-feedback">
                    Please enter HES Code.
                  </b-form-invalid-feedback>                
                </b-form-group>
              </div>
                                                               
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import {vuelidate} from '@/mixins/global'

export default {
  name: "Form",
  props: {},
  mixins:[vuelidate],
  data() {
    return {
      RezDetail:[Object],
      totalPerson:1,
      name:"",
      surname:"",
      mail:"",
      age:"",
      phone:"",
      citizenId:"",
      hes:"",
      phoneNumber:'',
    };
  },

  watch:{
    
  },
  computed:{

  },
  methods: {
    stateCheck(val){
      if (val.$dirty && val.$error == false){
        return true
      }else if (val.$dirty && val.$error){
        return false
      }
    }


  },
  created() {

  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
