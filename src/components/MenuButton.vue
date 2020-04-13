<template>
  <div class="menu-button">
    {{ menuItem }}
    <div class="border"></div>
  </div>
</template>

<script>
  export default {
    name: "MenuButton",
    props: ["menuItem"]
  }
</script>

<style scoped>
.menu-button {
  margin-top: 2%;
  background-color: black;
  color: white;
  width: 10%;
  text-align: center;
  position: relative;
  font-weight: 100;
  font-size: 18px;
}

.border {
  position: absolute;
  top: 30px;
  left: 50%;
  right: auto;
  width: 0%;
  border-bottom: solid 1px white;
}

  .menu-button:hover > .border {
    width: 10%;
    left: 45%;
    transition: transform 1s ease;
    transform-origin: center center;
    transform: scaleX(10);
  }
</style>