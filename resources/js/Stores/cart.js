import { ref } from 'vue';
import axios from 'axios';
import ToastStore from './ToastStore';

export const cartCount = ref(parseInt(localStorage.getItem('cartCount')) || 0);

export const updateCartCount = (count) => {
  cartCount.value = count;
  localStorage.setItem('cartCount', count.toString());
};

export const addToCart = async (productId, quantity) => {
  try {
    const response = await axios.post('/api/cart/add', {
      product_id: productId,
      quantity: quantity,
    });

    if (response.status === 200) {
      updateCartCount(response.data.cartItemCount);
      ToastStore.add({ message: response.data.message })
    }
  } catch (error) {
    console.error(error);
    // Handle error cases (e.g., display an error message to the user)
    ToastStore.add({ message: "an Error Occurred while adding product, try again" })
  }
};
