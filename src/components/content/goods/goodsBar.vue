<template>
    <div id="good-bar">
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    name: 'GoodsBar',
}
</script>

<style scoped>
    #good-bar {
        display: flex;
        position: relative;

        margin: 10px 0;
    }
</style>