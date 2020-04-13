<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <img class="header_logo" src="../assets/headerLogo.jpg">
    <Menu v-bind:key="buttons" v-bind:buttons="buttons" />
  </div>
</template>

<script>
  import Menu from "@/components/Menu";

  export default {
    name: "Header",
    components: {Menu},
    data: function () {
      return {
        title: 'Елизавета Афти',
        buttons: ['ОБ АВТОРЕ', 'КНИГИ', 'ГАЛЕРЕЯ']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .title {
    color: white;
    position: absolute;
    right: 5%;
    top: 20%;
    font-size: 5em;
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
