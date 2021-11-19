
<template>
<Navbar :count='count_data' />  
   <HeroBanner />
    <div class="welcome">
      <h2>Our Delectable Menu</h2>
      <div class='underline'></div>
     </div>
     <div style="display:flex;align-items:center;margin-bottom: 50px;max-width: 900px;  margin-right: auto; margin-left: auto">
       <hr style="flex:1; opacity: .4">
       <h3 style="text-align: left;max-width: 900px;padding:0 1.5rem;">SALAD</h3>
       <hr style="flex:1; opacity: .4">
    </div>
   <section>
       <div class="card-body" v-for="(menu, index) in menus.salad" :key="index">
           <div class="card">
                <div class="card-image">
                    <img :src="menu.img" >
                </div>
                <div class="card-details">
                    <div class="card-title" >{{menu.title}}</div>
                            <div class="card-text">{{menu.text}}</div>
                            <div class="flex-price">
                                <div class="card-price">&#8358;{{menu.price}}</div>
                                <button  v-if="!menu.cart" class="cart active" @click="menu.cart =true, addToCart(JSON.parse(JSON.stringify(menu)))">Add To Cart</button>
                                <button v-else class="cart"  style='cursor:not-allowed'>In Cart</button>
                            </div>
                    </div>
                </div>
            </div>
            </section>
            <div style="display:flex;align-items:center;margin-bottom: 20px;max-width: 900px;  margin-right: auto; margin-left: auto">
                <hr style="flex:1; opacity: .4">
                <h3 style="text-align: left;max-width: 1000px;padding:0 1.5rem;">Burgers & Sandwiches</h3>
                <hr style="flex:1; opacity: .4">
                </div>
                <small style="max-width: 900px;display: flex;margin: 0 auto; margin-bottom: 50px;text-align: left;">*All are accompanied with a choice of French fries, sweet potato fries or yam fries (salty or less salt)</small>
            <section>
       <div class="card-body" v-for="(menu, index) in menus.burger" :key="index">
           <div class="card">
                <div class="card-image">
                    <img :src="menu.img" >
                </div>
                <div class="card-details">
                    <div class="card-title" >{{menu.title}}</div>
                            <div class="card-text">{{menu.text}}</div>
                            <div class="flex-price">
                                <div class="card-price">&#8358;{{menu.price}}</div>
                                <button  v-if="!menu.cart" class="cart active" @click="menu.cart =true, addToCart(JSON.parse(JSON.stringify(menu)))">Add To Cart</button>
                                <button v-else class="cart"  style='cursor:not-allowed'>In Cart</button>
                            </div>
                    </div>
                </div>
            </div>
         </section>
         <!--  -->
            <div style="display:flex;align-items:center;margin-bottom: 50px;max-width: 900px;  margin-right: auto; margin-left: auto">
            <hr style="flex:1; opacity: .4">
            <h3 style="text-align: left;max-width: 1000px;padding:0 1.5rem;">Pasta Noodles</h3>
            <hr style="flex:1; opacity: .4">
            </div>
            <section>
            <div class="card-body" v-for="(menu, index) in menus.pasta" :key="index">
                <div class="card">
                        <div class="card-image">
                            <img :src="menu.img" >
                        </div>
                        <div class="card-details">
                            <div class="card-title" >{{menu.title}}</div>
                                    <div class="card-text">{{menu.text}}</div>
                                    <div class="flex-price">
                                        <div class="card-price">&#8358;{{menu.price}}</div>
                                        <button  v-if="!menu.cart" class="cart active" @click="menu.cart =true, addToCart(JSON.parse(JSON.stringify(menu)))">Add To Cart</button>
                                        <button v-else class="cart"  style='cursor:not-allowed'>In Cart</button>
                                    </div>
                            </div>
                        </div>
                </div>


   </section>
   <!-- Continental Meal -->
            <div style="display:flex;align-items:center;margin-bottom: 50px;max-width: 900px;  margin-right: auto; margin-left: auto">
            <hr style="flex:1; opacity: .4">
            <h3 style="text-align: left;max-width: 1000px;padding:0 1.5rem;">Continental Meal</h3>
            <hr style="flex:1; opacity: .4">
            </div>
            <section>
            <div class="card-body" v-for="(menu, index) in menus.continental" :key="index">
                <div class="card">
                        <div class="card-image">
                            <img :src="menu.img" >
                        </div>
                        <div class="card-details">
                            <div class="card-title" >{{menu.title}}</div>
                                    <div class="card-text">{{menu.text}}</div>
                                    <div class="flex-price">
                                        <div class="card-price">&#8358;{{menu.price}}</div>
                                        <button  v-if="!menu.cart" class="cart active" @click="menu.cart =true, addToCart(JSON.parse(JSON.stringify(menu)))">Add To Cart</button>
                                        <button v-else class="cart"  style='cursor:not-allowed'>In Cart</button>
                                    </div>
                            </div>
                        </div>
                </div>
         </section>
