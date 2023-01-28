<template>
<div>
  <div class="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between">
        <div>
          <button type="button" class="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
            <span class="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </span>
            <span class="text-sm">Archive</span>
          </button>
        </div>
        <div class="text- font-extrabold text-green-700">Orders</div>
        <div>
          <button type="button" class="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
            <span class="text-sm">This week</span>
            <span class="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <aside class="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
    <div class="flex flex-col justify-between h-full">
      <div class="flex-grow">
        <div class="px-4 py-6 text-center border-b">
          <h1 class="text-xl font-bold leading-none"><span class="text-yellow-700">Fresh </span>Mart</h1>
        </div>
        <div class="p-4">
          <ul class="space-y-1">
            <li>
              <a href="javascript:void(0)" class="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                </svg>Profile
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
                </svg>Products
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                </svg>Orders
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div class="p-4">
        <button type="button" class="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="" viewBox="0 0 16 16">
            <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </button> <span class="font-bold text-sm ml-2">Logout</span>
      </div>
    </div>
  </aside>

  <main class="ml-60 pt-16 max-h-screen overflow-auto">
  <div class="flex items-center justify-center bg-gray-50 px-8 py-16">
    <div class="mx-8 lg:w-11/12 w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap border-gray-100 border rounded-lg">
        <thead class="bg-gray-100">
          <tr class="">
            <th class="text-left py-5 pl-4 rounded-tl-lg">
              <p class="text-sm font-medium leading-none text-gray-900">Date</p>
            </th>
            <th class="text-left py-5">
              <p class="text-sm font-medium leading-none text-gray-900">
                Customer name
              </p>
            </th>
            <th class="text-left py-5 pl-5 border-l border-gray-200">
              <p class="text-sm font-medium leading-none text-gray-900">
                Order #
              </p>
            </th>

            <th class="text-left py-5 pr-16">
              <div class="flex items-center">
                <p
                  class="text-sm font-medium pr-0.5 leading-none text-gray-900"
                >
                  Quantity
                </p>
                
              </div>
            </th>
            <th class="text-left py-5 pr-16">
              <div class="flex items-center">
                <p
                  class="text-sm font-medium pr-0.5 leading-none text-gray-900"
                >
                  Total cost
                </p>
                
              </div>
            </th>
            <th class="text-left py-5">
              <p class="text-sm font-medium leading-none text-gray-900">
                Unit Cost
              </p>
            </th>
            <th class="flex items-end justify-end rounded-tr-lg">

            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="pb-5 pt-8 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="pb-5 pt-8 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 pb-5 pt-8">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="pb-5 pt-8 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="pb-5 pt-8 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="pb-5 pt-8 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="pb-5 pt-8"></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="py-3 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-3 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-3">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-3 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-3"></td>
          </tr>
          <tr>
            <td class="py-2 pr-20 pl-4"></td>
            <td class="py-2 pr-12"></td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-2"></td>
            <td class="py-2 pr-16"></td>
            <td class="py-2 pr-16"></td>
            <td class="py-2 pr-10"></td>
            <td class="py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  </main>
  </div>
</template>