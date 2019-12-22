<template>
  <!-- ※divで囲わないとv-app-barの高さが固定されない -->
  <div>
    <v-app-bar color="teal" clipped-left dark app>
      <v-app-bar-nav-icon @click="toggleSideBar" v-if="isSignedIn"></v-app-bar-nav-icon>
      <v-toolbar-title>Yoshio App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="signOut" v-if="isSignedIn">ログアウト</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import firebase from "firebase";
import auth from "@/utils/auth";
export default {
  name: "Header",
  methods: {
    toggleSideBar: function() {
      this.$eventHub.$emit("toggleSideBar");
    },
    signOut: function() {
      (async () => {
        await auth().signOut();
        this.$store.dispatch("doSetUser", {});
        this.$store.dispatch("doSetIsSignedIn", false);
        this.$router.push({ name: "SignIn" });
      })();
    }
  },
  computed: {
    isSignedIn: function() {
      return this.$store.getters.isSignedIn;
    }
  }
};
</script>