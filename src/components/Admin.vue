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
      <div v-if="sentSuccessfully" id="alert" class="transition duration-150 ease-in-out absolute top-0 mt-12 w-full bg-green-400 shadow mb-8">
            <div class="container mx-auto xl:w-full lg:transition duration-150 ease-in-out w-11/12">
                <div class="w-full xl:flex lg:flex py-6 items-center">
                    <div class="xl:w-5/6 lg:w-5/6 w-full flex xl:flex-row lg:flex-row flex-col justify-center items-center xl:justify-start lg:justify-start">
                        <div class="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                            </svg>
                        </div>
                        <p class="mx-4 text-lg text-white text-center sm:text-left">Product Successfully added</p>
                    </div>
                    <div class="w-2/12 flex justify-end">
                        <div onclick="closeAlert()" class="cursor-pointer xl:relative lg:relative absolute top-0 right-0 mr-2 mt-2 xl:mt-0 xl:mr-0 lg:mt-0 lg:mr-0 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="errorMessage" id="alert" class="transition duration-150 ease-in-out absolute top-0 mt-12 w-full bg-red-400 shadow mb-8">
            <div class="container mx-auto xl:w-full lg:transition duration-150 ease-in-out w-11/12">
                <div class="w-full xl:flex lg:flex py-6 items-center">
                    <div class="xl:w-5/6 lg:w-5/6 w-full flex xl:flex-row lg:flex-row flex-col justify-center items-center xl:justify-start lg:justify-start">
                        <div class="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                            </svg>
                        </div>
                        <p class="mx-4 text-lg text-white text-center sm:text-left">Something Went Wrong</p>
                    </div>
                    <div class="w-2/12 flex justify-end">
                        <div onclick="closeAlert()" class="cursor-pointer xl:relative lg:relative absolute top-0 right-0 mr-2 mt-2 xl:mt-0 xl:mr-0 lg:mt-0 lg:mr-0 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
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
import { useRouter } from 'vue-router';
export default {
  components: {
    dashboard,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const myfile = ref("");
    const sentSuccessfully = ref(false);
    const errorMessage = ref(false);
    const fileUpdate = (event) => {
      let file = event.target.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        console.log(reader.result);
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
            image: myfile.value,
        }
         let res = await axios.post("http://localhost:5000/farmer/addproduct", param);
         if (res.status === 200) {
            sentSuccessfully.value = true
            setTimeout(() => { sentSuccessfully.value = false; }, 2000)
         }
         else {
            errorMessage.value = true
            setTimeout(() => { errorMessage.value = false; }, 2000)
         }
    }
    return { fileUpdate, ...toRefs(state), submit, sentSuccessfully, errorMessage}
  }
};
</script>