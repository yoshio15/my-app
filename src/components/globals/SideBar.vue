<template>
  <v-navigation-drawer v-model="drawer" v-if="$store.getters.isSignedIn" app>
    <v-list>
      <v-subheader>Menu</v-subheader>
      <v-list-item-group>
        <v-list-item v-for="item in sideBarItems" :key="item.id" :to="item.path">
            <v-list-item-content>
              <v-list-item-title v-text="item.title">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      sideBarItems: [
        { id: 1, title: 'Top', path: { name: 'Top'} },
        { id: 2, title: 'BulletinBoard', path: { name: 'BulletinBoard'} },
        { id: 3, title: 'DirectMessage', path: { name: 'DirectMessage'} }
      ]
    };
  },
  created() {
    this.$eventHub.$on("toggleSideBar", () => {
      this.drawer = !this.drawer;
    });
  }
};
</script>