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
<!-- Products products... --> 
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