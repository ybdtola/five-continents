<template>
<!-- <Navbar :count="this.counter" /> -->
    <!-- <div class="container"> -->
<transition name="slide">      
  <div class="backdrop" @click.self="closeModal" v-if="open">
    <div class="sidenav">
      <div class='ticket'>
        <h2 style="padding: 20px 0 50px"> Shopping Cart ({{this.counter}})</h2>
        <div style="font-size:12px">
          <ul id='list' v-for="(item, index) in this.cart" :key="index">
            <li>
              <span><small style='font-family: DejaVuSansMono-Oblique'>{{item.category}}</small><br> {{item.title}}</span>
              <div id="modifier">
                <span @click="decrease(item.id)">-</span>
                {{item.quantity}}
                <span @click="increase(item.id)">+</span>
                <span style=' font-size:10px; cursor:pointer;text-align: center;' @click="remove(item.id)" id="delete"> 🗑️</span>
              </div>
              <div>
              </div>
              <span id="price">{{(item.price * item.quantity).toFixed(2)}}</span>
            </li>
           
          </ul>
          <ul id="sum">
            <li><span></span>
              <span>Sub-Total</span><span>{{(sumTotal).toFixed(2)}}</span>
            </li>
            <li><span></span>
              <span>Delivery Charges</span><span>{{(delivery).toFixed(2)}}</span>
            </li>
            <li><span></span>
              <span>Total</span><span><small style="font-family:DejaVuSansMono-Bold; font-size:16px;margin-right:0.313rem  ">&#8358;</small>{{(total)}}</span>
            </li>
          </ul>
      <button id="order" @click="showForm" v-if="!show">🛒Check Out</button>
      </div>
      </div>
          <div class="log" v-if="show">
            <div id="row">
              <input type="text" id="name" placeholder="Firstname Lastname">
              <!-- <input type="password" id="pass" placeholder="Password"> -->
              <input type="text" id="email" placeholder="Email">
              <input type="text" id="address" placeholder="Address">
              <input type="text" id="phone" placeholder="Phone">
              </div>
              <div id="submit">Proceed to Payment </div>
          </div>
    </div>
    </div>
    </transition>
      <!-- <Footer /> -->
</template>

<script>
// import Footer from '../components/Footer.vue'
// import Counter from '../components/Counter.vue'
// import Navbar from '../components/Navbar.vue'
export default {
  name: 'Cart',
 components: {
      // Footer, 
      // Counter,
      // Navbar
 },
 props: ['open'],
 
  data() {
    return {
      tickets: {
        products: null,
        total: 0,
        delivery: 0.1
      },
      counter: 0,
      cart: [],
      show: false
    }
  },
  computed: {
    sumTotal(){
      let t = 0;
      this.cart.forEach((item) => {
         t += item.price * item.quantity
      })
      return t
    },
    delivery(){
      return (this.sumTotal * this.tickets.delivery)
    },
    total(){
      return (this.sumTotal + this.delivery).toFixed(2)
    }
  },
  created(){
     if(JSON.parse(localStorage.getItem('menu'))){
                this.cart = JSON.parse(localStorage.getItem('menu'))
            }else{
                this.cart = []
            }
            this.counter = this.cart.length
  },
  methods: {
    remove(i){
      for(let index=0; index < this.cart.length; index++){
      // this.cart.forEach((item, index) => {
          if(this.cart[index].id == i){
            this.cart.splice(index, 1)
              localStorage.setItem('menu', JSON.stringify(this.cart))
          }
          this.counter = this.cart.length
      // });
      // window.location.reload();
      }
    },
    increase(i){
      for(let index=0; index < this.cart.length; index++){
          if(this.cart[index].id == i){
            this.cart[index].quantity++
              localStorage.setItem('menu', JSON.stringify(this.cart))
          }
      }
    },
    decrease(i){
      for(let index=0; index < this.cart.length; index++){
          if(this.cart[index].id == i && this.cart[index].quantity > 1){
            this.cart[index].quantity--
            localStorage.setItem('menu', JSON.stringify(this.cart))
          }
      }
    },
    closeModal(){
      this.$emit('close')
    },
    showForm(){
      this.show = true
    }
    // account(){
    //   this.$router.push({name: 'Account'})
    // }
  }
}
</script>

