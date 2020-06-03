<template>
    <div>
        <LightGallery
                :images="images"
                :index="index"
                :disable-scroll="true"
                @close="index = null"
        />
        <ul class="gallery_grid">
            <li class="thumb_element"
                v-for="(thumb, thumbIndex) in [
          'https://i.pinimg.com/originals/4b/1d/11/4b1d11587776cdda3423684ff74f2660.jpg',
          'https://anekdotsuper.ru/assets/image/fon/dets-1.jpg',
          'https://anekdotsuper.ru/assets/image/fon/dets-1.jpg',
          'https://anekdotsuper.ru/assets/image/fon/dets-1.jpg',
          'https://pristor.ru/wp-content/uploads/2018/04/%D0%AF-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE-%D1%85%D0%BE%D1%87%D1%83-%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D0%BA-%D1%82%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%81-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8F%D0%BC%D0%B8-%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%BD%D1%8B%D0%B5-13.jpg'
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
          { url: 'https://i.pinimg.com/originals/4b/1d/11/4b1d11587776cdda3423684ff74f2660.jpg'},
          {url: 'https://anekdotsuper.ru/assets/image/fon/dets-1.jpg'},
          {

            url: 'https://pristor.ru/wp-content/uploads/2018/04/%D0%AF-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE-%D1%85%D0%BE%D1%87%D1%83-%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D0%BA-%D1%82%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%81-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8F%D0%BC%D0%B8-%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%BD%D1%8B%D0%B5-13.jpg'
          },
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
</style>