<template>
  <div class="mt-12">
    <!-- ログインバリデーション追加 -->
    <v-card width="600px" class="mx-auto" :loading="isLoading">
      <v-card-title class="grey lighten-5 justify-center">Login</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-5">
        <v-text-field placeholder="メールアドレス" outlined v-model="email"></v-text-field>
      </v-card-text>
      <v-card-text class="my-n5">
        <v-text-field placeholder="パスワード" outlined v-model="password" type="password"></v-text-field>
      </v-card-text>
      <v-card-actions class="d-flex justify-space-between">
        <v-btn block large class="primary" @click="signIn">ログイン</v-btn>
      </v-card-actions>
      <v-card-text>
        初めての方は
        <router-link :to="{name: 'SignUp'}">コチラ</router-link>から
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },
  methods: {
    // TODO: Firebaseにアクセスする系共通化
    signIn: function() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user);
          this.$store.dispatch("doSetUser", user);
          this.$store.dispatch("doSetIsSignedIn", true);
          this.$router.push({ name: "Top" });
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(error);
          console.log(errorCode);
          console.log(errorMessage);
          alert("FAILED!");
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>