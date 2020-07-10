<template>
    <div class="footer">
        <Menu :buttons="buttons"/>
    </div>
</template>

<script>
  import Menu from "./Menu";

  export default {
    name: "Footer",
    components: {Menu},
    data: function () {
      return {
        buttons: [{ text: "contact@afti.com", img: require('../assets/m_logo.png'), href: "mailto:example@storozhenko.dev"}, { text: "Instagram", img: require('../assets/i_logo.png'), href: "https://www.instagram.com/"}]
      }
    }
  }
</script>

<style scoped>
    .footer {
        margin-top: 100px;
        position: relative;
        margin-bottom: 10%;
    }
</style>