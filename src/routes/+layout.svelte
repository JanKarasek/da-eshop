<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main>
  <slot />
</main>

<footer class="bg-gray-100 py-8 mt-12">
  <div class="container mx-auto px-4">
    <div class="text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} Garage Shop. Všechna práva vyhrazena.</p>
    </div>
  </div>
</footer> 