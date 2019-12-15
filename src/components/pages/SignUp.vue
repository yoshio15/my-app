<template>
  <div>
    <v-card width="50%" class="ma-auto">
      <v-card-title class="grey lighten-5 justify-center mt-12">User Registration</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-5">
        <v-text-field placeholder="メールアドレス" outlined v-model="email"></v-text-field>
      </v-card-text>
      <v-card-text class="my-n5">
        <v-text-field placeholder="パスワード" outlined v-model="password"></v-text-field>
      </v-card-text>
      <v-card-actions class="d-flex justify-space-between">
        <v-btn block large class="primary" @click="signUp">登録</v-btn>
      </v-card-actions>
      <v-card-text>
        <router-link :to="{name: 'SignIn'}">ログイン画面に戻る</router-link>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // TODO: Firebaseにアクセスする系共通化
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(response => {
          console.log(response);
          alert("SUCCESS!");
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(error);
          console.log(errorCode);
          console.log(errorMessage);
          alert("REGISTRATION FAILED!");
        });
    }
  }
};
</script>