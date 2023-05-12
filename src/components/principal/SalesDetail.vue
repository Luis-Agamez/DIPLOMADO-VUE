<template>



    <body class="bg-gray-100">
      <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
          <div class="w-3/4 bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">INFORMACION DE COMPRA</h1>
              <h2 class="font-semibold text-2xl">3 Productos</h2>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Producto</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Cantidad</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Tipo</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Precio</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
            </div>
    
    
            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5"> <!-- product -->
                <div class="w-20">
                  <img class="h-24" src="https://www.creativosonline.org/wp-content/uploads/2021/09/Crear-la-portada-y-contraportada-de-un-libro-2.jpg" alt="">
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">Be Creative</span>
                  <span class="text-red-500 text-xs">Be Creative</span>
                  <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs"></a>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
               
                <input class="mx-2 border text-center w-8" type="text" value="1">
    
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">Compra</span>
              <span class="text-center w-1/5 font-semibold text-sm">$4000.00</span>
              <span class="text-center w-1/5 font-semibold text-sm">$4000.00</span>
            </div>


            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5"> <!-- product -->
                <div class="w-20">
                  <img class="h-24" src="https://www.creativosonline.org/wp-content/uploads/2021/09/Crear-la-portada-y-contraportada-de-un-libro-2.jpg" alt="">
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">Be Creative</span>
                  <span class="text-red-500 text-xs">Be Creative</span>
                  <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs"></a>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
               
                <input class="mx-2 border text-center w-8" type="text" value="1">
    
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">Compra</span>
              <span class="text-center w-1/5 font-semibold text-sm">$4000.00</span>
              <span class="text-center w-1/5 font-semibold text-sm">$4000.00</span>
            </div>




            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5"> <!-- product -->
                <div class="w-20">
                  <img class="h-24" src="https://www.creativosonline.org/wp-content/uploads/2021/09/Crear-la-portada-y-contraportada-de-un-libro-2.jpg" alt="">
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">Be Creative</span>
                  <span class="text-red-500 text-xs">Be Creative</span>
                  <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs"></a>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
               
                <input class="mx-2 border text-center w-8" type="text" value="1">
    
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">Compra</span>
              <span class="text-center w-1/5 font-semibold text-sm">$4000.00</span>
              <span class="text-center w-1/5 font-semibold text-sm">$4000.00</span>
            </div>
    
    
           
           
            <RouterLink to="/stadistic">
              <a  class="flex font-semibold text-indigo-600 text-sm mt-10">
          
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Volver
        </a>
            </RouterLink>
    
            
          </div>
    
          <div id="summary" class="w-1/4 px-8 py-5">
            <h1 class="font-semibold text-2xl border-b pb-1">INFORMACION</h1>
            <div class="flex justify-between mt-10 mb-1">
              <span class="font-semibold text-sm uppercase">Productos 3</span>
              <span class="font-semibold text-sm">1200.000$</span>
            </div>
            <div class="flex justify-between mt-4 mb-2">
              <span class="font-semibold text-sm uppercase text-blue-500 ">Envio</span>
              <span class="font-semibold text-sm">100.000$</span>
            </div>
    
    
            <h1 class="font-semibold text-2xl border-b pb-1">Informacion de cliente</h1>
            <div class="flex-row justify-between mt-2 mb-2">
              <td class="p-3">
							<div class="flex align-items-center">
								<img class="rounded-full h-12 w-12  object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lutXrX_1LUzu4jSvBPRoikMMiwqAxkpNMSh7bCM&s" alt="unsplash image">
								<div class="ml-3">
                  <div class="text-black-900 font-bold">Nombre :</div>
									<div class="">Alexander Herrera</div>
                  <div class="text-black-900 font-bold">Correo :</div>
									<div class="text-gray-500">Alexander@gmail.com</div>
                  <div class="text-black-900 font-bold">Direccion :</div>
                  <div class="text-gray-500">Calle 46 Barrio Baraji, Monteria Cordoba</div>
								</div>
							</div>
						</td>
            </div>
            
            
           
            <div class="flex-row  py-10">
              <p for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Estado de la Compra</p>
            
              <span class="bg-green-400 text-gray-50 inline-block rounded-md px-2 py-2 w-full font-bold text-center">Pagado</span>
            </div>
            <div class="border-t mt-0">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total Valor Pagado</span>
                <span>$1300.000</span>
              </div>
             <!-- <RouterLink to="/stadistic">
              <button class="bg-indigo-800 font-semibold hover:bg-indigo-500 py-3 text-sm text-white uppercase w-full mb-4 rounded-md" >Aceptar</button>
              <button class="bg-red-800 font-semibold hover:bg-red-500 py-3 text-sm text-white uppercase w-full rounded-md" >Denegar</button>
            </RouterLink>-->
            </div>
          </div>
    
        </div>
      </div>
    </body>
    
            
        
    
    </template>