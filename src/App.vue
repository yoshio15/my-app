<template>
  <v-app>
    <!-- ヘッダー TODO:コンポーネント化 -->
    <!-- ※divで囲わないとv-app-barの高さが固定されない -->
    <div>
      <v-app-bar color="teal" dark>
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Yoshio App</v-toolbar-title>
      </v-app-bar>
    </div>
    <!-- ヘッダー END -->
    <!-- サイドバー TODO:コンポーネント化, v-forで回す -->
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
    <!-- サイドバー END -->
    <!-- メインコンテンツ -->
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
    <!-- メインコンテンツ END -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: null
    };
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
