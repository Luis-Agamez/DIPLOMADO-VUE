
<script setup>
    import Footer from '../components/principal/Footer.vue'
</script>

<template>

<div class="min-h-full">
 

  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">BOOKS IN OFFERS</h1>
    </div>
  </header>

  <div class="group relative">  <div class="relative inline-block text-left">
  <div class=" ml-10 mt-2">
    <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
      Categories
      <svg class=" -mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <div class="absolute z-10 mt-2  ml-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="1">
    <div class="py-1" role="none">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Adventure</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Horror</a>
    </div>
 
  </div>
</div> </div>

  
  <main>

    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="bg-gray-50">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-6 lg:gap-x-6 lg:space-y-0">
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://images.cdn1.buscalibre.com/fit-in/180x180/d7/b7/d7b7d94eeab262f928b6f725702352ac.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              Harry Potter
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Piedra filosofal </p>
        </div>


        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://images.cdn3.buscalibre.com/fit-in/180x180/04/8d/048d00569a406b110d443f21b10d5b97.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              Harry Potter
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">La camara Secreta</p>
        </div>




        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://images.cdn1.buscalibre.com/fit-in/180x180/e7/54/e7542c25d29bc9c6795ec85ab10b4011.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              Harry Potter
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Prisionero de Azcaban</p>
        </div>



        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="	https://images.cdn2.buscalibre.com/fit-in/180x180/69/a4/69a4dd6da2e71e711a978e1fffb06d33.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              El Señor de los Anillos
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">La Comunidad del Anillo</p>
        </div>




        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://images.cdn2.buscalibre.com/fit-in/180x180/f9/a5/f9a5ca5f6a3e21154ad10f84c115b2f3.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              El Señor de los Anillos
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">El retorno del rey</p>
        </div>





        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="	https://images.cdn3.buscalibre.com/fit-in/180x180/5e/0b/5e0bfa88bbdc8a4b386aa8913b23fe0f.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              El Señor de los Anillos
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Las 2 Torres</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  </main>

 
</div>

<Footer></Footer>


</template>