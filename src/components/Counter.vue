<template>
<Navbar :count="count"/>
  
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    props: ['count'],
    components: {
        Navbar
    },
    data(){
        return{
            countData: 0
        }
    }
}
</script>

<style>

</style>