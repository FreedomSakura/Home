<template>
    <div id="search">
        <div class="search-boder">
            <div class="search-core">
                <img src="~assets/img/search/search.svg">
                <input type="text" class="search-core-input" placeholder="搜索:商品关键字">
            </div>
            <div class="search-btn">搜索</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search'

}
</script>

<style scoped>
    #search {
        width: 94%;
        height: 80px;

        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
    } 
    .search-boder {
        width: 100%;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;        

        border: 2px solid #d81e06;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    .search-core {
        width: 90%;
        height: 30px;

        margin-left: -10px;

        display: flex;
        align-items: center;      
    }

    .search-core img {
        width: 25px;
        height: 25px;

        margin-right: 3px;
    }
    .search-core-input {
        width: 95%;
        height: 25px;

        font-size: 0.6rem;

        border: 0px;
        outline: none;
    }
    .search-btn {
        height: 50px;
        line-height: 50px;

        padding: 0px 16px;

        color: white;
        text-align: center;

        font-size: 0.6rem;

        background-color: red;

        position: absolute;
        right: 18px;

        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }
</style>