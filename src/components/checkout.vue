
<template>
  <main class="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse">
    
    <h1 class="sr-only">Checkout</h1>


    <!-- Checkout form -->
    <section aria-labelledby="payment-heading" class="flex-auto overflow-y-auto px-4 pt-4 pb-4 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24">
      <div class="max-w-lg mx-auto">
        <div class="hidden pt-4 pb-4 lg:flex">
          <a href="#">
            <span class="sr-only">Workflow</span>
          </a>
        </div>



        <div class="mt-6">
          <div class="grid grid-cols-12 gap-y-6 gap-x-4">
            <div class="col-span-full">
              <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
              <div class="mt-1">
                <input disabled v-model="email" type="email" id="email-address" name="email-address" autocomplete="email" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100" />
              </div>
            </div>

            <div class="col-span-full">
              <label for="name-on-card" class="block text-sm font-medium text-gray-700">Name on card</label>
              <div class="mt-1">
                <input v-model="name" type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="col-span-full">
              <label for="card-number" class="block text-sm font-medium text-gray-700">Card number</label>
              <div class="mt-1">
                <input type="text" id="card-number" name="card-number" autocomplete="cc-number" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="col-span-8 sm:col-span-9">
              <label for="expiration-date" class="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
              <div class="mt-1">
                <input  type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="col-span-4 sm:col-span-3">
              <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
              <div class="mt-1">
                <input type="text" name="cvc" id="cvc" autocomplete="csc" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="col-span-full">
              <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
              <div class="mt-1">
                <input v-model="address" type="text" id="address" name="address" autocomplete="street-address" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="col-span-full sm:col-span-4">
              <label for="city" class="block text-sm font-medium text-gray-700">City</label>
              <div class="mt-1">
                <input v-model="city" type="text" id="city" name="city" autocomplete="address-level2" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="col-span-full sm:col-span-4">
              <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
              <div class="mt-1">
                <input v-model="state" type="text" id="region" name="region" autocomplete="address-level1" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="col-span-full sm:col-span-4">
              <label for="postal-code" class="block text-sm font-medium text-gray-700">Postal code</label>
              <div class="mt-1">
                <input v-model="postal" type="text" id="postal-code" name="postal-code" autocomplete="postal-code" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>

          <div class="mt-6 flex space-x-2">
            <div class="flex items-center h-5">
              <input id="same-as-shipping" name="same-as-shipping" type="checkbox" checked="" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
            </div>
            <label for="same-as-shipping" class="text-sm font-medium text-gray-900">Billing address is the same as shipping address</label>
          </div>

          <button @click="submit" class="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pay ??? {{ total }}</button>

          
        <div class="relative mt-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-200" />
          </div>
          <div class="relative flex justify-center">
            <span class="px-4 bg-white text-sm font-medium text-gray-500"> or </span>
          </div>
        </div>

<div class="mt-6" v-if="!paid" id="paypal-button-container"></div>
  <div v-else id="confirmation">Order complete!</div>
      </div>
      </div>
    </section>
    <div v-if="sentSuccessfully" id="alert" class="transition duration-150 ease-in-out absolute bottom-0 mt-12 w-full bg-green-400 shadow mb-8">
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
                        <div onclick="closeAlert()" class="cursor-pointer xl:relative lg:relative absolute bottom-0 right-0 mr-2 mt-2 xl:mt-0 xl:mr-0 lg:mt-0 lg:mr-0 text-white">
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
  </main>
</template>

<script>
import { loadScript } from '@paypal/paypal-js';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useStore } from 'vuex';
import { reactive, toRefs, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  setup() {
    const store = useStore();
    const total = store.getters.getTotal
    const router = useRouter();
    const sentSuccessfully = ref(false)
    const errorMessage = ref(false);
    const state = reactive({
      email: store.getters.getEmail,
      name: "",
      address:"",
      city: "",
      state: "",
      postal: "",
      cart: store.getters.getProducts,
    })
    const submit = async () => {
      let res = await axios.post("http://localhost:5000/user/checkout", state)
      if (res.status === 200 ) {
        store.dispatch('emptyProducts');
        sentSuccessfully.value = true;
        setTimeout(() => { sentSuccessfully.value = false; }, 5000)
        router.push("/home")
      }
      else {
        errorMessage.value = true;
        setTimeout(() => { errorMessage.value = false; }, 5000)
      }
    }
    return {
      total,
      submit,
      ...toRefs(state),
      sentSuccessfully,
      errorMessage
    }
  },
  beforeCreate: function() {
    loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
      paypal
        .Buttons({
          createOrder: this.createOrder,
          onApprove: this.onApprove,
        })
        .render('#paypal-button-container');
    });
  },
  data() {
    return {
      paid: false,
    };
  },
  props: {
    cartTotal: {
      type: Number,
      default: 0.01,
    },
  },
  methods: {
    createOrder: function(data, actions) {
      console.log('Creating order...');
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: this.cartTotal,
            },
          },
        ],
      });
    },
    onApprove: function(data, actions) {
      console.log('Order approved...');
      return actions.order.capture().then(() => {
        this.paid = true;
        console.log('Order complete!');
      });
    },
  },
};
const CLIENT_ID = 'AYfA-yw2XnBwJLSIvUJ9nZlXIypD1SJ31T8kTbhMJcBVX9aVprryD4xDkisjazM-JlPB4dEQNZqUn6nw';
</script>