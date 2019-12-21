<template>
  <div>
    <v-card width="600px" class="ma-auto">
      <v-card-title class="grey lighten-5 justify-center mt-12">User Registration</v-card-title>
      <v-divider></v-divider>
      <v-form ref="sign_up">
        <v-card-text class="mt-5">
          <v-text-field placeholder="メールアドレス" :rules="[rules.required]" outlined v-model="email"></v-text-field>
        </v-card-text>
        <v-card-text class="my-n5">
          <v-text-field placeholder="パスワード" :rules="[rules.required]" outlined v-model="password"></v-text-field>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-between">
          <v-btn block large class="primary" @click="signUp">登録</v-btn>
        </v-card-actions>
        <v-card-text>
          <router-link :to="{name: 'SignIn'}">ログイン画面に戻る</router-link>
        </v-card-text>
      </v-form>
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
      password: "",
      rules: {
        required: value => !!value || "入力必須です"
      }
    };
  },
  methods: {
    // TODO: Firebaseにアクセスする系共通化
    signUp: function() {
      if (this.$refs.sign_up.validate()) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(response => {
            console.log(response);
            alert("SUCCESS!");
          })
          .catch(error => {
            console.log(error);
            alert("REGISTRATION FAILED!");
          });
      }
    }
  }
};
</script>