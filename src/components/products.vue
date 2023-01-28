<template>
    <div>
    <dashboard />
    <body class="py-8 flex items-center justify-center">
        <div class="bg-white shadow xl:w-3/4 2xl:w-4/5 w-full px-6 sm:px-12 py-5 sm:py-10">
            <div class="mb-5 sm:mb-10 rounded-tl-lg rounded-tr-lg">
                <div class="sm:flex items-center justify-between">
                    <p tabindex="0"
                        class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                        My Products </p>
                    <div class="flex items-center mt-4 sm:mt-0">
                        <div aria-label="search bar" tabindex="0"
                            class="focus:outline-none focus:ring-2 focus:ring-gray-600 flex items-center pl-3 bg-white border rounded-md border-gray-200">
                            <input type="text"
                                v-model="searchText"
                                pattern="[1-9]{1}[0-9]{9}"
                                maxlength="10"
                                class=" py-2.5 pl-1 w-40 sm:w-64 focus:outline-none text-sm rounded-md text-gray-600 placeholder-gray-400"
                                 />
                        </div>
                        <button
                            @click="submitSearch"
                            class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex ml-3 whitespace-nowrap items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                            <p class="text-xs sm:text-sm font-medium leading-none text-white">Search Product</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="w-full overflow-x-auto">
                    <table class="w-full whitespace-nowrap">
                        <tbody class="w-full">
                            <tr
                                class="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white">
                                <td tabindex="0" class="focus:outline-none pl-4">Name</td>
                                <td tabindex="0" class="focus:outline-none pl-4">Type</td>
                                <td tabindex="0" class="focus:outline-none pl-4">Price</td>
                            </tr>
                            <tr v-for="data in tableData" :key="data.id"
                                class="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100">
                                <td tabindex="0" class="focus:outline-none pl-4">{{ data.title }}</td>
                                <td tabindex="0" class="focus:outline-none pl-10">{{ data.type }}</td>
                                <td class="pl-10">
                                    <span tabindex="0" class="focus:outline-none"> {{ data.price}} </span>
                                </td>
                                <td class="pl-10">
                                    <div class="flex items-center">
                                        <button @click="redirect(data)"
                                            class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-600">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref, watch } from '@vue/runtime-core';
import dashboard from "./dashboard.vue"
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    name: 'view',
    components: {
        dashboard
    },
    setup() {
        let tableData = ref();
        const router = useRouter()
        const store = useStore();
        const searchText = ref();
        onMounted(async () => {
            let param =  {
                token: store.getters.getToken
            }
            let res = await axios.post("http://localhost:5000/farmer/getproductsbyfarmer" , param);
            console.log(res.data)
            tableData.value = res.data;
        })
        const submitSearch = async () => {
            let param = {
                searchText: searchText.value
            }
            let res = await axios.post("http://localhost:5000/farmers/getproductsbyfarmer" , param);
             tableData.value = res.data;
        }
        watch(searchText, async() => {
            if (searchText.value === "") {
                let data = await axios.post("/api/getAtg");
                tableData.value = data.data;
            }
        })
        return { tableData, submitSearch, searchText };
    }
}
</script>