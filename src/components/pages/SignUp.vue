<template>
  <div>
    <h2>ユーザー登録</h2>
    <v-text-field placeholder="メールアドレス" outlined v-model="email"></v-text-field>
    <v-text-field placeholder="パスワード" outlined v-model="password"></v-text-field>
    <v-row>
      <v-btn @click="signUp">登録</v-btn>
      <v-btn :to="{name: 'SignIn'}">ログイン画面へ戻る</v-btn>
    </v-row>
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
          console.log(response)
          alert('SUCCESS!')
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(error)
          console.log(errorCode)
          console.log(errorMessage)
        });
    }
  }
};
</script>