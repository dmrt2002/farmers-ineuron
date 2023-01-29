<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <header class="relative">
      <nav aria-label="Top">
        <!-- Top navigation -->
        <div class="bg-gray-900">
          <div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-center sm:px-6 lg:px-8">
            <p class="flex-1 text-center text-sm font-medium text-white lg:flex-none">
              Get free delivery on orders over ₹100
            </p>
          </div>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200">
              <div class="h-16 flex items-center justify-between">
                <div class="w-full sm:max-w-xs">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative">
                    <div class="
                        pointer-events-none
                        absolute
                        inset-y-0
                        left-0
                        pl-3
                        flex
                        items-center
                      ">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input id="search" name="search"
                    v-model="searchProduct"
                    class="
                        block
                        w-full
                        bg-white
                        border border-gray-300
                        rounded-md
                        py-2
                        pl-10
                        pr-3
                        text-sm
                        placeholder-gray-500
                        focus:outline-none
                        focus:text-gray-900
                        focus:placeholder-gray-400
                        focus:ring-1
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        sm:text-sm
                      " placeholder="Search" type="search" />
                  </div>
                </div>
                <div class="flex-1 flex items-center justify-end">
                  <div class="flex items-center lg:ml-8">
                    <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                    <div class="flow-root">
                      <div @click="cart = true" class="cursor-pointer group -m-2 p-2 flex items-center">
                        <!-- Start -->
                        <div>
                          <TransitionRoot as="template" :show="cart">
                            <Dialog as="div" class="relative z-10">
                              <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                                enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                              </TransitionChild>

                              <div class="fixed inset-0 overflow-hidden">
                                <div class="absolute inset-0 overflow-hidden">
                                  <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                    <TransitionChild as="template"
                                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                                      enter-from="translate-x-full" enter-to="translate-x-0"
                                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                                      leave-from="translate-x-0" leave-to="translate-x-full">
                                      <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                          <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div class="flex items-start justify-between">
                                              <DialogTitle class="text-lg font-medium text-gray-900">Shopping cart
                                              </DialogTitle>
                                              <div class="ml-3 flex h-7 items-center">
                                                <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                  @click="cart = false">
                                                  <span class="sr-only">Close panel</span>
                                                  <i class="fa-solid fa-xmark"></i>
                                                </button>
                                              </div>
                                            </div>

                                            <div class="mt-8">
                                              <div class="flow-root">
                                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                  <li v-for="cartproduct in cartproducts" :key="cartproduct.id"
                                                    class="flex py-6">
                                                    <div
                                                      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                      <img :src="cartproduct.image"
                                                        class="h-full w-full object-cover object-center" />
                                                    </div>

                                                    <div class="ml-4 flex flex-1 flex-col">
                                                      <div>
                                                        <div
                                                          class="flex justify-between text-base font-medium text-gray-900">
                                                          <h3>
                                                            <a>{{
                                                              cartproduct.title
                                                            }}</a>
                                                          </h3>
                                                          <p class="ml-4">
                                                            {{ cartproduct.price }}
                                                          </p>
                                                        </div>
                                                      </div>
                                                      <div class="flex flex-1 items-end justify-between text-sm">
                                                        <p class="text-gray-500">
                                                          Qty
                                                          1
                                                        </p>

                                                        <div class="flex">
                                                          <button @click="removeCart(cartproduct.title)" type="button"
                                                            class="font-medium text-indigo-600 hover:text-indigo-500">
                                                            Remove
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>

                                          <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                              <p>Subtotal</p>
                                              <p>₹ {{ totalCart }}</p>
                                            </div>
                                            <p class="mt-0.5 text-sm text-gray-500">
                                              Shipping and taxes calculated at
                                              checkout.
                                            </p>
                                            <div class="mt-6">
                                              <a type="button" @click="redirect"
                                                class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                            </div>
                                            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                              <p>
                                                or
                                                <button type="button"
                                                  class="font-medium text-indigo-600 hover:text-indigo-500"
                                                  @click="cart = false">
                                                  Continue Shopping
                                                  <span aria-hidden="true">
                                                    &rarr;</span>
                                                </button>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </DialogPanel>
                                    </TransitionChild>
                                  </div>
                                </div>
                              </div>
                            </Dialog>
                          </TransitionRoot>
                        </div>

                        <!-- End  -->
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{{
                          cartSize
                        }}</span>
                        <span class="sr-only">items in cart, view bag</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
  <div class="bg-white pb-4">
    <div class="max-w-2xl mx-auto  lg:max-w-7xl lg:px-8">
      <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.title">
          <div class="relative">
            <div class="relative w-full h-72 rounded-lg overflow-hidden">
              <img :src="product.image" :alt="product.imageAlt" class="w-full h-full object-center object-cover" />
            </div>
            <div class="relative mt-4">
              <h3 class="text-sm font-medium text-gray-900">{{ product.title }}</h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.type }}</p>
            </div>
            <div class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
              <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
              <p class="relative text-lg font-semibold text-white"> ₹ {{ product.price }}</p>
            </div>
          </div>
          <div class="mt-6">
            <a type="button" @click="addProduct(product)" :href="product.href"
              class="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200 cursor-pointer"
              :disabled="product.done"> {{ product.done ? 'Added' : 'Add To Bag' }}<span class="sr-only">, {{
                product.title
              }}</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {
  Dialog,
  TransitionChild,
  TransitionRoot,
  DialogOverlay,
  Popover,
  DialogPanel,
  DialogTitle,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/vue";
export default {
  name: 'ProductList',
  components: {
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
  },
  setup() {
    const open = ref(false);
    const cart = ref(false);
    const searchProduct = ref("")
    const router = useRouter();
    const totalCart = ref(null)
    const store = useStore();
    const cartSize = ref(store.getters.getProducts.length)
    watch(cart, async () => {
      let result = await axios.post("http://localhost:5000/user/getproducts");
      for (let i = 0; i < result.data.length; i++) {
        if (store.getters.getProducts.length > 0) {
          for (let j = 0; j < store.getters.getProducts.length; j++) {
            if (result.data[i].title === store.getters.getProducts[j].title) {
              result.data[i].done = true
            }
          }
        }
        else {
          result.data[i].done = false
        }
      }
      products.value = result.data
      cartSize.value = store.getters.getProducts.length;
      totalCart.value = store.getters.getTotal
      cartproducts.value = store.getters.getProducts
    })
    const redirect = () => {
      router.push("/checkout")
    }
    const removeCart = (title) => {
      let newProducts = store.getters.getProducts.filter((obj) => {
        return obj.title !== title
      })
      store.dispatch("updateProducts", newProducts)
      cart.value = !cart.value
    }
    let products = ref();
    let cartproducts = ref();
    cartproducts.value = store.getters.getProducts
    const addProduct = (product) => {
      for (let i = 0; i < products.value.length; i++) {
        if (products.value[i].title === product.title) {
          products.value[i].done = true
          store.dispatch("storeProduct", product)
          cart.value = !cart.value
        }
      }
    }
    onMounted(async () => {
      let result = await axios.post("http://localhost:5000/user/getproducts");
      for (let i = 0; i < result.data.length; i++) {
        if (store.getters.getProducts.length > 0) {
          for (let j = 0; j < store.getters.getProducts.length; j++) {
            console.log(result.data[i].title, store.getters.getProducts[j].title)
            if (result.data[i].title === store.getters.getProducts[j].title) {
              result.data[i].done = true
            }
          }
        }
        else {
          result.data[i].done = false
        }
      }
      products.value = result.data
    })

    watch(searchProduct, async () => {
      if (searchProduct.value !== "") {
      let result = products.value.filter((obj) => {
        return obj.title.toLowerCase().startsWith(searchProduct.value.toLowerCase())
      })
      products.value = result
    } else {
      let result = await axios.post("http://localhost:5000/user/getproducts");
      for (let i = 0; i < result.data.length; i++) {
        if (store.getters.getProducts.length > 0) {
          for (let j = 0; j < store.getters.getProducts.length; j++) {
            console.log(result.data[i].title, store.getters.getProducts[j].title)
            if (result.data[i].title === store.getters.getProducts[j].title) {
              result.data[i].done = true
            }
          }
        }
        else {
          result.data[i].done = false
        }
      }
      products.value = result.data 
    }
    })
    return {
      products,
      addProduct,
      open,
      cart,
      products,
      cartSize,
      totalCart,
      redirect,
      removeCart,
      cartproducts,
      searchProduct
    }
  },
}
</script>