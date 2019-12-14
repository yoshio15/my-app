<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-subheader>Menu</v-subheader>
      <v-list-item-group>
        <v-list-item v-for="item in sideBarItems" :key="item.id">
          <v-list-item-content>
            <v-list-item-title>
              <nav>
                <router-link :to="item.path">{{ item.title }}</router-link>
              </nav>
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