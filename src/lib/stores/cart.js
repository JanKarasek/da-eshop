import { writable } from 'svelte/store';

// Initialize cart from localStorage if available
const storedCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
const initialCart = storedCart ? JSON.parse(storedCart) : [];

// Create the store
const cart = writable(initialCart);

// Subscribe to changes and update localStorage
if (typeof window !== 'undefined') {
  cart.subscribe(value => {
    localStorage.setItem('cart', JSON.stringify(value));
  });
}

export { cart }; 