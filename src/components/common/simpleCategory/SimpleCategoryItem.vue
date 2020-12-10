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
        width: 100px;
        height: 110px;
        margin: 3px 13px;

        font-size: 0.6rem;
        display: table-cell;
        text-align: center;
    }

    .s-category-rect img {
        width: 68px;
    }
</style>