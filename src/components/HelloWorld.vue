<template>
  <div>
    <v-app-bar color="teal" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Yoshio Store</v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-app-bar>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list>
        <v-subheader>CONTENTS</v-subheader>
        <v-list-item-group color="teal" v-model="items">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>hogehoge</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      drawer: null,
      items: [{ text: "hogehoge" }, { text: "hogehoge" }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
