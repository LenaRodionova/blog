<template>
    <div class="gallery">
        <vue-glide :per-view="1" type="carousel" :bullet="true">
            <vue-glide-slide class="slide"
                    :key="image" v-for="image in imgs"
            >
                <img :src="image">
            </vue-glide-slide>
            <template slot="control">
                <button data-glide-dir="<">prev</button>
                <button data-glide-dir=">">next</button>
            </template>
        </vue-glide>
    </div>
</template>

<script>
  import {Glide, GlideSlide} from 'vue-glide-js'

  export default {
    components: {
      [Glide.name]: Glide,
      [GlideSlide.name]: GlideSlide
    },
    data() {
      return {
        imgs: [
          'https://lh3.googleusercontent.com/proxy/l43P2-bsDw8uJpeXpAMq7eiKYu9-PIsXf5gDT1fQbZYjuOwDYSvc_Qbf2zqP6D65lguYUIKyVAvHlDebctDTnJ8iGeeUhX5CmR8cMjUGtMmpwTyoQP4z102hlmnQcs7Nay7dbP9K',
          'https://pristor.ru/wp-content/uploads/2018/04/%D0%AF-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE-%D1%85%D0%BE%D1%87%D1%83-%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D0%BA-%D1%82%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%81-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8F%D0%BC%D0%B8-%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%BD%D1%8B%D0%B5-13.jpg',
          'https://anekdotsuper.ru/assets/image/fon/dets-1.jpg',
          'https://lh3.googleusercontent.com/proxy/jsztAx9tLYUPnYoe3rBP-iMkZO1aIy-s1_1gBMpGr3O0v8DBQQX-gte5ZDIhjsW3t7HOdwDAiBtnJvoKtekKfr_UhbNeXJ12QGaaUyTxkLSwzZypuEHwAg3yjtObxsVJvxkNqnM3prIR',
          'https://i.pinimg.com/originals/4b/1d/11/4b1d11587776cdda3423684ff74f2660.jpg', 'https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg', 'https://avatars.mds.yandex.net/get-pdb/1649258/d7747967-9aa8-410a-9dbd-8fbbf199e8e5/s600'],  // Img Url , string or Array of string
      }
    }
  }
</script>

<style scoped>

    .slide {
        /*margin-left: 40%;*/
    }
    img {
        display: block;
        margin: 0 auto;
        min-width: 300px;
        max-width: 500px;
    }
</style>
