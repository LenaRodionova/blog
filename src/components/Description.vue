<template>
    <div class="description" :class="{ mirrored: isMirrored  }">
        <div class="description_content" v-scroll-reveal>
            <h2 class="description_title" :class="{ text_mirrored: isMirrored }">
                {{ title }}
            </h2>
            <p class="description_text" :class="{ text_mirrored: isMirrored }">
                {{text}}
            </p>
        </div>
        <img class="description_img" :src="img">
    </div>
</template>

<script>
  export default {
    name: "Description",
    props: ["title", "img", "text", "isMirrored"]
  }
</script>

<style scoped>
    .description {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 5% 10%;
    }

    .mirrored {
        flex-direction: row;
    }

    .description_img {
        max-width: 300px;
    }

    .description_content {
        max-width: 60%;
    }

    .description_title {
        text-align: left;
        margin-bottom: 5%;
    }

    .description_text {
        font-size: 22px;
        text-align: left;
    }

    .text_mirrored {
        text-align: right;
    }
</style>