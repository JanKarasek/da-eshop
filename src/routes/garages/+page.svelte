<script>
  import { onMount } from 'svelte';
  import { cart } from '$lib/stores/cart';
  
  let garages = [
    {
      id: '1',
      name: 'Modern Classic Garage',
      description: 'Elegantní garáž s moderním designem a klasickými prvky. Vybavena nejnovějšími technologiemi pro bezpečnost a pohodlí.',
      price: 299999,
      dimensions: '20x30ft',
      features: [
        'Automatická sekční vrata',
        'LED osvětlení',
        'Úložný systém',
        'Podlahové vytápění',
        'Bezpečnostní systém'
      ],
      image: '/images/garage-1.jpg'
    },
    {
      id: '2',
      name: 'Urban Smart Garage',
      description: 'Kompaktní a chytrá garáž ideální pro městské prostředí. Maximální využití prostoru s inteligentními funkcemi.',
      price: 249999,
      dimensions: '16x24ft',
      features: [
        'Chytrá vrata s ovládáním přes aplikaci',
        'Integrovaný zabezpečovací systém',
        'Pracovní kout',
        'Modulární úložný systém',
        'Nabíjecí stanice pro elektromobil'
      ],
      image: '/images/garage-2.jpg'
    },
    {
      id: '3',
      name: 'Premium Luxury Garage',
      description: 'Luxusní garáž s nadstandardním vybavením a prémiovou povrchovou úpravou. Dokonalé řešení pro náročné zákazníky.',
      price: 399999,
      dimensions: '24x36ft',
      features: [
        'Klimatizace a vytápění',
        'Prémiový úložný systém',
        'Luxusní povrchová úprava',
        'Automatické osvětlení',
        'Dálkové ovládání všech funkcí'
      ],
      image: '/images/garage-3.jpg'
    }
  ];

  let filters = {
    minPrice: 0,
    maxPrice: 500000,
    dimensions: 'all',
    features: []
  };

  let allFeatures = [...new Set(garages.flatMap(garage => garage.features))];
  let filteredGarages = garages;
  let isFiltered = false;

  function applyFilters() {
    console.log('Aplikuji filtry:', filters);
    
    filteredGarages = garages.filter(garage => {
      const priceMatch = garage.price >= filters.minPrice && garage.price <= filters.maxPrice;
      const dimensionMatch = filters.dimensions === 'all' || garage.dimensions === filters.dimensions;
      const featureMatch = filters.features.length === 0 || 
        filters.features.every(feature => garage.features.includes(feature));
      
      return priceMatch && dimensionMatch && featureMatch;
    });

    isFiltered = filters.minPrice > 0 || 
                 filters.maxPrice < 500000 || 
                 filters.dimensions !== 'all' || 
                 filters.features.length > 0;
                 
    console.log('Filtrované garáže:', filteredGarages);
  }

  function resetFilters() {
    filters = {
      minPrice: 0,
      maxPrice: 500000,
      dimensions: 'all',
      features: []
    };
    applyFilters();
  }

  function addToCart(garage) {
    $cart = [...$cart, garage];
    alert(`${garage.name} byl přidán do košíku!`);
  }

  // Inicializace při načtení stránky
  onMount(() => {
    applyFilters();
  });
  
  // Reaktivní aktualizace při změně filtrů
  $: {
    if (filters) {
      applyFilters();
    }
  }
</script>

<svelte:head>
  <title>Naše Garáže - Garage Shop</title>
</svelte:head>

<div class="container py-12">
  <h1 class="text-4xl font-bold mb-8">Naše Garáže</h1>
  
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
    <!-- Filters -->
    <div class="lg:col-span-1">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Filtry</h2>
          {#if isFiltered}
            <button 
              on:click={resetFilters}
              class="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              Resetovat filtry
            </button>
          {/if}
        </div>
        
        <div class="space-y-6">
          <!-- Price Range -->
          <div class="form-group">
            <label class="form-label">Cenové rozpětí</label>
            <div class="flex items-center space-x-4">
              <input
                type="number"
                bind:value={filters.minPrice}
                class="w-32"
                placeholder="Min"
              />
              <span>do</span>
              <input
                type="number"
                bind:value={filters.maxPrice}
                class="w-32"
                placeholder="Max"
              />
            </div>
          </div>

          <!-- Dimensions -->
          <div class="form-group">
            <label class="form-label">Rozměry</label>
            <select
              bind:value={filters.dimensions}
            >
              <option value="all">Všechny velikosti</option>
              <option value="16x24ft">16x24ft</option>
              <option value="20x30ft">20x30ft</option>
              <option value="24x36ft">24x36ft</option>
            </select>
          </div>

          <!-- Features -->
          <div class="form-group">
            <label class="form-label">Vybavení</label>
            <div class="space-y-2">
              {#each allFeatures as feature}
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    bind:group={filters.features}
                    value={feature}
                  />
                  <span class="ml-2">{feature}</span>
                </label>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Garage Grid -->
    <div class="lg:col-span-3">
      {#if isFiltered}
        <div class="mb-4 text-sm text-gray-600">
          Zobrazeno {filteredGarages.length} z {garages.length} garáží
        </div>
      {/if}
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each filteredGarages as garage}
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={garage.image} alt={garage.name} class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{garage.name}</h3>
              <p class="text-gray-600 mb-4">{garage.description}</p>
              <div class="mb-4">
                <span class="text-sm text-gray-500">Rozměry: {garage.dimensions}</span>
              </div>
              <div class="mb-4">
                <h4 class="font-medium mb-2">Vybavení:</h4>
                <ul class="list-disc list-inside text-sm text-gray-600">
                  {#each garage.features as feature}
                    <li>{feature}</li>
                  {/each}
                </ul>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold">{garage.price.toLocaleString()} Kč</span>
                <div class="space-x-2">
                  <button 
                    on:click={() => addToCart(garage)}
                    class="btn btn-primary"
                  >
                    Do košíku
                  </button>
                  <a href="/garages/{garage.id}" class="btn btn-secondary">Detail</a>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>

      {#if filteredGarages.length === 0}
        <div class="text-center py-12">
          <p class="text-xl text-gray-600">Nebyly nalezeny žádné garáže odpovídající vašim filtrům.</p>
          <button 
            on:click={resetFilters}
            class="mt-4 btn btn-primary"
          >
            Zobrazit všechny garáže
          </button>
        </div>
      {/if}
    </div>
  </div>
</div> 