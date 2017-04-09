<template>
    <div>
        <div>
            <el-app-stock v-for="(stock, key) in stocks" :stock="stock"></el-app-stock>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>