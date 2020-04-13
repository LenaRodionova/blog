<template>
  <div class="h">
    <MenuButton v-bind:key="item" v-for="(item) in buttons"
                v-bind:menu-item="item" />
  </div>
</template>

<script>

  import MenuButton from "@/components/MenuButton";

  export default {
    name: "menu",
    components: {MenuButton},
    props: ["buttons"]
  }
</script>

<style scoped>

  .h {
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    background-color: black;
    width: 100vw;
    height: 10vh;
  }

</style>