<script>
  import { cart } from '$lib/stores/cart';
</script>

<nav class="bg-white shadow-md">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <a href="/" class="text-xl font-bold text-primary">Garage Shop</a>
      
      <div class="flex items-center space-x-6">
        <a href="/garages" class="text-gray-700 hover:text-primary transition-colors">Garáže</a>
        <a href="/about" class="text-gray-700 hover:text-primary transition-colors">O nás</a>
        <a href="/contact" class="text-gray-700 hover:text-primary transition-colors">Kontakt</a>
        
        <a href="/cart" class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {#if $cart.length > 0}
            <span class="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {$cart.length}
            </span>
          {/if}
        </a>
      </div>
    </div>
  </div>
</nav> 