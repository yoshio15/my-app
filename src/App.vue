<template>
  <v-app>
    <Header></Header>
    <SideBar></SideBar>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/globals/Header.vue";
import SideBar from "@/components/globals/SideBar";
export default {
  name: "App",
  components: {
    Header,
    SideBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
