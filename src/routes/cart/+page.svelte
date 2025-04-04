<script>
  import { cart } from '$lib/stores/cart';

  function removeFromCart(index) {
    $cart = $cart.filter((_, i) => i !== index);
  }

  $: total = $cart.reduce((sum, item) => sum + item.price, 0);
</script>

<svelte:head>
  <title>Košík - Garage Shop</title>
</svelte:head>

<div class="container py-12">
  <h1 class="text-4xl font-bold mb-8">Košík</h1>

  {#if $cart.length === 0}
    <div class="text-center py-12">
      <p class="text-xl text-gray-600 mb-4">Váš košík je prázdný</p>
      <a href="/garages" class="btn btn-primary">Prohlédnout garáže</a>
    </div>
  {:else}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items -->
      <div class="lg:col-span-2">
        <div class="space-y-4">
          {#each $cart as garage, index}
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-start space-x-4">
                <img src={garage.image} alt={garage.name} class="w-32 h-32 object-cover rounded-lg" />
                <div class="flex-1">
                  <h3 class="text-xl font-bold">{garage.name}</h3>
                  <p class="text-gray-600 mt-2">{garage.description}</p>
                  <div class="mt-4">
                    <span class="text-sm text-gray-500">Rozměry: {garage.dimensions}</span>
                  </div>
                  <div class="mt-4 flex items-center justify-between">
                    <span class="text-2xl font-bold">{garage.price.toLocaleString()} Kč</span>
                    <button 
                      on:click={() => removeFromCart(index)}
                      class="text-red-600 hover:text-red-800"
                    >
                      Odstranit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Order Summary -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-bold mb-4">Souhrn objednávky</h2>
          <div class="space-y-4">
            <div class="flex justify-between">
              <span>Celkem položek:</span>
              <span>{$cart.length}</span>
            </div>
            <div class="flex justify-between font-bold">
              <span>Celková cena:</span>
              <span>{total.toLocaleString()} Kč</span>
            </div>
            <button class="btn btn-primary w-full mt-4">
              Pokračovat k platbě
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div> 