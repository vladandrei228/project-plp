<template>
    <aside class="sidebar-menu">
      <ul class="list-group">
        <SidebarMenuItem 
          v-for="category in categories.categories" 
          :key="category.id" 
          :category="category" 
        />
      </ul>
    </aside>
  </template>
  
  <script>
  import SidebarMenuItem from './SidebarMenuItem.vue';
  
  export default {
    name: 'SidebarMenu',
    components: {
      SidebarMenuItem,
    },
    props: {
      categories: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar-menu {
    color: #fff;
  }
  </style>