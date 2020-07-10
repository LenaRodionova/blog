<template>
    <div class="menu">
        <MenuButton :key="item" v-for="item in buttons" :is_header="is_header"
                    :menu-item="item"/>
    </div>
</template>

<script>

  import MenuButton from "@/components/MenuButton";

  export default {
    name: "menu",
    components: {MenuButton},
    props: ["buttons", "is_header"]
  }
</script>

<style scoped>

    .menu {
        display: flex;
        justify-content: space-evenly;
        position: absolute;
        align-items: center;
        bottom: 0;
        width: 100%;
        height: 10vh;
    }

</style>