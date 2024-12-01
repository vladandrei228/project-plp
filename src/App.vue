<template>
  <div>
    <MainMenu :categories="categories" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 sidebar bg-dark">
          <SidebarMenu :categories="categories" />
        </div>
        <div class="col-md-9 offset-md-3 content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import SidebarMenu from './components/SidebarMenu.vue';
import categoriesData from '@/assets/data.json';

export default {
  name: "App",
  components: {
    MainMenu,
    SidebarMenu,
  },
  data() {
    return {
      categories: categoriesData.categories,
    };
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 56px; 
  bottom: 0;
  width: 250px;
  overflow-y: auto;
  padding-top: 20px;
}

.content {
  margin-top: 20px;
}

.container-fluid {
  padding-left: 0;
  padding-right: 0;
}
</style>