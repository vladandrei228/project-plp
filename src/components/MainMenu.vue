<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">BESTSELLER</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="category in categories.categories" :key="category.id">
              <a class="nav-link" href="#">{{ category.name.en }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'MainMenu',
    props: {
      categories: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar-nav .nav-item .nav-link {
    cursor: pointer;
  }
  </style>