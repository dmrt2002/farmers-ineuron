<template>
  <div class="container bg-slate-100 h-full py-12 px-6">
    <div
      class="
        g-6
        flex
        h-full
        flex-wrap
        items-center
        justify-center
        text-gray-800
      "
    >
      <div class="xl:w-10/12">
        <div class="block rounded-lg bg-white shadow-lg">
          <div class="g-0 lg:flex lg:flex-wrap">
            <div class="px-4 md:px-0 lg:w-6/12">
              <div class="md:mx-6 md:p-12">
                <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="../assets/farmerChad.png"
                    alt="logo"
                  />

                  <h4 class="mt-1 mb-12 pb-1 text-2xl">
                    For
                    <span
                      class="
                        bg-gradient-to-r
                        from-emerald-500
                        to-lime-600
                        bg-clip-text
                        font-extrabold
                        text-transparent
                      "
                      >Farmers</span
                    >
                  </h4>
                </div>
                <form>
                  <p class="mb-4">Please login to your account</p>
                  <div class="mb-4">
                    <input
                      type="text"
                      v-model="femail"
                      class="
                        form-control
                        m-0
                        block
                        w-full
                        rounded
                        border border-solid border-gray-300
                        bg-white bg-clip-padding
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        transition
                        ease-in-out
                        focus:border-blue-600
                        focus:bg-white
                        focus:text-gray-700
                        focus:outline-none
                      "
                      id="exampleFormControlInput1"
                      placeholder="Username"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="password"
                      v-model="fpassword"
                      class="
                        form-control
                        m-0
                        block
                        w-full
                        rounded
                        border border-solid border-gray-300
                        bg-white bg-clip-padding
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        transition
                        ease-in-out
                        focus:border-blue-600
                        focus:bg-white
                        focus:text-gray-700
                        focus:outline-none
                      "
                      id="exampleFormControlInput1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="mb-12 pt-1 pb-1 text-center">
                    <button
                      class="
                        mb-3
                        inline-block
                        w-full
                        rounded
                        bg-gradient-to-r
                        from-green-500
                        to-green-700
                        px-6
                        py-2.5
                        text-xs
                        font-medium
                        uppercase
                        leading-tight
                        text-white
                        shadow-md
                        transition
                        duration-150
                        ease-in-out
                        hover:bg-blue-700 hover:shadow-lg
                        focus:shadow-lg focus:outline-none focus:ring-0
                        active:shadow-lg
                      "
                      type="button"
                      @click="redirect"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Log in
                    </button>
                    <a class="text-gray-500" href="#!">Forgot password?</a>
                  </div>
                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      class="
                        inline-block
                        rounded
                        border-2 border-green-600
                        px-6
                        py-2
                        text-xs
                        font-medium
                        uppercase
                        leading-tight
                        text-green-600
                        transition
                        duration-150
                        ease-in-out
                        hover:bg-black hover:bg-opacity-5
                        focus:outline-none focus:ring-0
                      "
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Verify
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- Right side -->
            <div class="px-4 md:px-0 lg:w-6/12">
              <div class="md:mx-6 md:p-12">
                <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="../assets/customerChad.png"
                    alt="logo"
                  />
                  <h4 class="mt-1 mb-12 pb-1 text-2xl">
                    For
                    <span
                      class="
                        bg-gradient-to-r
                        from-sky-400
                        to-blue-500
                        bg-clip-text
                        font-extrabold
                        text-transparent
                      "
                      >Customers</span
                    >
                  </h4>
                </div>
                <form>
                  <p class="mb-4">Please login to your account</p>
                  <div class="mb-4">
                    <input
                      type="text"
                      v-model="uemail"
                      class="
                        form-control
                        m-0
                        block
                        w-full
                        rounded
                        border border-solid border-gray-300
                        bg-white bg-clip-padding
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        transition
                        ease-in-out
                        focus:border-blue-600
                        focus:bg-white
                        focus:text-gray-700
                        focus:outline-none
                      "
                      id="exampleFormControlInput1"
                      placeholder="Username"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="password"
                      v-model="upassword"
                      class="
                        form-control
                        m-0
                        block
                        w-full
                        rounded
                        border border-solid border-gray-300
                        bg-white bg-clip-padding
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        transition
                        ease-in-out
                        focus:border-blue-600
                        focus:bg-white
                        focus:text-gray-700
                        focus:outline-none
                      "
                      id="exampleFormControlInput1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="mb-12 pt-1 pb-1 text-center">
                    <button
                    @click="redirectUser"
                      class="
                        mb-3
                        inline-block
                        w-full
                        rounded
                        bg-[conic-gradient(at_right,_var(--tw-gradient-stops))]
                        from-sky-400
                        to-blue-500
                        px-6
                        py-2.5
                        text-xs
                        font-medium
                        uppercase
                        leading-tight
                        text-white
                        shadow-md
                        transition
                        duration-150
                        ease-in-out
                        hover:bg-blue-700 hover:shadow-lg
                        focus:shadow-lg focus:outline-none focus:ring-0
                        active:shadow-lg
                      "
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Log in
                    </button>
                    <a class="text-gray-500" href="#!">Forgot password?</a>
                  </div>
                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">New User?</p>
                    <button
                      type="button"
                      @click="signup"
                      class="
                        inline-block
                        rounded
                        border-2 border-sky-600
                        px-6
                        py-2
                        text-xs
                        font-medium
                        uppercase
                        leading-tight
                        text-sky-600
                        transition
                        duration-150
                        ease-in-out
                        hover:bg-black hover:bg-opacity-5
                        focus:outline-none focus:ring-0
                      "
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  components: {

  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const signup = () => {
        router.push("/signup")
    }
    const fstate = reactive({
      femail: "",
      fpassword: "",
    });
    const ustate = reactive({
      uemail: "",
      upassword: "",
    });
    let redirect = async () => {
        try {
          let res = await axios.post("http://localhost:5000/farmer/login", fstate);
          if (res.status !== 401) {
            store.dispatch("storeToken", res.data.token);
            router.push("/admin");
          }
        } catch (e) {
        }
      }
      let redirectUser = async () => {
        try {
          let res = await axios.post("http://localhost:5000/user/login", ustate);
          if (res.status !== 401) {
            store.dispatch("storeToken", res.data.token);
            store.dispatch("storeEmail", ustate.uemail);
            store.dispatch('emptyProducts');
            router.push("/home");
          }
        } catch (e) {
            console.log(e)
        }
      }
    return {
      ...toRefs(fstate),
      ...toRefs(ustate),
      redirect,
      redirectUser,
      signup
    };
  },
};
</script>
