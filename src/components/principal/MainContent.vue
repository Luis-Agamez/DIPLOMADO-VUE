<script setup>
 import Card from '../principal/Card.vue'
 import axios from 'axios'
</script>

<script >
export default (await import('vue')).defineComponent({
data(){
 return {
   list : Object
 }
       },
       mounted(){
        axios.get('https://apigenerator.dronahq.com/api/gQliGKZH/books').then(response =>{
          this.list = response.data;
          console.log(this.list[0].imgUrl);
  
         }).catch(e => {
          console.log(e);
         })
      

       },
       methods : {
         enviar(){},
       },
    })
</script>

<template>
   

<div class="min-h-full">
  <div class="group relative mt-5">  <div class="relative inline-block text-left">
  
    <div class="flex flex-col">
        <label for="status" class="font-medium text-sm text-stone-600 ml-10">Categoria</label>

        <select
          id="status"
          class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 ml-10"
        >
         <option>Todo</option>
          <option>Accion</option>
          <option>Horror</option>
          <option>aventura</option>
          <option>Filosofia</option>
        </select>
      </div>
 
</div> </div>

  
<!--  <main>

    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="bg-gray-50">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-6 lg:gap-x-6 lg:space-y-0">
     

        <div v-for="item in list" class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://images.cdn3.buscalibre.com/fit-in/180x180/04/8d/048d00569a406b110d443f21b10d5b97.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              {{ item.nombre1 }}
             
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900"> {{ item.apellido2 }}</p>
        </div>


       
      </div>
    </div>
  </div>
</div>
    </div>
  </main>-->

<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
<div v-for="object in list" :key="object.id"   class="w-80 bg-white shadow rounded">
  <Card :item="object"  /> 
</div>
<!-- More products... -->
</div>
  </div>
</div>

</div>

<Footer></Footer>


</template>