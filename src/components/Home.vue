<template>
    <div>
    <Navbar />
    <ProductList />
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import ProductList from './ProductList.vue'
export default {
    components: {
        Navbar,
        ProductList
    },
    setup() {
        
    },
}
</script>

<style scoped>

</style>