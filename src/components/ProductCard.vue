<template>
    <div class="card" @click="goToDetailPage">
      <img 
        :src="product.images?.[0] || 'https://via.placeholder.com/400x400'" 
        class="card-img-top" 
        :alt="product.name.en  || 'No image available'" 
      />
      <div class="card-body text-center">
        <h5 class="card-title text-truncate">{{ product.name.en || product.name.dk || 'Unnamed Product' }}</h5>
        <p class="card-text fw-bold">{{ product.price ? product.price + ' DKK' : 'Price not available' }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      goToDetailPage() {
        this.$router.push({ name: 'ProductDetail', params: { id: this.product.id } });
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    cursor: pointer;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-img-top {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .card-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .card-text {
    font-size: 0.9rem;
    color: #555;
  }
  </style>