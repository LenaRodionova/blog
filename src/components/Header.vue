<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <img class="header_logo" src="../assets/headerLogo.jpg">
    <Menu :buttons="buttons" :isHeader="true"/>
  </div>
</template>

<script>
  import Menu from "@/components/Menu";

  export default {
    name: "Header",
    components: {Menu},
    data: function () {
      return {
        title: 'ЕЛИЗАВЕТА АФТИ',
        buttons: ['ОБ АВТОРЕ', 'КНИГИ', 'ГАЛЕРЕЯ']
      }
    }
  }
</script>

<style scoped>

  .title {
    text-align: center;
    color: #e9e9e9;
    text-shadow: 2px 2px 3px black, 0 0 1em;
    position: absolute;
    right: 3%;
    top: 20%;
    font-size: 3.5em;
    max-width: 30vw;
  }

  .header {
    position: relative;
  }

  .header_logo {
    min-height: 90vh;
    width: 100vw;
  }

</style>