<style scoped>
/* .container{
  width: 100%;
  min-height: calc(100vh - 60px);
    margin-bottom: 5%;
} */

.backdrop {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    /* display: none; */
}
.sidenav{
        /* font-size: 80%; */
        background-color: #fff;
        max-width: 500px;
        width: 450px;
        padding: 0 20px;
        position: fixed;
        right: 0;
        top: 0;
        margin: 0;
        height: 100%;
        /* height: calc(100% + 60px); */
        /* height: -moz-calc(100%); */
        padding-bottom: 60px;
        background-color: #fff;
        z-index: 2;
        overflow-y: auto;
        will-change: transform;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
         /* -webkit-transform: translateX(0%);
        transform: translateX(0%); */
        /* opacity: 0; */
        animation: easeIn 0.5s;
        /* transition: .3s ease-in; */
}

/* .slide-enter-active{  animation: easeIn 0.5s;}
.slide-leave-active{animation: easeIn 0.5s reverse;} */
@keyframes easeIn{
  0%{
    -webkit-transform: translateX(105%);
        transform: translateX(105%);
  }
  100%{
    -webkit-transform: translateX(0%);
        transform: translateX(0%);
  }
}
/* .open{
  -webkit-transform: translateX(0%);
      transform: translateX(0%);
    
} */
.slide-enter, .slide-leave-to{
      transform: translateX(-105%);opacity: 0} 
.slide-enter-active, .slide-leave-active{ transition: all .3s ease-in;}


.ticket{
  max-width: 500px;
  height: auto;
  margin: auto;
}
ul li:hover{
  background: #F5F5F5;
}
  ul#list{
    max-width: 500px;
    /* padding: 20px 0; */
  list-style-type: none;
}
ul#list li{
padding: 9px 0;
border-top: 1px dashed #999;
line-height: 20px;
list-style-type:none;
display: flex;
/* justify-content: space-between; */
align-items: center;
flex-wrap: wrap;
}
ul#list:nth-child(even) li{
    /* background-color: #f5f5f5; */
}
ul#list >li >span{
  text-align: left;
  flex: 40%;
}
ul#list li span#price{
  text-align: right;
  flex: 25%;
}
ul#list li span:nth-child(1){
  font-family: DejaVuSansMono-Bold;
}
ul#sum > li{
    position: relative;
    height: auto;
    line-height: 48px;
    border-top: 1px solid #999;
    list-style-type: none;
    display: flex;
    justify-content: end;
}
ul#sum >li >span{
   font-family: DejaVuSansMono-Bold;
   flex: 50%;
   text-align: right;
}
div#modifier{
    flex: 35%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
div#modifier span{
  width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: none!important;
  cursor: pointer;
  transition: background .3s;
}
div#modifier span:hover{
  background: #f1f1f1;
color: #2c2b2b;
}
div#modifier  span#delete{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 10px;
    cursor: pointer;
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  transition: background .3s;
}
div#modifier  span#delete:hover{
    background: #ff00001f;
}
button#order{
    border: none;
    outline: none;
    transition: all .4s;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    line-height: 48px;
    border: 1px solid #f4b05d;
    margin: 10px auto;
    background: #F79B2B;
    color: #000;
    font-weight: bold;
    cursor: pointer;
}
button#order:hover{
  border: 1px solid #ffa12f;
  background: transparent;
}
        div.log{
           /* display: none; */
            /* animation: slideup .3s ease; */
            transition: all .3s ease
        }
        div.log.show{
            display: block;
        }
        @keyframes slideup{}
        div#row{
          display: grid;
          grid-template-columns: 50% 50%
        }
        #phone, #pass, #name, #email, #address{
                width: 90%;
                height: 48px;
                border: none;
                border-bottom: 1px solid #999;
                margin: 10px auto;
                padding: 0 10px;
                box-sizing: border-box;
                position: relative;

        }
        input{
          border: none;
          outline: none;
        }
        input:focus{
          border: none;
          outline: none;
        }
        #submit{
                width: 100%;
                height: 48px;
                line-height: 48px;
                border: 1px solid #f4b05d;
                margin: 10px auto;
                background: #F79B2B;
                color: #000;
                font-weight: bold;
                font-size: 12px;
                cursor: pointer;
        }
        #submit:hover{
          border: 1px solid #ffa12f;
          background: transparent;
        }
</style>
