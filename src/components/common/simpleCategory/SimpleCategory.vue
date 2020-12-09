<template>
    <div class="simple-category">
        <SimpleCategoryItem v-for="(item, index) in sCategory" :key="index" :iItem="item"></SimpleCategoryItem>
    </div>
</template>

<script>
import SimpleCategoryItem from './SimpleCategoryItem'

export default {
    name: 'SimpleCategory',
    components: {
        SimpleCategoryItem
    },
    props: {
        sCategory: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped>
    .simple-category {
        width: 96%;
        margin: 10px auto;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>