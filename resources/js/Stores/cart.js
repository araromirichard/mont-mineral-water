import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

// Retrieve the cartCount value from local storage or default to 0
export const cartCount = ref(parseInt(localStorage.getItem('cartCount')) || 0);

// Function to update the cartCount and store it in local storage
export const updateCartCount = (count) => {
  cartCount.value = count;
  localStorage.setItem('cartCount', count.toString());
};

export const addToCart = (productId, quantity) => {
    const form = useForm({
        product_id: productId,
        quantity: quantity,
    });

    try {
        form.post(route('cart.add'));
        cartCount.value++; // Increment the cartCount when the request is successful
        updateCartCount(cartCount.value);
    } catch (error) {
        console.error(error);
    }
};
