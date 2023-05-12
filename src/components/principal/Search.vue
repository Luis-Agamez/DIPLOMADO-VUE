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
         enviar(){
        

         },
       },

    })
    
</script>



<template>
  <div class="w-full shadow p-5 rounded-lg bg-white">
  <div class="relative">
	<div class="absolute flex items-center ml-2 h-full">
	  <svg class="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
	  </svg>
	</div>

	<input type="text" placeholder="Buscar por Nombre, Autor" class="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm ">
	  </div>

	<div class="flex items-center justify-between mt-4 ml-2">
	  <p class="font-medium">
		Filtros
	  </p>
 <div>
  <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md mr-10">
		Borrar Filtros
	  </button>

    <button class="px-4 py-2  bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
		Filtrar
	  </button>
 </div>


    
	</div>

	<div>
	  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
   
	<div>
    <label for="status" class="font-medium text-sm text-stone-600 ml-1">Categoria</label>
    <select class="px-4 py-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm mt-2" >
      
      <option>Accion</option>
      <option>Horror</option>
      <option>aventura</option>
      <option>Filosofia</option>
</select>
  </div>
 <div>
  <label for="status" class="font-medium text-sm text-stone-600 ml-1">Precio</label>
  <select class="px-4 py-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm mt-2">
		  <option value="1000"> 1000</option>
		  <option value="2000"> 2000</option>
		  <option value="3000"> 3000</option>
		  <option value="4000"> 4000</option>
		</select>
  </div>

	
	  </div>
	</div>
  </div>


  <div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">


      <div v-for="object in list" :key="object.id"   class="w-80 bg-white shadow rounded">
  <div
  >
  <Card :item="object"  /> 
</div>


  

      <!-- More products... -->
    </div>
  </div>
  </div>
</div>


</template>