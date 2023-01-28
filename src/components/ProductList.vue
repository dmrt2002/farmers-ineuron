<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto  lg:max-w-7xl lg:px-8">
      <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.title">
          <div class="relative">
            <div class="relative w-full h-72 rounded-lg overflow-hidden">
              <img :src="product.image.url" :alt="product.imageAlt" class="w-full h-full object-center object-cover" />
            </div>
            <div class="relative mt-4">
              <h3 class="text-sm font-medium text-gray-900">{{ product.title }}</h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.type }}</p>
            </div>
            <div class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
              <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
              <p class="relative text-lg font-semibold text-white">{{ product.price }}</p>
            </div>
          </div>
          <div class="mt-6">
            <a :href="product.href" class="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
              >Add to bag<span class="sr-only">, {{ product.title }}</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from '@vue/runtime-core';
export default {
name: 'ProductList',
  setup() {
    let products = ref();
    onMounted(async () => {
      let result = await axios.post("http://localhost:5000/user/getproducts")
      products.value = result.data
    })
    return {
      products,
    }
  },
}
</script>