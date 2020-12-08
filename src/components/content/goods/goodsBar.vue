<template>
    <div class="good-bar">
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
    .good-bar {
        display: flex;
        align-items: center;
        position: relative;

        height: 26px;
    }
</style>