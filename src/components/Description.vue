<template>
    <div :id="id" class="description" :class="{ mirrored: isMirrored  }" v-scroll-reveal>
        <div class="description_content">
            <h2 class="description_title" :class="{ text_mirrored: isMirrored }">
                {{ title }}
            </h2>
            <div class="description_img_container mobile">
                <img class="description_img" :src="img">
            </div>
            <p class="description_text" :class="{ text_mirrored: isMirrored }">
                {{text}}
            </p>
        </div>
        <div class="description_img_container desktop">
            <img class="description_img" :src="img">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Description",
        props: ["id", "title", "img", "text", "isMirrored"]
    }
</script>

<style scoped>
    .description {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 5% 10%;
    }

    .mobile {
        display: none;
    }

    .desktop {
        display: block;
    }

    .mirrored {
        flex-direction: row;
    }

    .description_img_container {
        margin-top: 7%;
        width: 30%;
    }

    .description_img {
        width: 100%;
        height: auto;
    }

    .description_content {
        max-width: 60%;
    }

    .description_title {
        text-align: left;
        margin-bottom: 5%;
    }

    .description_text {
        text-align: justify;
    }

    .text_mirrored {
        text-align: justify;
    }

    @media (max-width: 1023px) {
        .mobile {
            display: block;
        }

        .description_content {
            max-width: 100%;
        }

        .desktop {
            display: none;
        }

        .text_mirrored {
            text-align: left;
        }

        .mirrored {
            flex-direction: row-reverse;
        }

        .description_title {
            text-align: center;
        }

        .description_img_container {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 5%;
            width: 100%;
        }
    }
</style>