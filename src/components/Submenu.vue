<template>
    <div @click="$emit('addToPrice', sub)" v-if="!sub.cart">
        <h5 style="text-align: left">{{sub.name}}<br><small style="font-style: italic; font-weight:100">&#8358;{{(sub.price.toFixed(2))}}</small></h5><a class="add">+</a>
    </div>
    <div @click="$emit('addToPrice', sub)" v-else>
        <h5 style="text-align: left">{{sub.name}}<br><small style="font-style: italic; font-weight:100">&#8358;{{(sub.price.toFixed(2))}}</small></h5><a class="inactive">-</a>
    </div>
</template>
<script>
    export default{
        props: ['sub', 'sum'],
        data(){
            return{
                // temp:0
            }
        }

    }
</script>
<style scoped>
    .grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-row-gap: 100px;
    grid-gap: 20px;
    width: 100%;
    padding: 0;
    }
    .grid div{
        border: 1px solid #ddd;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:relative;
        cursor: pointer;
        border-radius: 50px;
    }
    .grid a{
        background: #7CCD7C;
        color: #fff;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    .grid a.inactive{
        background: red
    }
</style>