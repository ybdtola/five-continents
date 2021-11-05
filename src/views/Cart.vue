<template>
<!-- <Counter/> -->
    <div class="container">
      <div class='ticket'>
        <h2 style="padding: 20px 0 50px"> Shopping Cart ({{this.counter}})</h2>
        <div >
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
              <span>Total</span><span><small style="font-family:DejaVuSansMono-Bold; font-size:16px;margin-right:0.313rem  ">$</small>{{(total)}}</span>
            </li>
          </ul>
      </div>
      </div>
      <button id="order">🛒Check Out</button>
    </div>
      <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
// import Counter from '../components/Counter.vue'
export default {
  name: 'Cart',
 components: {
      Footer, 
      // Counter
 },
  data() {
    return {
      tickets: {
        products: null,
        total: 0,
        delivery: 0.1
      },
      counter: 0,
      cart: []
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
      // });
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
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  min-height: calc(100vh - 60px);
    margin-bottom: 5%;
}
.ticket{
  max-width: 500px;
  height: auto;
  margin: auto;
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
  flex: 35%;
}
ul#list li span:nth-child(1){
  font-family: DejaVuSansMono-Bold;
}
ul#sum > li{
    position: relative;
    height: 48px;
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
    flex: 25%;
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
  margin-top: 30px;
  width: 100%;
  max-width: 500px;
  height: 50px;
  border: none;
  outline: none;
    padding: .625rem 0.938rem;
    background: #ffa12f;
    border-radius: 5px;
    border: 1px solid #ffa12f;
    transition: .4s;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
}
button#order:hover{
  border: 1px solid #ffa12f;
  background: transparent;
}

</style>
