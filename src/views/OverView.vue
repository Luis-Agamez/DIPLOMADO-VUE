<template>
    <!-- component -->
<section class="container px-4 mx-auto mt-10">
    <h1 class="text-gray-900 text-3xl title-font font-medium mb-5">VENTAS</h1>
    <hr class="">
<div class="grid grid-cols-1 gap-x-20 mb-6">
  <div>
    <div class="grid grid-cols-4 gap-4 mx-5 mt-5">
     
      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">20</div>
        <div class="mt-2">Numero de Ventas</div>
      </div>
      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">15</div>
        <div class="mt-2">Ventas Pagadas</div>
      </div>
      <div class="p-4 bg-gray-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">5</div>
        <div class="mt-2">Ventas sin Pago</div>
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
							<span class="bg-green-400 text-gray-50 rounded-md px-2 py-2">Paid</span>
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