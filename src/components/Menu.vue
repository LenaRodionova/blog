<template>
    <div class="menu">
        <MenuButton :key="item" v-for="item in buttons"
                    :menu-item="item"/>
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

    .menu {
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 10vh;
    }

</style>