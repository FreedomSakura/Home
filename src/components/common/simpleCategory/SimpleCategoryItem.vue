<template>
    <a class="s-category-rect">
        <img :src="iItem.photoUrl">
        <div class="s-category-text">{{ iItem.kindName }}</div>
    </a>
</template>

<script>
export default {
    name: 'SimpleCategoryItem',
    props: {
        iItem: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>
    .s-category-rect {
        width: 48px;
        height: 60px;
        margin: 2px 10px;

        font-size: 7px;
    }

    .s-category-rect img {
        width: 40px;

        margin: 0 5px;
    }
</style>