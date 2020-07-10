<template>
    <a :href="menuItem.href" class="menu-button " :class="{ 'menu-button-header-width' : is_header, 'menu-button-underline': is_header }">
        <img class="menu-button-img " :src="menuItem.img" alt="">
        {{ menuItem.text }}
        <div class="border"></div>
    </a>
</template>

<script>
    export default {
        name: "MenuButton",
        props: ["menuItem", "is_header"]
    }
</script>

<style scoped>

    .menu-button {
        margin-top: 2%;
        width: 30%;
        text-align: center;
        position: relative;
        font-weight: 100;
    }

    .menu-button-header-width {
        width: 10%;
    }

    .border {
        position: absolute;
        top: 30px;
        left: 50%;
        right: auto;
        width: 0;
        border-bottom: solid 1px white;
    }

    @media (max-width: 1023px) {
        .border {
            display: none;
        }
    }

    .menu-button-underline:hover > .border {
        width: 10%;
        left: 45%;
        transition: transform 1s ease;
        transform-origin: center center;
        transform: scaleX(10);
    }

    .menu-button:hover > .menu-button-img {
        transition: transform 1s ease;
        transform-origin: center center;
        transform: scale(1.2);
        opacity: 1;
    }

    .menu-button-img {
        height: 18px;
        width: auto;
        opacity: 0.5;
    }

</style>