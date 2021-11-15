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

.card-body{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    display: flex;
    justify-content: center;
    padding: 20px 0 0;
}
.card{
    max-width: 450px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    border: 1px solid #ccc;
}
.card-image{
    position: relative;
    width: 50%;
    height: 150px;
    margin-right: 8px;
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
    padding: 10px;
}
.card-details .card-title{
    padding-right: 1vw;
    font-family: DejaVuSansMono-Bold;
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
    text-align: left;
}
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