// simpleStore.js
import { reactive } from 'vue';
import axios from 'axios';
import ToastStore from './ToastStore';

const store = reactive({
  state: {
    cartCount: 0,
    cart: null,
  },
  getters: {
    getCartCount() {
      return store.state.cartCount;
    },
    getCartItems() {
      return store.state.cart ? store.state.cart.cartItems : [];
    },
    getSubtotal() {
      const cartItems = store.getters.getCartItems();
      return cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
  mutations: {
    setCartCount(count) {
      store.state.cartCount = count;
    },
    setCart(data) {
      store.state.cart = data;
    },
  },
  actions: {
    async getTotalItems() {
      try {
        const { data } = await axios.get('api/cart/total');
        store.mutations.setCartCount(data.totalItems);
      } catch (error) {
        console.error('Error fetching total items:', error);
        // Handle error
      }
    },
    async addItemToCart(productId, quantity) {
      try {
        const { data } = await axios.post('/api/cart/add', {
          product_id: productId,
          quantity: quantity,
        });
        store.mutations.setCartCount(data.cartItemCount);
        ToastStore.add({ message: data.message });
        // Handle success
      } catch (error) {
        console.error('Error adding item to cart:', error);
        // Handle error
      }
    },
    async fetchCartItems() {
      try {
        const { data } = await axios.get('/api/cart');
        store.mutations.setCart(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
        // Handle error
      }
    },
    async deleteCartItem(productId) {
      try {
        await axios.delete(`/api/cart/${productId}`);
        store.actions.fetchCartItems();
        store.actions.getTotalItems();
        ToastStore.add({ message: 'Item deleted successfully' });
        // Handle success
      } catch (error) {
        console.error('Error deleting item from cart:', error);
        // Handle error
      }
    },
    async updateCartItem(productId, quantity) {
      try {
        await axios.patch('/api/cart/update', {
          product_id: productId,
          quantity: quantity,
        });
        store.actions.fetchCartItems();
        // Handle success
      } catch (error) {
        console.error('Error updating cart:', error);
        // Handle error
      }
    },
  },
});

export default store;
