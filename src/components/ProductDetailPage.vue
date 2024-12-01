<template>
    <div class="container mt-5">
      <div class="row mt-2">
        <div class="col-md-6">
          <img 
            :src="selectedImage || product.images[0]" 
            class="img-fluid" 
            :alt="product.name.en || 'No image available'" 
          />
          <div class="mt-3">
            <img 
              v-for="(image, index) in (selectedVariant ? selectedVariant.images : product.images)" 
              :key="index" 
              :src="image" 
              class="img-thumbnail me-2" 
              :alt="`Image ${index + 1}`" 
              style="width: 100px; height: 100px; object-fit: cover;"
              @click="selectedImage = image"
            />
          </div>
        </div>
        <div class="col-md-6">
          <h1>{{ product.name.en || product.name.dk || 'Unnamed Product' }}</h1>
          <p class="fw-bold">{{ product.price + ' DKK' }}</p>
          <p><strong>Brand:</strong> {{ product.brand }}</p>
          <p><strong>Stock:</strong> {{ selectedVariant ? selectedVariant.stock : product.stock }}</p>
          <div v-if="product.size && product.size.length" class="d-flex align-items-center">
            <p><strong>Size:</strong></p>
            <select class="form-select" v-model="selectedSize">
              <option disabled value="">{{ 'Select size here' }}</option>
              <option v-for="size in (selectedVariant ? selectedVariant.size : product.size)" :key="size" :value="size">
                {{ size }}
              </option>
            </select>
          </div>
          <div v-if="product.variant && product.variant.length">
            <h5>Variants</h5>
            <div class="d-flex flex-wrap">
              <div 
                class="variant-card card m-2 p-2"
                :class="{ 'border-primary': !selectedVariant }"
                @click="selectVariant(null)"
              >
                <img 
                  :src="product.images[0]" 
                  class="card-img-top" 
                  :alt="product.name.dk || 'Default'" 
                  style="width: 100px; height: 100px; object-fit: cover;"
                />
                <div class="card-body text-center">
                  <p class="card-text">{{ product.color }}</p>
                </div>
              </div>
              <div 
                v-for="variant in product.variant" 
                :key="variant.color" 
                class="variant-card card m-2 p-2"
                :class="{ 'border-primary': selectedVariant && selectedVariant.color === variant.color }"
                @click="selectVariant(variant)"
              >
                <img 
                  :src="variant.images[0]" 
                  class="card-img-top" 
                  :alt="variant.color" 
                  style="width: 100px; height: 100px; object-fit: cover;"
                />
                <div class="card-body text-center">
                  <p class="card-text">{{ variant.color }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetailPage',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        selectedImage: null,
        selectedSize: '',
        selectedVariant: null,
      };
    },
    methods: {
      selectVariant(variant) {
        this.selectedVariant = variant;
        this.selectedImage = variant ? variant.images[0] : this.product.images[0];
        this.selectedSize = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .img-thumbnail {
    cursor: pointer;
  }
  .variant-card {
    cursor: pointer;
    width: 120px;
  }
  .variant-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .border-primary {
    border: 2px solid #007bff;
  }
  </style>