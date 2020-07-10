<template>
    <div id="gallery" class="gallery_container">
        <LightGallery
                :images="images"
                :index="index"
                :disable-scroll="true"
                @close="index = null"
        />
        <ul class="gallery_grid">
            <li class="thumb_element"
                v-for="(thumb, thumbIndex) in [
          'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=black-hanging-bridge-surrounded-by-green-forest-trees-775201.jpg&fm=jpg',
          'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          'https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          'https://images.pexels.com/photos/2929227/pexels-photo-2929227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ]"
                :key="thumbIndex"
                @click="index = thumbIndex"
            >
                <img class="thumb_img" :src="thumb">
            </li>
        </ul>
    </div>
</template>

<script>
  import {LightGallery} from 'vue-light-gallery';

  export default {
    components: {
      LightGallery,
    },
    data() {
      return {
        images: [
            {url:'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=black-hanging-bridge-surrounded-by-green-forest-trees-775201.jpg&fm=jpg'},
            {url:'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            {url:'https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            {url:'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            {url:'https://images.pexels.com/photos/2929227/pexels-photo-2929227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        ],
        index: null,
      };
    },
  };
</script>
<style scoped>

    .thumb_element {
        width: 22%;
        height: 300px;
        margin-bottom: 50px;
        transition: 0.5s;
        border-radius: 29px 29px 29px 29px;
        -moz-border-radius: 29px 29px 29px 29px;
        -webkit-border-radius: 29px 29px 29px 29px;
        border: 1px solid #000000;
    }

    .thumb_element:hover {
        -webkit-box-shadow: 0px 0px 31px 10px rgba(255,255,255,0.5);
        -moz-box-shadow: 0px 0px 31px 10px rgba(255,255,255,0.5);
        box-shadow: 0px 0px 31px 10px rgba(255,255,255,0.5);
    }

    .thumb_img {
        height: 300px;
        width: 100%;
        object-fit: cover;
        border-radius: 25px;

    }

    .gallery_grid {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    @media (max-width: 1023px) {
        .gallery_container {
            margin-top: 5%;
        }
        .thumb_element{
            width: 30%;
        }
    }

    @media (max-width: 768px) {
        .thumb_element{
            width: 40%;
        }
    }

    @media (max-width: 550px) {
        .thumb_element{
            width: 80%;
        }
    }
</style>