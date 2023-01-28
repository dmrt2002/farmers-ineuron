<template>
    <div>
      <div class="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center justify-between">
            <div>
            </div>
            <div class="text- font-extrabold text-green-700">Orders</div>
            <div>
            </div>
          </div>
        </div>
      </div>
    <sidebar />
      </div>
    </template>

    <script>
    import sidebar from './dashboard.vue';
    export default {
        components: {
            sidebar
        },
        setup() {
            
        },
    }
    </script>