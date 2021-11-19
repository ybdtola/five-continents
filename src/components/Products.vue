<template>
     <!-- <section> -->
       <div class="card-body">
           <div class="card">
                <div class="card-image">
                    <img :src="product.img" >
                </div>
                <div class="card-details">
                    <div class="card-title" >{{product.title}}</div>
                    <div class="card-text">{{product.text}}</div>
                    <div class="card-price">&#8358;{{product.price}}</div>
                                <button  v-if="!menu.cart" class="cart active" @click="menu.cart =true, addToCart(JSON.parse(JSON.stringify(menu)))">ADD TO CART</button>
                                <button v-else class="cart"  style='cursor:not-allowed'>IN CART</button>
                            <!--</div> -->
                </div>
            </div>
        </div>
   <!-- </section> -->
</template>



<script>
    // import img1 from '../assets/img/g.png'
    // import img2 from '../assets/img/b.jpg'
    // import img3 from '../assets/img/c.jpg'
    // import img4 from '../assets/img/d.jpg'
    // import img5 from '../assets/img/e.jpg'
    // import img6 from '../assets/img/f.jpg'

export default{
    props: ['product']
  
}
</script>
<style scoped>
  


/* div > button.cart{
    font-family: DejaVuSansMono-Bold;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    background: #ffa12f;
    letter-spacing: .1em;
    align-self: flex-end;
    cursor: pointer;
    border: 1px solid #ffa12f;
    transition: .4s;
}
button.cart.active:hover{
    background: #fff;
    border: 1px solid #ffa12f;

} */

</style>