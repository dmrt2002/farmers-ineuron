<template>
    <div>
    <dashboard />
      <div class="bg-gray-200 min-h-screen py-10">
        <div class="container mx-auto bg-white shadow rounded">
          <div class="xl:w-full border-b border-gray-300 py-5">
            <div class="flex items-center w-11/12 mx-auto">
              <p class="text-lg text-blue-600 font-bold">Add Product</p>
              <div class="ml-2 cursor-pointer text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path
                    class="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-11/12 mx-auto">
            <div class="container mx-auto">
              <div class="my-8 mx-auto xl:w-full xl:mx-0">
                <div class="xl:flex lg:flex md:flex flex-wrap justify-between">
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="Product Name"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >Product  Name</label
                    >
                    <input
                    v-model="title"
                      type="text"
                      name="product name"
                      required
                      id="product name"
                      class="
                        border border-gray-300
                        pl-3
                        py-3
                        shadow-sm
                        rounded
                        text-sm
                        focus:outline-none
                        bg-transparent
                        focus:border-indigo-700
                        text-gray-800
                      "
                      placeholder="Enter the product name..."
                    />
                  </div>
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="Product Type"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >Product  Type</label
                    >
                    <input
                    v-model="type"
                      type="text"
                      id="Product Type"
                      name="Product Type"
                      required
                      class="
                        border border-gray-300
                        pl-3
                        py-3
                        shadow-sm
                        rounded
                        text-sm
                        focus:outline-none
                        bg-transparent
                        focus:border-indigo-700
                        text-gray-800
                      "
                      placeholder="Enter the product type..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- PASTE -->
          <div class="w-11/12 mx-auto">
            <div class="container mx-auto">
              <div class="mx-auto xl:w-full xl:mx-0">
                <div class="xl:flex lg:flex md:flex flex-wrap justify-between">
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="Product Price"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >Product  Price</label
                    >
                    <input
                      v-model="price"
                      type="number"
                      id="Amount"
                      name="Amount"
                      required
                      class="
                        border border-gray-300
                        pl-3
                        py-3
                        shadow-sm
                        rounded
                        text-sm
                        focus:outline-none
                        bg-transparent
                        focus:border-indigo-700
                        text-gray-800
                      "
                      placeholder="Enter the product price..."
                    />
                  </div>
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="Product Type"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >Product  Image</label
                    >
                    <label
                      class="
                        w-64
                        flex flex-col
                        items-center
                        px-4
                        py-6
                        bg-white
                        text-blue
                        rounded-lg
                        shadow-lg
                        tracking-wide
                        uppercase
                        border border-blue
                        cursor-pointer
                        hover:bg-blue hover:text-indigo-700
                      "
                    >
                      <svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                        />
                      </svg>
                      <span class="mt-2 text-base leading-normal"
                        >Select a file</span
                      >
                      <input @change="fileUpdate"  type="file" class="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              w-full
              py-4
              sm:px-12
              px-4
              bg-gray-100
              mt-6
              flex
              justify-center
              rounded-bl rounded-br
            "
          >
            <button
            @click="submit"
              class="
                bg-indigo-700
                transition
                duration-150
                ease-in-out
                hover:bg-indigo-600
                rounded
                text-white
                px-8
                py-2
                text-sm
                focus:outline-none
              "
            >
              Save
            </button>
          </div>
        </div>
      </div>
      </div>
    </template>

<script>
import dashboard from "./dashboard.vue";
import { useStore } from "vuex";
import { reactive, ref, toRefs } from '@vue/reactivity';
import axios from "axios";
export default {
  components: {
    dashboard,
  },
  setup() {
    const store = useStore();
    const myfile = ref("")
    const fileUpdate = (event) => {
      let file = event.target.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        myfile.value = reader.result
    }
}
    const state = reactive({
      title: "",
      type: "",
      price: 0,
      token: store.getters.getToken
    });
    const submit = async () => {
        let param = {
            title: state.title,
            type: state.type,
            price: state.price,
            token: state.token,
            image: myfile.value
        }
        await axios.post("http://localhost:5000/farmer/addproduct", param)
    }
    return { fileUpdate, ...toRefs(state), submit}
  }
};
</script>