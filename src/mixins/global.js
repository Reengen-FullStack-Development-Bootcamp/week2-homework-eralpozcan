
 // Cmrt Ders
export const filters = {
    filters: {
        capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}

import { minLength, required, email, numeric, maxLength, alpha, between } from "vuelidate/lib/validators";


function hesCheck(val) {
    // Ref: Fatih Ozoglu
    let reg = /^[A-Z][0-9][A-Z][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9]$/g; /// Ex: A1E1-1111-11
    return reg.test(val);
}




export const vuelidate = {
    validations: {
        name: {
            required,
            minLength:minLength(3),
        },
        surname: {
            required,
            minLength:minLength(3),
            alpha:alpha,
        },
        mail:{
            required,
            email,  
        },
        age:{
            required,
            numeric,
            betweenValue: between(0, 120),
        },
        phone:{
            required,
            numeric,
            minLength:minLength(10),
            maxLength:maxLength(11),
        },
        hes:{
            required,
            hesCheck
        },
        citizenId:{
            required,
            minLength:minLength(11),
            numeric,
        },
        checkIndate:{
            required,
        },
        checkOutdate:{
            required,
        }
    }
}