<!-- Rice -->
                <div style="display:flex;align-items:center;margin-bottom: 50px;max-width: 900px;  margin-right: auto; margin-left: auto">
                <hr style="flex:1; opacity: .4">
                <h3 style="text-align: left;max-width: 1000px;padding:0 1.5rem;">Rice</h3>
                <hr style="flex:1; opacity: .4">
                </div>
        <section>
            <div class="card-body" v-for="(menu, index) in menus.rice" :key="index">
                <div class="card">
                        <div class="card-image">
                            <img :src="menu.img" >
                        </div>
                        <div class="card-details">
                            <div class="card-title" >{{menu.title}}</div>
                                    <div class="card-text">{{menu.text}}</div>
                                    <div class="flex-price">
                                        <div class="card-price">&#8358;{{menu.price}}</div>
                                        <button  v-if="!menu.cart" class="cart active" @click="menu.cart =true, addToCart(JSON.parse(JSON.stringify(menu)))">Add To Cart</button>
                                        <button v-else class="cart"  style='cursor:not-allowed'>In Cart</button>
                                    </div>
                            </div>
                        </div>
                </div>
        </section>
                <div style="display:flex;align-items:center;margin-bottom: 20px;max-width: 900px;  margin-right: auto; margin-left: auto">
                <hr style="flex:1; opacity: .4">
                <h3 style="text-align: left;max-width: 1000px;padding:0 1.5rem;">Nigerian Speciality Dishes</h3>
                <hr style="flex:1; opacity: .4">
                </div>
                <small style="max-width: 900px;display: flex;margin: 0 auto; margin-bottom: 50px;text-align: left;">*All served with a choice of poundo yam, eba, amala, semolina, wheat</small>
        <section>
            <div class="card-body" v-for="(menu, index) in menus.special" :key="index">
                <div class="card">
                        <div class="card-image">
                            <img :src="menu.img" >
                        </div>
                        <div class="card-details">
                            <div class="card-title" >{{menu.title}}</div>
                                    <div class="card-text">{{menu.text}}</div>
                                    <div class="flex-price">
                                        <div class="card-price">&#8358;{{menu.price}}</div>
                                        <button  v-if="!menu.cart" class="cart active" @click="menu.cart =true, addToCart(JSON.parse(JSON.stringify(menu)))">Add To Cart</button>
                                        <button v-else class="cart"  style='cursor:not-allowed'>In Cart</button>
                                    </div>
                            </div>
                        </div>
                </div>
        </section>
              <div style="display:flex;align-items:center;margin-bottom: 50px;max-width: 900px;  margin-right: auto; margin-left: auto">
                <hr style="flex:1; opacity: .4">
                <h3 style="text-align: left;max-width: 1000px;padding:0 1.5rem;">Extras</h3>
                <hr style="flex:1; opacity: .4">
                </div>
        <section>
            <div class="card-body" v-for="(menu, index) in menus.extras" :key="index">
                <div class="card">
                        <div class="card-image">
                            <img :src="menu.img" >
                        </div>
                        <div class="card-details">
                            <div class="card-title" >{{menu.title}}</div>
                                    <div class="card-text">{{menu.text}}</div>
                                    <div class="flex-price">
                                        <div class="card-price">&#8358;{{menu.price}}</div>
                                        <button  v-if="!menu.cart" class="cart active" @click="menu.cart =true, addToCart(JSON.parse(JSON.stringify(menu)))">Add To Cart</button>
                                        <button v-else class="cart"  style='cursor:not-allowed'>In Cart</button>
                                    </div>
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
import img1 from '../assets/img/a.jpg'
import img2 from '../assets/img/b.jpg'
import img3 from '../assets/img/c.jpg'
import img4 from '../assets/img/d.jpg'
import img5 from '../assets/img/e.jpg'
import img6 from '../assets/img/f.jpg'
import img7 from '../assets/img/g.png'
import img8 from '../assets/img/h.jpg'
import img9 from '../assets/img/i.jpg'
import img10 from '../assets/img/j.jpg'
import img11 from '../assets/img/k.jpg'
import img12 from '../assets/img/l.jpg'
import img13 from '../assets/img/m.jpg'
import img14 from '../assets/img/n.jpeg'
import img15 from '../assets/img/o.jpg'
import img16 from '../assets/img/p.jpg'
import img17 from '../assets/img/q.jpg'
import img18 from '../assets/img/r.jpg'
import img19 from '../assets/img/s.jpg'
import img20 from '../assets/img/t.jpg'
import img21 from '../assets/img/u.jpg'
import img22 from '../assets/img/v.jpg'
import img23 from '../assets/img/w.jpg'
import img24 from '../assets/img/x.jpg'
import img25 from '../assets/img/y.jpeg'
import img26 from '../assets/img/1.jpg'
import img27 from '../assets/img/2.jpg'
import img28 from '../assets/img/3.jpg'
import img29 from '../assets/img/4.jpg'
import img30 from '../assets/img/5.jpg'
import img31 from '../assets/img/6.jpg'
import img32 from '../assets/img/7.jpg'
import img33 from '../assets/img/8.jpg'


