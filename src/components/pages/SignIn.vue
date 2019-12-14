<template>
  <div>
    <h2>ログイン</h2>
    <v-text-field placeholder="メールアドレス" outlined v-model="email"></v-text-field>
    <v-text-field placeholder="パスワード" outlined v-model="password"></v-text-field>
    <v-row>
      <v-btn @click="signIn">ログイン</v-btn>
      <v-btn :to="{name: 'SignUp'}">新規登録</v-btn>
    </v-row>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // TODO: Firebaseにアクセスする系共通化
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(response => {
          console.log(response);
          this.$router.push({ name: "Top" });
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(error);
          console.log(errorCode);
          console.log(errorMessage);
          alert("FAILED!");
        });
    }
  }
};
</script>