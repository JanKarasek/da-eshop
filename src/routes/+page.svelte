<script>
  import { onMount } from 'svelte';
  
  let featuredGarages = [
    {
      id: '1',
      name: 'Modern Classic',
      description: 'A timeless design with modern amenities',
      price: 29999,
      image: '/images/garage-1.jpg'
    },
    {
      id: '2',
      name: 'Urban Space',
      description: 'Perfect for city living',
      price: 24999,
      image: '/images/garage-2.jpg'
    },
    {
      id: '3',
      name: 'Luxury Suite',
      description: 'Premium features for the discerning owner',
      price: 39999,
      image: '/images/garage-3.jpg'
    }
  ];
</script>

<svelte:head>
  <title>Garage Shop - Premium Garage Solutions</title>
</svelte:head>

<section class="relative h-[80vh] bg-primary text-white">
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="container relative h-full flex items-center">
    <div class="max-w-2xl">
      <h1 class="text-5xl font-bold mb-6">Premium Garage Solutions</h1>
      <p class="text-xl mb-8">Discover our collection of high-quality, customizable garages designed to meet your needs.</p>
      <a href="/garages" class="btn btn-primary">View Collection</a>
    </div>
  </div>
</section>

<section class="py-20">
  <div class="container">
    <h2 class="text-3xl font-bold mb-12 text-center">Featured Garages</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each featuredGarages as garage}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={garage.image} alt={garage.name} class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{garage.name}</h3>
            <p class="text-gray-600 mb-4">{garage.description}</p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold">${garage.price.toLocaleString()}</span>
              <a href="/garages/{garage.id}" class="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="bg-secondary py-20">
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-6">Why Choose Our Garages?</h2>
        <ul class="space-y-4">
          <li class="flex items-center">
            <svg class="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Premium Quality Materials
          </li>
          <li class="flex items-center">
            <svg class="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Customizable Designs
          </li>
          <li class="flex items-center">
            <svg class="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Professional Installation
          </li>
          <li class="flex items-center">
            <svg class="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Extended Warranty
          </li>
        </ul>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h3 class="text-2xl font-bold mb-4">Request a Quote</h3>
        <form class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent" />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent" />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>
