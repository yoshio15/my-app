<template>
  <div>
    <v-app-bar color="teal" dark>
      <v-toolbar-title>Yoshio App</v-toolbar-title>
    </v-app-bar>
    <h2 class="mt-4">Bulletin Board</h2>
    <v-container width="80%">
      <v-form>
        <v-row>
          <v-col>
            <v-text-field outlined v-model="msg"></v-text-field>
          </v-col>
          <v-col cols="2" class="mt-2">
            <v-btn @click="sendMsg">送信</v-btn>
          </v-col>
        </v-row>
        <h2>Recent Post</h2>
        <div v-for="msg in messages" :key="msg.name">
          <div class="mt-2">{{ msg.fields.msg.stringValue }}</div>
        </div>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "",
      messages: []
    };
  },
  created() {
    this.getMsgList();
  },
  methods: {
    getMsgList() {
      const url =
        "https://firestore.googleapis.com/v1/projects/yoshio-app/databases/(default)/documents/messages";
      axios
        .get(url)
        .then(response => {
          this.messages = this.sortMsgByPostedTimeDesc(response.data.documents);
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendMsg() {
      const url =
        "https://firestore.googleapis.com/v1/projects/yoshio-app/databases/(default)/documents/messages";
      const data = {
        fields: {
          msg: { stringValue: this.msg }
        }
      };
      axios
        .post(url, data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.msg = "";
      // TODO 投稿成功時に最新のリストを取得（Promise使うべきかも）
      this.getMsgList();
    },
    sortMsgByPostedTimeDesc(receivedMsgs) {
      return receivedMsgs.sort((a,b) => {
        return (a.createTime < b.createTime ? 1 : -1);
      })
    }
  }
};
</script>