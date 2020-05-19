<template>
    <div>
        <Description :key="description" v-for="description in descriptions"
                     :text="description.text" :img="description.img" :title="description.title"
                     :is-mirrored="description.isMirrored"
        ></Description>
    </div>
</template>

<script>
  import Description from "./Description";

  export default {
    name: "Descriptions",
    components: {Description},
    data: function () {
      return {
        descriptions: [
          {
            title: 'Об авторе',
            img: 'https://img-gorod.ru/27/940/2794067_detail.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            title: 'Книга1',
            img: 'https://img-gorod.ru/27/941/2794146_detail.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            isMirrored: true
          },
          {
            title: 'Книга2',
            img: 'https://img-gorod.ru/27/935/2793508_detail.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>