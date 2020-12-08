<template>
    <div id="search">
        <div class="search-boder">
            <div class="search-core">
                <img src="~assets/img/search/search.svg">
                <input type="text" class="search-core-input" placeholder="搜索:商品关键字">
            </div>
            <div class="search-text">搜索</div>
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
        height: 27px;

        margin: 10px auto;

        display: flex;
        justify-content: center;
        align-items: center;
    } 
    .search-boder {
        width: 100%;
        height: 23px;

        display: flex;
        justify-content: center;
        align-items: center;        

        border: 1px solid #d81e06;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .search-core {
        width: 90%;
        height: 15px;

        margin-left: 8px;

        display: flex;
        align-items: center;      
    }

    .search-core img {
        width: 7%;
        height: 15px;
    }
    .search-core-input {
        width: 95%;
        height: 15px;

        border:0px;
        outline:none;
    }
    .search-text {
        width: 10%;
        height: 22px;
        line-height: 22px;

        color: white;
        text-align: center;

        font-size: 12px;
        

        background-color: red;

        position: relative;
        right: 0;

        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
</style>