export default {
    components: {
        HeroBanner,
        Navbar,
        Footer
    },
    data(){
        return {
            menus: {
                salad: [
                            {
                                id: 1, 
                                category: "salad",
                                title: "Chicken Hawaii",
                                price: 4000,
                                img: img1,
                                text:  "Diced chicken, pineapple & mayonnaise served with green and black olives dressing",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 2, 
                                category: "salad",
                                title: "Alaafin's Salad",
                                price: 5500,
                                img: img2,
                                text:  "Fresh crispy lettuce, cucumber, onions, boiled egg, corned beef, baked beans and sweet corn served with a rich creamy thousand island dressing",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 3, 
                                category: "salad",
                                title: "Chicken Suya Caesar Salad",
                                price: 4500,
                                img: img3,
                                text:  "Grilled chicken strips lightly spiced with yaji served with iceberg lettuce, croutons, grated parmesan cheese (optional) and Caesar dressing",
                                quantity: 1,
                                cart: false
                            }
                        ],
                burger: [

                            {
                                id: 4, 
                                category: "burger",
                                title: "The Golden Burger",
                                price: 5000,
                                img: img4,
                                text:  "Made with grilled ground mince beef in a soft burger buns with crispy lettuce, onion, tomato",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 5, 
                                category: "burger",
                                title: "Golden Chick King Burger",
                                price: 5000,
                                img: img5,
                                text:  "Well-seasoned flamed grilled chicken breast sandwiched between soft burger buns",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 6, 
                                category: "burger",
                                title: "Classic Club Sandwich",
                                price: 4500,
                                img: img6,
                                text:  "Triple decker lightly toasted bread filled with flake chicken in mayonnaise with egg, cheese, tomato, cucumber, lettuce",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 7, 
                                category: "burger",
                                title: "Crispy Chicken Shawarma",
                                price: 5000,
                                img: img7,
                                text:  "Breaded chicken strips & hotdog rolled in Middle Eastern flat bread, cucumber, tomato, cabbage in mayonnaise",
                                quantity: 1,
                                cart: false
                            }
                        ],
                pasta: [

                            {
                                id: 8, 
                                category: "pasta",
                                title: "Famous Spaghetti Jollof",
                                price: 8000,
                                img: img8,
                                text:  "Spaghetti cooked with a spicy medley of prawns, chicken strips, beef strips, onions and capsicum",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 9, 
                                category: "pasta",
                                title: "Pasta Bolognese",
                                price: 5000,
                                img: img9,
                                text:  "A classic Italian dish ground beef cooked in a rich tomato sauce with fresh herbs, spices pair and parmesan cheese with choice of pasta",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 10, 
                                category: "pasta",
                                title: "Singapore Noodles",
                                price: 8500,
                                img: img10,
                                text:  "Stir-fried rice stick with vegetable, scrambled egg curry and meat (chicken, beef, prawn and fish)",
                                quantity: 1,
                                cart: false
                            }
                        ],
                continental: [

                            {
                                id: 11, 
                                category: "continental",
                                title: "Whole Roasted Cat Fish Tilapia Fish",
                                price: 8500,
                                img: img11,
                                text:  "Well-seasoned fish grilled to perfection served with Smokey jollof rice & coleslaw or yam fries or French fries with pineapple & plantain salsa & signature chili sauce",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 12, 
                                category: "continental",
                                title: "Prawns In Chili Sauce",
                                price: 14000,
                                img: img12,
                                text:  "Chinese style tiger prawn in chili sauce served with choice of egg fried rice or steamed rice",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 13, 
                                category: "continental",
                                title: "Shredded Chicken Beef In Sauce",
                                price: 6800,
                                img: img13,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 14, 
                                category: "continental",
                                title: "Beef In Oyster Sauce",
                                price: 6000,
                                img: img14,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 15, 
                                category: "continental",
                                title: "Sweet N Sour Fish Chicken",
                                price: 7000,
                                img: img15,
                                text:  "",
                                quantity: 1,
                                cart: false
                            }
                        ],
                rice: [

                            {
                                id: 16, 
                                category: "rice",
                                title: "Egg Fried Rice",
                                price: 2500,
                                img: img16,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 17, 
                                category: "rice",
                                title: "Hong Kong Coconut Fried Rice",
                                price: 3000,
                                img: img17,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 18, 
                                category: "rice",
                                title: "Spicy Seafood Rice",
                                price: 3500,
                                img: img18,
                                text:  "Calamari Shrimps",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 19, 
                                category: "rice",
                                title: "Steamed Rice",
                                price: 1500,
                                img: img19,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 20, 
                                category: "rice",
                                title: "Vegetable Fried Rice",
                                price: 2300,
                                img: img20,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 21, 
                                category: "rice",
                                title: "Fried Rice",
                                price: 2500,
                                img: img21,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 22, 
                                category: "rice",
                                title: "Smokey Jollof Rice",
                                price: 2000,
                                img: img22,
                                text:  "",
                                quantity: 1,
                                cart: false
                            }
                        ],
                         special: [

                            {
                                id: 23, 
                                category: "special",
                                title: "Classic Seafood Okro",
                                price: 9000,
                                img: img23,
                                text:  "A rich blend of fresh market seafood cooked in a savory okra soup",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 24, 
                                category: "special",
                                title: "The Olubadan Royal Efo Riro",
                                price: 9000,
                                img: img24,
                                text:  "Fresh green leave cooked in a medley of seafoods with a native spice mix of smoked fish, dried, fish, stock fish, crayfish & kpomo",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 25, 
                                category: "special",
                                title: "Fisherman's Soup",
                                price: 9000,
                                img: img25,
                                text:  "Seafoods cooked in spicy rich Rivers native soup",
                                quantity: 1,
                                cart: false
                            }
                        ],
                         extras: [

                            {
                                id: 26, 
                                category: "extras",
                                title: "Snail",
                                price: 6000,
                                img: img26,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 27, 
                                category: "extras",
                                title: "Quater Chicken",
                                price: 4000,
                                img: img27,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 28, 
                                category: "extras",
                                title: "300g Fish",
                                price: 4500,
                                img: img28,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 29, 
                                category: "extras",
                                title: "Beef",
                                price: 3500,
                                img: img29,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 30, 
                                category: "extras",
                                title: "Goat Meat",
                                price: 4000,
                                img: img30,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 31, 
                                category: "extras",
                                title: "Fries (French Yam Sweet Potato)",
                                price: 1500,
                                img: img31,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 32, 
                                category: "extras",
                                title: "Pounded Yam",
                                price: 2000,
                                img: img32,
                                text:  "",
                                quantity: 1,
                                cart: false
                            },
                            {
                                id: 33, 
                                category: "extras",
                                title: "Pounded Yam, Eba, Semoline, Amala, Wheat",
                                price: 1500,
                                img: img33,
                                text:  "",
                                quantity: 1,
                                cart: false
                            }
                        ],
            count_data: 0,
            countCart: 0
            }
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
    /* margin: 20px 0; */
    padding: 50px 0;
    transition: .4s;
    text-align: center;
    color: #191919;
    letter-spacing: .2em;
}
.welcome h2{
  position: relative;
  font-family: 'Pinyon Script', cursive;
  font-size: 40px
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 32px;
    max-width: 1000px;
    margin: auto;
    padding: 0 1.5rem;
    margin-bottom: 5%;
}
.card-body{
    margin: 0 0 30px;
    display: flex;
    justify-content: center;
    /* padding: 50px 0 0; */
}
.card{
    max-width: 250px;
    width: 250px;
    display: flex;
    flex-direction: column;
    /* cursor: pointer; */
    
    border-radius: 15px;
    /* border: 1px solid #ccc; */
    box-shadow: 0px 1px 10px 1px #D9D9D9;
}
.card-image{
    position: relative;
    width: 100%;
    height: 150px;
    margin-right: 8px;
    /* margin-left: 8px; */
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
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
    padding: 15px 10px;
}
.card-details .card-title{
    padding: 15px 0;
    font-size: 14px;
    font-family: 'Fredoka One', cursive;
    text-align: left;
}
.card-price{
    display: flex;
    justify-content: flex-end;
    /* color: #f87b07; */
    font-family: DejaVuSansMono-Bold;
    /* font-style: italic; */
    font-size: 1.5em;
    /* padding-bottom: 10px; */
}
.card-text{
    line-height: 1.5;
    height: 100px;
    text-align: left;
    font-size: 11px;
}
.flex-price{
    display:flex; align-items:center; justify-content: space-between
}
div > button.cart{
    font-family: FredokaOne-Regular;
    border: none;
    outline: none;
    border-radius: 15px;
    padding: 5px 10px;
    background: #ffa12f;
    /* letter-spacing: .1em; */
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