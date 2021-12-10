<template>
  <div id="app">
    <header-component />
    <sidebar-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
import SidebarComponent from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  }
};
</script>
