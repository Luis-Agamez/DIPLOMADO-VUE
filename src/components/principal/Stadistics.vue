<template>
    <div class="flex flex-col">

  <div class="bg-white p-2 rounded-xl ">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <!--   <div class="flex flex-col">
        <label for="name" class="font-medium text-sm text-stone-600">Name</label>
        <input
          type="text"
          id="name"
          placeholder="john doe"
          class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
        >
      </div>

      <div class="flex flex-col">
        <label for="email" class="font-medium text-sm text-stone-600">Email</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@example.com"
          class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
        >
      </div>


      <div class="flex flex-col">
        <label for="status" class="font-medium text-sm text-stone-600">Status</label>

        <select
          id="status"
          class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
        >
          <option>Active</option>
          <option>Pending</option>
          <option>Deleted</option>
        </select>
      </div>
--> 
      <div class="flex flex-col ml-5">
        <label for="date" class="ml-2 font-medium text-sm text-stone-600">Filtar por fecha</label>
        <input
          type="date"
          id="date"
          class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-300 focus:ring-opacity-90"
        >
      </div>

      
    </div>

    <div class="grid md:flex grid-cols-2 justify-between space-x-4 w-full mt-6">
      <h1 class=" ml-5 text-gray-900 text-3xl title-font font-medium mb-5">FILTRAR VENTAS</h1>
      <div>
        <button class="px-4 py-2 rounded-lg  bg-stone-400 hover:bg-stone-500 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10">
        Reset
      </button>

      <button class="ml-10 mr-10 px-4 py-2 rounded-lg  bg-orange-400 hover:bg-orange-600 font-bold text-white shadow-lg shadow-gray-300 transition ease-in-out duration-200 translate-10">
        Search
      </button>
      </div>
    </div>

    <hr class="">
<div class="grid grid-cols-1 gap-x-20">
  <div>
    <div class="grid grid-cols-4 gap-4 mx-5 mt-5">
     
      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">20</div>
        <div class="mt-2">Numero de Ventas</div>
      </div>
      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">15</div>
        <div class="mt-2">Ventas Entregadas</div>
      </div>
      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">5</div>
        <div class="mt-2">Ventas en Proceso</div>
      </div>

      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">4.500.000.00</div>
        <div class="mt-2">Dinero Total</div>
      </div>
     
    </div>
  </div>
  <div>

  </div>
</div>



<div class="grid grid-cols-1 gap-x-20">
  <div>
    <div class="grid grid-cols-4 gap-4 mx-5 mt-5">
     
      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">10</div>
        <div class="mt-2">Numero de  Rentados</div>
      </div>
      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">6</div>
        <div class="mt-2">Tiempo cumplido</div>
      </div>
      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">4</div>
        <div class="mt-2">Tiempo en  Proceso</div>
      </div>

      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">1.500.000.00</div>
        <div class="mt-2">Dinero Total</div>
      </div>
     
    </div>
  </div>
  <div>

  </div>
</div>

  </div>
</div>







<section class="container px-4 mx-auto mt-10">
    
    <div class="flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table class="w-full table text-gray-400 border-separate space-y-6 text-sm">
				<thead class="bg-gray-50 dark:bg-gray-800">
					<tr>
						<th class="p-3">Cliente</th>
						<th class="p-3 text-left">Producto/s</th>
						<th class="p-3 text-left">Total</th>
						<th class="p-3 text-left">Status</th>
						<th class="p-3 text-left">Informacion</th>
					</tr>
				</thead>
				<tbody>


					<tr class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
						<td class="p-3">
							<div class="flex align-items-center">
								<img class="rounded-full h-12 w-12  object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lutXrX_1LUzu4jSvBPRoikMMiwqAxkpNMSh7bCM&s" alt="unsplash image">
								<div class="ml-3">
									<div class="">Alexander Herrera</div>
									<div class="text-gray-500">Alexander@gmail.com</div>
								</div>
							</div>
						</td>
						<td class="p-3">
							Underwater,Killing,Alicia
						</td>
						<td class="p-3 font-bold">
							1300000.00$
						</td>
         
						<td class="p-3">
							<span class="bg-green-400 text-gray-50 rounded-md px-2 py-2">Pagado</span>
						</td>
						<td class="p-3 ">
      <RouterLink to="/salesdetail/1">
            <a href="#" class="flex justify-center px-2 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Detalles
            </span>

         
        </a>
    
    </RouterLink>					
				
						</td>
					</tr>


          <tr class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
						<td class="p-3">
							<div class="flex align-items-center">
								<img class="rounded-full h-12 w-12  object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lutXrX_1LUzu4jSvBPRoikMMiwqAxkpNMSh7bCM&s" alt="unsplash image">
								<div class="ml-3">
									<div class="">Alexander Herrera</div>
									<div class="text-gray-500">Alexander@gmail.com</div>
								</div>
							</div>
						</td>
						<td class="p-3">
							Underwater,Killing,Alicia
						</td>
						<td class="p-3 font-bold">
							1300000.00$
						</td>
           
						<td class="p-3">
							<span class="bg-green-400 text-gray-50 rounded-md px-2 py-2">Pagado</span>
						</td>
						<td class="p-3 ">
      <RouterLink to="/salesdetail/1">
            <a href="#" class="flex justify-center px-2 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Detalles
            </span>

         
        </a>
    
    </RouterLink>					
				
						</td>
					</tr>











          <tr class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
						<td class="p-3">
							<div class="flex align-items-center">
								<img class="rounded-full h-12 w-12  object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lutXrX_1LUzu4jSvBPRoikMMiwqAxkpNMSh7bCM&s" alt="unsplash image">
								<div class="ml-3">
									<div class="">Alexander Herrera</div>
									<div class="text-gray-500">Alexander@gmail.com</div>
								</div>
							</div>
						</td>
						<td class="p-3">
							Underwater,Killing,Alicia
						</td>
						<td class="p-3 font-bold">
							1300000.00$
						</td>
          
						<td class="p-3">
							<span class="bg-green-400 text-gray-50 rounded-md px-2 py-2">Pagado</span>
						</td>
						<td class="p-3 ">
      <RouterLink to="/salesdetail/1">
            <a href="#" class="flex justify-center px-2 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Detalles
            </span>

         
        </a>
    
    </RouterLink>					
				
						</td>
					</tr>


					
					
					
				</tbody>
			</table>
                </div>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-between mt-6">
        <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                previous
            </span>
        </a>

        <div class="items-center hidden md:flex gap-x-3">
            <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
        </div>

        <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </a>
    </div>
</section>




</template>