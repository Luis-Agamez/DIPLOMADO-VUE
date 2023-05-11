<template>

<section class="flex flex-col md:flex-row h-screen items-center">



<div class="bg-white w-full md:max-w-md lg:max-w-full  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

  <div class="w-full h-100">

    <h1 class="text-5xl font-bold">Register</h1>
    <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Crea tu cuenta</h1>

    <form class="mt-6" action="#" method="POST">
      <div>
        <label class="block text-gray-700">Username</label>
        <input type="text" name="" id="" placeholder="Username" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocompleted required>
      </div>

      <div class="mt-4">
        <label class="block text-gray-700">Email</label>
        <input type="text" name="" id="" placeholder="Email" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocompleted required>
      </div>

      <div class="mt-4">
        <label class="block text-gray-700">Direccion</label>
        <input type="text" name="" id="" placeholder="Direccion" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocompleted required>
      </div>

      <div class="mt-4">
        <label class="block text-gray-700">Contraseña</label>
        <input type="password" name="" id="" placeholder="Contraseña" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required>
      </div>

      <div class="mt-4">
        <label class="block text-gray-700">Verificacion de Contraseña</label>
        <input type="password" name="" id="" placeholder="Contraseña" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required>
      </div>

      <RouterLink to="/login">  <button type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6">Crear cuenta</button></RouterLink>

    
    </form>

    <hr class="my-6 border-gray-300 w-full">

    <p class="mt-8">
      Ya tienes una cuenta ? 
      
      <RouterLink to="/login"><a class="text-blue-500 hover:text-blue-700 font-semibold">
        Iniciar Sesion ahora
      </a></RouterLink>
    </p>

    <p class="text-sm text-gray-500 mt-12">&copy; Library - All Rights Reserved.</p>
  </div>

</div>

<div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
  <img src="https://images.pexels.com/photos/256424/pexels-photo-256424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="w-full h-full object-cover">
</div>

</section>

</template>