<template>
  <div class="promotion-card">
    <a :href="promotion.link" class="d-block">
      <img 
        :src="promotion.image.imageUrl || 'https://via.placeholder.com/400x400'" 
        :alt="promotion.image.alt || 'Promotion'" 
        class="promotion-img"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'PromotionCard',
  props: {
    promotion: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.promotion-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.promotion-card {
  position: relative;
  overflow: hidden;
}
</style>
