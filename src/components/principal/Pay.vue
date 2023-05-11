<template>


<!-- Snippet -->
<section class="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
    <div class="h-full">
        <!-- Pay component -->
        <div>
            <!-- Card background -->
            <div class="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                <img class="rounded-t shadow-lg" src="https://preview.cruip.com/mosaic/images/pay-bg.jpg" width="460" height="180" alt="Pay background" />
            </div>
            <!-- Card body -->
            <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                <div class="bg-white px-8 pb-6 rounded-b shadow-lg">

                    <!-- Card header -->
                    <div class="text-center mb-6">
                        <div class="mb-2">
                            <img class="-mt-8 inline-flex rounded-full" src="src/assets/img/logo.png" width="64" height="64" alt="User" />
                        </div>
                        <h1 class="text-xl leading-snug text-gray-800 font-semibold mb-2">Pago</h1>
                        <div class="text-sm">
                            Estas apunto de realizar el pago del producto o productos que quieres comprar recuarda no compartir la informacion sensible.
                        </div>
                    </div>

                 

                    <!-- Card form -->
                    <div x-show="card">
                        <div class="space-y-4">
                            <!-- Card Number -->
                            <div>
                                <label class="block text-sm font-medium mb-1" for="card-nr">Numero de Tarjeta <span class="text-red-500">*</span></label>
                                <input id="card-nr" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="XXXX XXXX XXXX XXXX" />
                            </div>
                            <!-- Expiry and CVC -->
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <label class="block text-sm font-medium mb-1" for="card-expiry">Fecha de Expiracion <span class="text-red-500">*</span></label>
                                    <input id="card-expiry" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="MM/YY" />
                                </div>
                                <div class="flex-1">
                                    <label class="block text-sm font-medium mb-1" for="card-cvc">CVC <span class="text-red-500">*</span></label>
                                    <input id="card-cvc" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="CVC" />
                                </div>
                            </div>
                            <!-- Name on Card -->
                            <div>
                                <label class="block text-sm font-medium mb-1" for="card-name">Nombre del titular <span class="text-red-500">*</span></label>
                                <input id="card-name" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="Nombre " />
                            </div>
                            <!-- Email -->
                            <div>
                                <label class="block text-sm font-medium mb-1" for="card-email">Correo <span class="text-red-500">*</span></label>
                                <input id="card-email" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="email" placeholder="@gmail.com" />
                            </div>

                            <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Envio</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Envio Estandar - $100.00</option>
            <option>Envio Express -  $200.00</option>
          </select>
        </div>
                        </div>
                        <!-- Form footer -->
                        <div class="mt-6">
                            <div class="mb-4">
                                <RouterLink to="/">
                                <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Pagar $400.00</button>
                            </RouterLink>
                            </div>
            
                        </div>
                    </div>

                    <!-- PayPal form -->
                    <div x-show="!card" x-cloak>
                        <div>
                            <div class="mb-4">
                                <RouterLink to="/">
                                <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Pagar en Efectivo - $400.00</button>
                            </RouterLink>
                            </div>
                           
                        </div>
                    </div>


                       <!-- PayPal form -->
                       <div x-show="!card" x-cloak>
                        <div>
                            <div class="mb-4">
                                <RouterLink to="/">
                                <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-red-900 hover:bg-red-700 text-white focus:outline-none focus-visible:ring-2">Cancelar</button>
                            </RouterLink>
                            </div>
                           
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
</template>