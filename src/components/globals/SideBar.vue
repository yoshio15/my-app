<template>
  <!-- TODO:v-forで回す -->
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-subheader>Menu</v-subheader>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <nav>
                <router-link :to="{name: 'Top'}">Top</router-link>
              </nav>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <nav>
                <router-link :to="{name: 'BulletinBoard'}">BulletinBoard</router-link>
              </nav>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <nav>
                <router-link :to="{name: 'DirectMessage'}">DirectMessage</router-link>
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
      drawer: null
    };
  },
  created() {
    this.$eventHub.$on("toggleSideBar", () => {
      this.drawer = !this.drawer;
    });
  }
};
</script>