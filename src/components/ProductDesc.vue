<template>
        <div v-if="product">
            <div class="backdrop" @click.self="$emit('closeModal')">
                <div class="content">
                    <div class="img-box">
                        <img :src="product.img" class="img">
                    </div>
                    <div class="padding"> 
                        <div>
                        <h4 id="product-title">#{{product.title}}</h4>
                        <span class="subtitle">Optional Special Request:</span>
                        <div class="grid">
                        <Submenu v-for="(types, index) in product.subcategory" :key="types.id" :sub="types" @addToPrice="incPrice($event)" :sum="product.temp" />
                        </div>
                    </div>
                    <div class="btn">
                        <div id="modifier">
                            <span @click="minus">-</span>
                            {{product.quantity}}
                            <span @click="add">+</span>
                        </div>
                        <!-- <h4 v-if="temp">${{(getPrice().toFixed(2))}}</h4> -->
                        <!-- <h4>${{product.price}}</h4> -->
                        <h4>&#8358;{{price == 0 ? product.price : price}}</h4>
                        <button class="cart">ADD TO CART</button> 
                    </div>
                    </div>
            </div>
            </div>
        </div>

</template>
<script>
import Submenu from './Submenu.vue'
    export default{
        props: ['product', 'active'],
        components: {
            Submenu
        },
        data(){
            return{
                temp: false,
                hold: [],
                price: 0
                
            }
        },
        methods:{
            incPrice(sub){
                // this.product.temp =  sub.price
            // console.log(sub.price);
            // if(this.cart.length === 0){
                //     this.cart.push(product)
            //     }else{
                // let item = this.cart.find(i => i.id === product.id)
            // if(!item){
                //     this.cart.push({...product, item})
            // }
                
            // }
            // console.log(product.price);
            if(!sub.cart){
            this.product.total.push(sub.price)
            sub.cart = true
            }else{
            sub.cart = false
            this.product.total.pop(sub.price)
            }

            // this.product.total.reduce((x, y) => {
            //     return x + y
            //     })
            return this.product.total
           },
            // getPrice(){
            //     this.hold = this.product.total.reduce((x, y) => {
            //         return  x + y
            //     }, this.product.price)
            //     // this.total = this.product.temp + this.product.price
            //     // this.product.total.reduce
            //     //  + this.product.price
            //     // console.log((this.total).toFixed(2));
            //     return this.hold
            // },
            add(){
                this.temp = true
                this.product.quantity++;
                this.hold = this.product.quantity * this.product.price
                console.log(this.product.quantity * this.product.price);
                // console.log(this.hold);
                // console.log(this.temp);
                //   this.hold = this.product.total.reduce((x, y) => {
                //       return  x + y
                // }, this.product.price)
                //       console.log(this.hold);
                this.price = this.hold
                console.log(this.price);
                // return this.hold
                
            },
            minus(){
                if(this.product.quantity > 1)
                this.temp = true
                this.product.quantity--;
            }
           
        },
        computed: {
              getPrice(){
                //   if(this.temp){
                //       return this.add()
                //   }
                this.hold = this.product.total.reduce((x, y) => {
                    return  x + y
                }, this.product.price)
                // this.total = this.product.temp + this.product.price
                // this.product.total.reduce
                //  + this.product.price
                // console.log((this.total).toFixed(2));
                return this.hold
            }
        },
        // created(){
        //     console.log(this.product.price);
        // }

    }
</script>
<style scoped>
    .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.8);
    z-index: 1;
    /* display: none; */
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    background: #fff;
    max-width: 500px;
    width: 500px;
    height: auto;
    /* overflow-y: scroll; */
    /* display: flex;
    flex-direction: column; */
    text-align: right;
}
.content > div.img-box{
    width: 100%;
    height: 15vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
h4#product-title{
    background: #fff;
    /* margin-top: -50px;
    z-index: 999;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);*/
     padding: 5px 0 0; 
     /* border-bottom: 1px solid #bbb; */
    text-align: left;
   margin: 20px 0;
    
}
span.subtitle{
    text-align: left;
    width: 100%;
    display: inline-block;
    margin: 0 0 20px;
    font-family: DejaVuSansMono-BoldOblique;
    font-size: .8rem;
    /* padding-left: 5px; */
    border-top: 1px dashed #ccc;
    padding-top: 20px
;
}
.padding{
    padding: 0 20px;
    display: flex;
    height: 65vh;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
}
.grid-box{
    /* height: 100%;
    max-height: 100%; */
}
 .grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-row-gap: 100px;
    grid-gap: 20px;
    width: 100%;
    padding: 0;
    }
div.btn{
     width: 100%;
     border-top: 1px dashed #ccc;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 20px 0;
}
button.cart{
    font-family: DejaVuSansMono-Bold;
    border: none;
    outline: none;
    border-radius: 50px;
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

}
div#modifier{
    /* flex: 25%; */
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
div#modifier span{
  width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #111;
    background: #ff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    /* flex: none!important; */
    cursor: pointer;
    /* transition: background .3s; */
    font-size: 18px;
}
/* div#modifier span:hover{
  background: #f1f1f1;
color: #2c2b2b;
} */
</style>