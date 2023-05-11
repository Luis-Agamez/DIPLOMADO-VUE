<script>
import axios from 'axios'

export default{
  data(){
    return {
      book : {}
    }
  },

  mounted(){
   axios.get('https://apigenerator.dronahq.com/api/gQliGKZH/books/'+this.$route.params.id).then(response =>{
   this.book = response.data
  }).catch(e => {
   console.log(e);
  }) 
  

},

methods : {
  add (){
   var data = {name:this.book.name,author : this.book.author,price:this.book.price,version:this.book.version,rating:this.book.rating,description : this.book.description,imgUrl : this.book.imgUrl,category : this.book.category, date : "08/05/2023"}


   if(this.book.id){
    axios.put("https://apigenerator.dronahq.com/api/gQliGKZH/books/"+this.book.id, data)
    .then(()=> window.location.href='/dashboard');
   }else{
    axios.post("https://apigenerator.dronahq.com/api/gQliGKZH/books", data)
    .then(()=> window.location.href='/dashboard');
   }
  
  }

  
}

}
</script>


<template>
<div class="min-h-full">
 

  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        {{ book.id ? 'EDITAR LIBRO' : 'CREAR LIBRO' }}
      </h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
<form v-on:submit.prevent="add">
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Sube tu libro</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Ingresa la informacion necesaria para tu libro</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
              <input type="text" name="name" v-model="book.name" id="name" autocomplete="name" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Nombre del libro">
            </div>
          </div>
        </div>


        <div class="sm:col-span-4">
          <label class="block text-sm font-medium leading-6 text-gray-900">URL de la imagen</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
              <input type="text" name="imgUrl" v-model="book.imgUrl" id="imgUrl"  class="block flex-2 w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="URL">
            </div>
          </div>
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Descripcion</label>
          <p class="mt-3 text-sm leading-6 text-gray-600">Ingresa la descripcion.</p>
          <div class="mt-2">
            <textarea id="description" v-model="book.description" name="description" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        
        </div>
      </div>
    </div>

    <div class="border-b border-gray-900/10 pb-6">
    
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Genero</label>
          <div class="mt-2">
            <select id="category" name="category" v-model="book.category" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Horror</option>
              <option>Accion</option>
              <option>Aventura</option>
              <option>Filosofia</option>
            </select>
          </div>         
        </div>

     

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="author" class="block text-sm font-medium leading-6 text-gray-900">Autor</label>
          <div class="mt-2">
            <input type="text" name="author" id="author" v-model="book.author" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Precio</label>
          <div class="mt-2">
            <input type="text" name="price" v-model="book.price" id="price" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="version" class="block text-sm font-medium leading-6 text-gray-900">Version</label>
          <div class="mt-2">
            <input type="text" v-model="book.version" name="version" id="version" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="version" class="block text-sm font-medium leading-6 text-gray-900">Rating</label>
          <div class="mt-2">
            <input type="text" v-model="book.rating" name="rating" id="rating" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>


      </div>
    </div>

   
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <RouterLink to="/dashboard">
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900 w-40">Cancel</button>
  </RouterLink>


    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-40">Guardar</button>

  </div>
</form>

    </div>
  </main>
</div>


</template>