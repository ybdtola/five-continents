<template>
   <div id="nav">
    <div id='nav-center'>
      <div id='logo'>
        <h4>FIVE CONTINENTS</h4>
      </div>
      <div id='router-links'>
      </div>
      <div id='account'>
        <router-link to="/">Home</router-link>
        <router-link to="/cart">Cart🛒{{count}}</router-link>
        <!-- <a>🛒Cart({{count}})</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
    props: ['count'],
  data(){
    return{
      countCart : 0
    }
  },
  components:{
    Counter
  },
  methods: {
      getMenu(){
            const records = JSON.parse(localStorage.getItem('menu'));
            this.countCart = records.length;
        }
  },
   created(){
        
        this.getMenu()
    }
}
</script>

<style>
#nav {
  background: #000;
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
}
#nav-center{
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 1.5rem;

}
div#logo h4{
  font-family: DejaVuSansMono-Bold;
  color: #f4b05d;
  letter-spacing: .2em;
  line-height: 2;
}
#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding-left: 2%;
  letter-spacing: .2em;
    line-height: 2;
}

#nav a.router-link-exact-active {
  color: #f4b05d;
}
div#account{
  font-weight: bold;
  display: flex;
  align-content: center;
  justify-content: flex-end;
   letter-spacing: .2em;
    line-height: 2;
    flex: 1;
    color: #fff;
}
div#account a{
  font-weight: bold;
  color: #fff;
  letter-spacing: .2em;
  line-height: 2;
  cursor: pointer;
}
div#account a:hover{
  color: #f4b05d;
}
</style>