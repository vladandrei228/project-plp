<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center mt-3">Product Listing Page</h1>
    <div class="grid-container">
      <template v-for="(item, index) in gridItems" :key="index">
        <div 
          v-if="item.type === 'promotion'" 
          :class="promotionClasses(item.promotion.type)"
        >
          <PromotionCard :promotion="item.promotion" />
        </div>
        <div 
          v-else-if="item.type === 'product'" 
          class="product-card"
        >
          <ProductCard :product="item.data" />
        </div>
      </template>
    </div>
  </div>
</template>  

<script>
import productsData from '@/assets/data.json';
import ProductCard from '@/components/ProductCard.vue';
import PromotionCard from '@/components/PromotionCard.vue';

export default {
  name: 'ProductListingPage',
  components: {
    ProductCard,
    PromotionCard,
  },
  data() {
    return {
      products: productsData.products,
      promotions: productsData.promotionalSpots,
    };
  },
  computed: {
    gridItems() {
      const items = [];
      let productIndex = 0;

      const sortedPromotions = [...this.promotions].sort((a, b) => a.position - b.position);

      for (let i = 0; i < this.products.length + this.promotions.length; i++) {
        const promotion = sortedPromotions.find((p) => p.position === i + 1);

        if (promotion) {
          items.push({ type: 'promotion', promotion });
        } else if (productIndex < this.products.length) {
          items.push({ type: 'product', data: this.products[productIndex] });
          productIndex++;
        }
      }

      return items;
    },
  },
  methods: {
    promotionClasses(type) {
      switch (type) {
        case '1x1':
          return 'promotion-1x1';
        case '2x2':
          return 'promotion-2x2';
        case '2x1':
          return 'promotion-2x1';
        default:
          return 'promotion-1x1';
      }
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr); 
  gap: 15px;
  margin-bottom: 20px;
}


.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.product-card .card-body {
  padding: 10px;
}

.product-card .card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.product-card .card-text {
  font-size: 0.9rem;
  color: #555;
}

.promotion-card {
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.promotion-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.promotion-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.promotion-card .promo-text {
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 1.1rem;
}

.promotion-1x1 {
  grid-column: span 1;
  grid-row: span 1;
}

.promotion-2x2 {
  grid-column: span 2;
  grid-row: span 2;
}

.promotion-2x1 {
  grid-column: span 2;
  grid-row: span 1;
}

@media (max-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 900px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 400px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>