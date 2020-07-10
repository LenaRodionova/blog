<template>
    <div class="header">
        <div class="gradient-container">
            <div class="title">
                <p class="title-line">Елизавета</p>
                <p class="title-line">Афти</p>
            </div>


            <Menu :buttons="buttons" :is_header="true"/>
        </div>
    </div>
</template>

<script>
    import Menu from "@/components/Menu";

    export default {
        name: "Header",
        components: {Menu},
        data: function () {
            return {
                buttons: [
                    {text: 'ОБ АВТОРЕ', href: "#about"},
                    {text: 'КНИГИ', href: "#books"},
                    {text: 'ГАЛЕРЕЯ', href: "#gallery"}
                ]
            }
        }
    }
</script>

<style scoped>

    .title {
        text-align: left;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #FCFFEECA;
        text-shadow: 2px 2px 3px black, 0 0 1em;
        position: absolute;
        right: 10%;
        top: 26%;

    }

    .title-line {
        font-size: 4vw;
    }
    @media (max-width: 1023px) {
        .title {
            display: none;
        }
    }


    .header {
        background: url("../assets/headerLogo.jpg") no-repeat;
        background-size: cover;
        background-position-x: center;
        position: relative;
        height: 100vh;

    }

    .gradient-container {
        width: 100%;
        height: 100%;

        background: rgb(255, 255, 255);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, rgba(0, 0, 0, 1) 98%);
    }

</style>
