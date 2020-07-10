<template>
    <div id="app">
        <Header/>
        <Descriptions/>
        <Gallery/>
        <Footer/>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Descriptions from "./components/Descriptions";
    import Gallery from "./components/Gallery";
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        components: {
            Footer,
            Gallery,
            Descriptions,
            Header
        }
    }
</script>

<style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");
    @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');

    #app {
        font-weight: 500;
        font-family: 'Poiret One', Avenir, Helvetica, Arial, sans-seri;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, p, a, img, ul, li {
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }

    body {
        background-color: black;
        color: white;
        max-width: 2000px;
        margin:    0 auto;
    }

    ul {
        list-style-type: none;
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        color: #FFFFFF;
        text-decoration: none;
        font-size: 25px;
    }
    h2,h3,h4,h5 {
        font-size: 40px;
    }
    p {
        font-size: 18px;
    }
    @media (max-width: 768px) {
        h2,h3,h4,h5 {
            font-size: 30px;
        }
    }



</style>
