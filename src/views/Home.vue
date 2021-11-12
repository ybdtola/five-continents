<template>

   <Navbar :count='count_data' />  
  
   <HeroBanner />
    <div class="welcome">
      <h2>Our Delectable Menu</h2>
      <div class='underline'></div>
     </div>
    <section>
        <Products v-for="(product, index) in products" :key="index"
        :product="product" v-on:view-product="viewProduct($event)"/>
        <ProductDesc :product="product" :active="active.productshow" :cart="cart" @closeModal="closeProduct($event)" />
    </section>
    <Footer />
  
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Cart from './Cart.vue'
import HeroBanner from '../components/HeroBanner.vue'
import Products from '../components/Products.vue'
import ProductDesc from '../components/ProductDesc.vue'
import Footer from '../components/Footer.vue'
import img1 from '../assets/img/g.jpg'
import img2 from '../assets/img/b.png'
import img3 from '../assets/img/c.jpg'
import img4 from '../assets/img/d.jpg'
import img5 from '../assets/img/e.jpg'
import img6 from '../assets/img/f.jpg'
export default {
    props: [],
    // name: 'Products',
    components: {
        Navbar,
        Cart,
        HeroBanner,
        Products,
        ProductDesc,
        Footer
    },
    data(){
        return {
            sum: 0,
            cart: [],
            inCart : false,
            // product: null,
            active: {
                productshow: false
            },
            count_data: 0,
            // counter
            countCart: 0,
            products: [
                {
                    id: 1, 
                    category: "Lunch",
                    title: "Rice",
                    price: 350.99,
                    img: img1,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    quantity: 1,
                    cart: false,
                    subcategory: [
                        { name: 'White', price: 155.99, id:1, cart: false},
                        { name: 'Fried', price: 160.00, id:2, cart: false}, 
                        {name: 'Chinese', price: 140.00, id:3, cart: false}, 
                        {name: 'Ofada', price: 130.00, id:4, cart: false}
                        ],
                        temp: 0,
                        total: []
                },

                {
                    id: 2, 
                    category: "Vegetable",
                    title: "Shawarma",
                    price: 45.99,
                    img: img2,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    quantity: 1,
                    cart: false,
                    subcategory: [
                        { name: 'x', price: 5.99, id:1, cart: false},
                        { name: 'y', price: 6.00, id:2, cart: false}, 
                        {name: 'z', price: 4.00, id:3, cart: false}, 
                        {name: 'a', price: 3.00, id:4, cart: false}
                        ],
                        temp: 0,
                        total: []
                },
                {
                    id: 3, 
                    category: "Dessert",
                    title: "Pizza",
                    price: 55.99,
                    img: img3,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    quantity: 1,
                    cart: false,
                    subcategory: [
                        { name: 'Plantain', price: 5.99, id:1, cart: false},
                        { name: 'Moimoi', price: 6.00, id:2, cart: false}, 
                        {name: 'Salad', price: 4.00, id:3, cart: false}, 
                        {name: 'Snail', price: 3.00, id:4, cart: false}
                        ],
                        temp: 0,
                        total: []
                },
                {
                    id: 4, 
                    category: "Dessert",
                    title: "American Apple",
                    price: 65.99,
                    img: img4,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    quantity: 1,
                    cart: false,
                    subcategory: [
                        { name: 'Plantain', price: 5.99, id:1, cart: false},
                        { name: 'Moimoi', price: 6.00, id:2, cart: false}, 
                        {name: 'Salad', price: 4.00, id:3, cart: false}, 
                        {name: 'Snail', price: 3.00, id:4, cart: false}
                        ],
                        temp: 0,
                        total: []
                },
                {
                    id: 5, 
                    category: "Breakfast",
                    title: "Milk",
                    price: 1.99,
                    img: img5,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    quantity: 1,
                    cart: false,
                    subcategory: [
                        { name: 'Plantain', price: 5.99, id:1, cart: false},
                        { name: 'Moimoi', price: 6.00, id:2, cart: false}, 
                        {name: 'Salad', price: 4.00, id:3, cart: false}, 
                        {name: 'Snail', price: 3.00, id:4, cart: false}
                        ],
                        temp: 0,
                        total: []
                },
                {
                    id: 6, 
                    category: "Shakes",
                    title: "Coffee",
                    price: 0.99,
                    img: img6,
                    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    quantity: 1,
                    cart: false,
                    subcategory: [
                        { name: 'Plantain', price: 5.99, id:1, cart: false},
                        { name: 'Moimoi', price: 6.00, id:2, cart: false}, 
                        {name: 'Salad', price: 4.00, id:3, cart: false}, 
                        {name: 'Snail', price: 3.00, id:4, cart: false}
                       ],
                        temp: 0,
                        total: []
                }
            ]
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
            //     const records = JSON.parse(localStorage.getItem('menu'));
            this.countCart = cart.length;
            //    console.log(cart); 
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
                },
            viewProduct(product){
                this.product = product
                this.active.productshow = true
            },
            closeProduct(product){
                this.product = product
                this.active.productshow = false
            },
        //  getMenu(){
        //     const records = JSON.parse(localStorage.getItem('menu'));
        //     this.countCart = records.length;
        // }
          
            // this.addMiniCart()
            // console.log(product);
            // console.log(this.cart);
            
        
    //     addMiniCart(product){
    //         // for(let i =0; i<this.products.length; i++)
    //        this.products.forEach(i => {
            
    //         console.log(product[i]);}
    //         )}
    // },
     
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
    max-width: 1000px;
    margin: auto;
    padding: 0 1.5rem;
    margin-bottom: 5%;
    margin-top: 3%;
}




   
</style>