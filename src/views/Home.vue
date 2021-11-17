
<template>
<Navbar :count='count_data' />  
   <HeroBanner />
    <div class="welcome">
      <h2>Our Delectable Menu</h2>
      <div class='underline'></div>
     </div>
   <section>
       <div class="card-body" v-for="(menu, index) in menus" :key="index">
           <div class="card">
                <div class="card-image">
                    <img :src="menu.img" >
                </div>
                <div class="card-details">
                    <div class="card-title" >{{menu.title}}</div>
                        <div class="card-price">&#8358;{{menu.price}}</div>
                            <div class="card-text">{{menu.text}}</div>
                                <button  v-if="!menu.cart" class="cart active" @click="menu.cart =true, addToCart(JSON.parse(JSON.stringify(menu)))">ADD TO CART</button>
                                <button v-else class="cart"  style='cursor:not-allowed'>IN CART</button>
                    </div>
                </div>
            </div>


   </section>

  <Footer />

</template>

<script>
import Navbar from '../components/Navbar.vue'
import HeroBanner from '../components/HeroBanner.vue'
import Footer from '../components/Footer.vue'
import img1 from '../assets/img/g.png'
import img2 from '../assets/img/b.jpg'
import img3 from '../assets/img/c.jpg'
import img4 from '../assets/img/d.jpg'
import img5 from '../assets/img/e.jpg'
import img6 from '../assets/img/f.jpg'
export default {
    components: {
        HeroBanner,
        Navbar,
        Footer
    },
    data(){
        return {
            menus: [
                {
                    id: 1, 
                    category: "Lunch",
                    title: "Fried Rice & Chicken",
                    price: 350.99,
                    img: img1,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    quantity: 1,
                    cart: false
                },
                {
                    id: 2, 
                    category: "Vegetable",
                    title: "Country Delight",
                    price: 450.99,
                    img: img2,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    quantity: 1,
                    cart: false
                },
                {
                    id: 3, 
                    category: "Dessert",
                    title: "Pizza",
                    price: 550.99,
                    img: img3,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    quantity: 1,
                    cart: false
                },
                {
                    id: 4, 
                    category: "Dessert",
                    title: "American Apple",
                    price: 650.99,
                    img: img4,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    quantity: 1,
                    cart: false
                },
                {
                    id: 5, 
                    category: "Breakfast",
                    title: "Milk",
                    price: 100.99,
                    img: img5,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    quantity: 1,
                    cart: false
                },
                {
                    id: 6, 
                    category: "Shakes",
                    title: "Coffee",
                    price: 70.99,
                    img: img6,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    quantity: 1,
                    cart: false
                }
            ],
            count_data: 0,
            countCart: 0
        }
    },
    methods: {
        addToCart(menu){
            let cart = []
            if(JSON.parse(localStorage.getItem('menu'))){
                cart = JSON.parse(localStorage.getItem('menu'))
            }else{
                cart = []
            }
            cart.push(menu);
            localStorage.setItem('menu', JSON.stringify(cart))
                // let match = cart.find(product =>  product.id == menu.id)
                    // console.log(product.id, menu.id);
                // console.log(match.id);
            this.count_data = cart.length
            this.updateCart
        },
        updateCart (){
            let cart = []
               if(JSON.parse(localStorage.getItem('menu'))){
                   cart = JSON.parse(localStorage.getItem('menu'))
               }else{
                   cart = []
               }
               cart.forEach((item, index) => { 
                   this.menus.forEach((menu, index) => {
                       if(item.id == menu.id){
                           this.menus.cart = true
                       }
                   })
               })
            this.countCart = cart.length;
        },
        NoInCart(){
                  if(JSON.parse(localStorage.getItem('menu')).length > 0){
                      this.count_data = JSON.parse(localStorage.getItem('menu')).length
               }else{
                   this.count_data = 0
               }
            },
            setCart(){
                if(!localStorage.getItem('menu')){
                    localStorage.setItem('menu', '[]')
                    }
                }
    },
    
    created(){
        this.setCart()
        this.updateCart
        this.NoInCart()
    }
}
</script>

<style scoped>
  .welcome {
    font-family: 'DejaVuSansMono-Bold';
    margin: 20px 0;
    padding: 5px 0;
    transition: .4s;
    text-align: center;
    color: #191919;
    letter-spacing: .2em;
    line-height: 2;
}
.welcome h2{
  position: relative;
}
.underline {
    height: 2px;
    width: 50px;
    background-color: #f4b05d;
    position: absolute;
    left: 50%;
}
section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    max-width: 1000px;
    margin: auto;
    padding: 0 1.5rem;
    margin-bottom: 5%;
}
.card-body{
    /* margin: 0 50px 50px; */
    margin: 0 0 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    display: flex;
    justify-content: center;
    /* border-top: 1px solid #a9abb378;  */
    /* border-bottom: 1px solid #a9abb3;  */
    padding: 50px 0 0;
}
.card{
    /* border: 1px solid white; */
    /* min-width: 400px; */
    max-width: 450px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    /* flex-wrap: wrap;
    overflow: hidden; */
    /* flex-shrink: 2; */
    /* height: 200px; */
}
.card-image{
    position: relative;
    width: 50%;
    height: 150px;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 12px;
    /* border: 3px solid #a9abb3ea; */
    overflow: hidden;
}
.card-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .3s ease-in .2s;
}
.card:hover .card-image img{
    transform: scale(1.2);
}
.card-details{
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    font-size: 12px;
}
.card-details .card-title{
    padding-right: 1vw;
    border-bottom: 1px solid ;
    font-family: DejaVuSansMono-Bold;
    /* font-size: .8em; */
    text-align: left;
}
.card-price{
    display: flex;
    justify-content: flex-end;
    color: #f87b07;
    font-family: DejaVuSansMono-Bold;
    font-style: italic;
    font-size: 1.3em;
    padding-bottom: 10px;
}
.card-text{
    line-height: 1.5;
    /* letter-spacing: .5px; */
    text-align: left;
}
div > button.cart{
    font-family: DejaVuSansMono-Bold;
    border: none;
    outline: none;
    /* border-radius: 5px; */
    padding: 5px 10px;
    background: #ffa12f;
    letter-spacing: .1em;
    align-self: flex-end;
    /* line-height: 3; */
    cursor: pointer;
    border: 1px solid #ffa12f;
    transition: .4s;
}
button.cart.active:hover{
    background: #fff;
    border: 1px solid #ffa12f;
}
   
</style> 