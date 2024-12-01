import { createRouter, createWebHistory } from 'vue-router';
import ProductListingPage from '@/components/ProductListingPage.vue';
import ProductDetailPage from '@/components/ProductDetailPage.vue';
import productsData from '@/assets/data.json';

const routes = [
  {
    path: '/',
    name: 'ProductListing',
    component: ProductListingPage,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
    props: route => ({ product: productsData.products.find(p => p.id === parseInt(route.params.id)) }),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;