<template>
<Navbar :count='cart' />  
<HeroBanner/>
  <Form/>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HeroBanner from '../components/HeroBanner.vue'
import Form from '../components/Form.vue'

export default {
    components: {
        Navbar, Form, HeroBanner
    },
    data(){
        return{
            cart: 0
        }
    },
    created(){
            let cart = []
               if(JSON.parse(localStorage.getItem('menu'))){
                   cart = JSON.parse(localStorage.getItem('menu'))
                   this.cart = cart.length
               }else{
                   cart = []
                    this.cart = cart.length
               }
    }
}
</script>

<style>

</style>