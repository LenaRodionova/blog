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
    @import url("~normalize.css");

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, p, a {
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }

    body {
        background-color: black;
        color: white;
    }

    ul {
        list-style-type: none;
    }

</style>
