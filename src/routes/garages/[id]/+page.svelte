<script>
  import { page } from '$app/stores';
  
  // This would normally come from the database
  const garage = {
    id: $page.params.id,
    name: 'Modern Classic',
    description: 'A timeless design with modern amenities, perfect for any home. This garage combines classic aesthetics with contemporary functionality.',
    price: 299999,
    dimensions: '20x30ft',
    features: [
      'Automatic Door',
      'LED Lighting',
      'Storage Space',
      'Security System',
      'Climate Control',
      'Custom Storage Solutions'
    ],
    images: [
      '/images/garage-1.jpg',
      '/images/garage-2.jpg',
      '/images/garage-3.jpg'
    ],
    specifications: {
      'Door Type': 'Automatic Roll-Up',
      'Construction': 'Steel Frame with Insulated Panels',
      'Floor': 'Concrete with Epoxy Coating',
      'Lighting': 'LED with Motion Sensors',
      'Storage': 'Custom Built-in Storage System',
      'Security': 'Smart Security System with Camera',
      'Climate Control': 'HVAC System Included'
    }
  };

  let selectedImage = garage.images[0];
  let quantity = 1;
  let formData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  };

  function handleSubmit() {
    // Handle form submission and payment processing
    console.log('Form submitted:', { ...formData, quantity });
  }
</script>

<svelte:head>
  <title>{garage.name} - Garage Shop</title>
</svelte:head>

<div class="container py-12">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <!-- Image Gallery -->
    <div>
      <div class="relative aspect-w-16 aspect-h-9 mb-4">
        <img
          src={selectedImage}
          alt={garage.name}
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div class="grid grid-cols-3 gap-4">
        {#each garage.images as image}
          <button
            class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden {selectedImage === image ? 'ring-2 ring-accent' : ''}"
            on:click={() => selectedImage = image}
          >
            <img src={image} alt={garage.name} class="w-full h-full object-cover" />
          </button>
        {/each}
      </div>
    </div>

    <!-- Product Details -->
    <div>
      <h1 class="text-4xl font-bold mb-4">{garage.name}</h1>
      <p class="text-2xl font-bold text-accent mb-6">{garage.price.toLocaleString()} Kč</p>
      <p class="text-gray-600 mb-8">{garage.description}</p>

      <!-- Features -->
      <div class="mb-8">
        <h2 class="text-xl font-bold mb-4">Vybavení</h2>
        <ul class="grid grid-cols-2 gap-2">
          {#each garage.features as feature}
            <li class="flex items-center">
              <svg class="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Specifications -->
      <div class="mb-8">
        <h2 class="text-xl font-bold mb-4">Specifikace</h2>
        <dl class="grid grid-cols-1 gap-2">
          {#each Object.entries(garage.specifications) as [key, value]}
            <div class="flex">
              <dt class="font-medium w-1/3">{key}:</dt>
              <dd class="text-gray-600">{value}</dd>
            </div>
          {/each}
        </dl>
      </div>

      <!-- Purchase Form -->
      <div class="bg-gray-50 p-6 rounded-lg">
        <h2 class="text-xl font-bold mb-4">Objednat garáž</h2>
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
          <div class="form-group">
            <label for="quantity" class="form-label">Množství</label>
            <input
              type="number"
              id="quantity"
              bind:value={quantity}
              min="1"
              class="w-24"
            />
          </div>
          
          <div class="form-group">
            <label for="name" class="form-label">Jméno</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              required
            />
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              required
            />
          </div>
          
          <div class="form-group">
            <label for="phone" class="form-label">Telefon</label>
            <input
              type="tel"
              id="phone"
              bind:value={formData.phone}
              required
            />
          </div>
          
          <div class="form-group">
            <label for="address" class="form-label">Adresa</label>
            <input
              type="text"
              id="address"
              bind:value={formData.address}
              required
            />
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label for="city" class="form-label">Město</label>
              <input
                type="text"
                id="city"
                bind:value={formData.city}
                required
              />
            </div>
            
            <div class="form-group">
              <label for="zipCode" class="form-label">PSČ</label>
              <input
                type="text"
                id="zipCode"
                bind:value={formData.zipCode}
                required
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="country" class="form-label">Země</label>
            <input
              type="text"
              id="country"
              bind:value={formData.country}
              required
            />
          </div>
          
          <div class="pt-4">
            <button type="submit" class="btn btn-primary w-full">
              Pokračovat k platbě
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div> 