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
        height: 27px;

        margin: 10px auto;

        display: flex;
        justify-content: center;
        align-items: center;
    } 
    .search-boder {
        width: 100%;
        height: 24px;

        display: flex;
        justify-content: center;
        align-items: center;        

        border: 1.5px solid #d81e06;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .search-core {
        width: 90%;
        height: 15px;

        margin-left: -10px;

        display: flex;
        align-items: center;      
    }

    .search-core img {
        width: 15px;
        height: 15px;

        margin-right: 3px;
    }
    .search-core-input {
        width: 95%;
        height: 13px;

        font-size: 13px;

        border: 0px;
        outline: none;
    }
    .search-btn {
        width: 37px;
        height: 23.3px;
        line-height: 23.3px;

        color: white;
        text-align: center;

        font-size: 12px;

        background-color: red;

        position: absolute;
        right: 10px;
        top: 1.3px;

        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
</style>