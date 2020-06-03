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
        buttons: ['ОБ АВТОРЕ', 'КНИГИ', 'ГАЛЕРЕЯ']
      }
    }
  }
</script>

<style scoped>
    .footer {
        margin-top: 100px;
        position: relative;
    }
</style>