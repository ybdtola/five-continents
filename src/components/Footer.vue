<template>
  <footer>
      <div class="flex">
        <p>&copy; 2021 Five Continents</p>
        <p>Privacy Policy | Terms of Service</p>
        <p>Powered by <span style='font-family: DejaVuSansMono-BoldOblique;color:#B01F24
        '>Zercom</span></p>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  footer{
    font-family: DejaVuSansMono;
    font-size: 12px;
    width: 100%;
    height: 50px;
    background: #000;
    color: #fff;
  }
  div.flex{
    max-width: 1000px;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }
</style>