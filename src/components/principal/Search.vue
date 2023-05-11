<script >
    import axios from 'axios'
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


      <div v-for="item in list" :key="item.id"   class="w-80 bg-white shadow rounded">
  <div
  >
  
    <div>
  <span
    class=" absolute uppercase text-xs bg-green-50 p-1 border-green-500 border rounded text-green-700 font-medium select-none  mt-1 ml-1"
  >
    Disponible
  </span>
<img
                :src="item.imgUrl"
                alt=""
                class="h-80 w-full bg-gray-200 flex flex-col justify-between   bg-cover"
              />
    </div>
  </div>
  <div class="p-4 flex flex-col items-center">
    <p class="text-gray-400 font-light text-xs text-center">
      {{ item.author }}
    </p>
    <h1 class="text-gray-800 text-center mt-1">{{ item.name }}</h1>
    <p class="text-center text-gray-800 mt-1">{{ item.price }}</p>
    <div class="inline-flex items-center mt-2">
      <button
        class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          />
        </svg>
      </button>
      <div
        class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"
      >
        1
      </div>
      <button
        class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
    
    <button
      class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
    >
      Agregar al Carrito
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </button>
  

<div class="w-full">
  <RouterLink :to="{name : 'detail' , params : { id : item.id } }" >
    <button
      class="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-900 active:bg-gray-900 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
    >
      Detalles
    </button>
  </RouterLink>
</div>
   
  </div>
</div>


  

      <!-- More products... -->
    </div>
  </div>
</div>


</template>