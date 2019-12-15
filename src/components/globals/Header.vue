<template>
  <!-- ※divで囲わないとv-app-barの高さが固定されない -->
  <div>
    <v-app-bar color="teal" dark>
      <v-app-bar-nav-icon @click="toggleSideBar"  v-if="isSignedIn"></v-app-bar-nav-icon>
      <v-toolbar-title>Yoshio App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="signOut" v-if="isSignedIn">ログアウト</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Header",
  methods: {
    toggleSideBar: function() {
      this.$eventHub.$emit('toggleSideBar')
    },
    // TODO: Firebaseにアクセスする系共通化
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(response => {
          console.log(response);
          this.$store.dispatch('doSetUser', {})
          this.$store.dispatch('doSetIsSignedIn', false);
          this.$router.push({ name: "SignIn" });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    isSignedIn: function() { return this.$store.getters.isSignedIn }
  }
}
</script>