<template>
    <li class="list-group-item bg-dark text-white">
      {{ category.name.en }}
      <ul v-if="category.categories && category.categories.length" class="list-group list-group-flush">
        <SidebarMenuItem 
          v-for="subCategory in category.categories" 
          :key="subCategory.id" 
          :category="subCategory" 
        />
      </ul>
    </li>
  </template>
  
  <script>
  export default {
    name: 'SidebarMenuItem',
    props: {
      category: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .list-group-item {
    cursor: pointer;
    border: none;
  }
  .list-group-flush .list-group-item {
    padding-left: 20px;
  }
  </style>