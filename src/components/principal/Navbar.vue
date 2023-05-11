<script setup>
    import { RouterLink } from 'vue-router'
</script>


<template >

<div class="bg-white ">

  <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
 

    <div class="fixed inset-0 z-40 flex">

      <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
      

       
        <div class="space-y-6 border-t border-gray-200 px-4 py-6">
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
          </div>
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Stores</a>
          </div>
        </div>

        <div class="space-y-6 border-t border-gray-200 px-4 py-6">
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
          </div>
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
          </div>
        </div>

        <div class="border-t border-gray-200 px-4 py-6">
          <a href="#" class="-m-2 flex items-center p-2">
            <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0">
            <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
            <span class="sr-only">, change currency</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <header class="relative bg-white">
   

    <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="border-b border-gray-200">
        <div class="flex h-16 items-center">
         

          <!-- Logo -->
          <div class="ml-4 flex lg:ml-0">
            <a href="#">
              <span class="sr-only">Your Company</span>
              <img class="h-16 w-auto" src="src/assets/img/logo.png" alt="">
            </a>
          </div>

          <!-- Flyout menus -->
          <div class="hidden lg:ml-8 lg:block lg:self-stretch">
            <div class="flex h-full space-x-8">
             
              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Home</a>
              
              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Populares</a>
            </div>
          </div>

          <div class="ml-auto flex items-center">
            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <RouterLink to="/login">
                    <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Iniciar Sesion</a>
                </RouterLink>
              
              <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>

              <RouterLink to="/register">
                <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Crear Cuenta</a>
              </RouterLink>
              
            </div>

            <div class="hidden lg:ml-8 lg:flex">
              <a href="#" class="flex items-center text-gray-700 hover:text-gray-800">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aKg7HfHwHLb4Rsa6-9QXJmVRlm8N8rhLXM2vl_vA8A&s" alt="" class="block h-auto w-5 flex-shrink-0">
                <span class="ml-3 block text-sm font-medium">COL</span>
            
              </a>
            </div>

            <!-- Search -->
            <RouterLink to="/search">
            <div class="flex lg:ml-6">
              <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Search</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </a>
            </div>
          </RouterLink>
            <RouterLink to="/shopping">
            <!-- Shoppin -->
            <div class="ml-4 flow-root lg:ml-6">
              <a href="#" class="group -m-2 flex items-center p-2">
                <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              <!--  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span> -->
                <span class="sr-only">items in cart, view bag</span>
              </a>
            </div>
        </RouterLink>


        <RouterLink to="/cart">
            <!-- Cart -->
            <div class="ml-4 flow-root lg:ml-6">
              <a href="#" class="group -m-2 flex items-center p-2">
                <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
        class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
              <!--  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span> -->
                <span class="sr-only">items in cart, view bag</span>
              </a>
            </div>
        </RouterLink>

        
          </div>
        </div>
      </div>
    </nav>
  </header>



</div>

</template>