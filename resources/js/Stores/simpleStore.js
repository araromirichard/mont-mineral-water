import { reactive } from 'vue'
import axios from 'axios';

const simpleStore = ({
    state: reactive({
        cartCount: 0,
        cart: null,
    }),
    getters: {
        getCartCount() {
            return this.state.cartCount;
        },
    },
    mutations: {
        updateCartCount(count) {
            this.state.cartCount = count;
        },

        updateCart(data) {
            this.state.cart = data;
        },
    },
    actions: {
        async getTotalItems() {
            try {
                const { data } = await axios.get('api/cart/total');
                const totalItems = data.totalItems;
                this.commit('updateCartCount', totalItems);
            } catch (error) {
                console.error('Error fetching total items:', error);
            }
        },

        async addItemToCart(_, { productId, quantity }) {
            try {
                const { data } = await axios.post('/api/cart/add', {
                    product_id: productId,
                    quantity: quantity,
                });

                this.commit('updateCartCount', data.cartItemCount);
            } catch (error) {
                console.error(error);
            }
        },

        async fetchCartItems() {
            try {
                const { data } = await axios.get('/api/cart');
                this.commit('updateCart', data);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        },

        async deleteCartItem(_, productId) {
            try {
                const { data } = await axios.delete(`/api/cart/${productId}`);
                this.actions.fetchCartItems();
                this.actions.getTotalItems();
                console.log(JSON.stringify(data, null, 2));
            } catch (error) {
                console.error('Error deleting item from cart:', error);
            }
        },

        async updateCart(productId, quantity) {
            try {
                await axios.patch('/api/cart/update', { product_id: productId, quantity });

                this.actions.fetchCartItems();
            } catch (error) {
                console.error('Error updating cart:', error);
            }
        }
    },
});

export default simpleStore;
