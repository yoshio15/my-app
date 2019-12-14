<template>
<!-- TODO 削除ボタンの実装 -->
  <v-content>
    <v-container width="80%">
      <h2 class="mt-4">Bulletin Board</h2>
      <v-form>
        <v-row>
          <v-col>
            <v-text-field outlined v-model="msg"></v-text-field>
          </v-col>
          <v-col cols="2" class="mt-2">
            <v-btn @click="sendMsg">送信</v-btn>
          </v-col>
        </v-row>
        <v-card outlined>
          <v-card-title class="justify-center">Recent Post</v-card-title>
          <v-card-text class="text--primary">
            <div v-for="msg in messages" :key="msg.name">
              <div class="mt-2">{{ msg.fields.msg.stringValue }}</div>
              <v-divider></v-divider>
            </div>
          </v-card-text>
        </v-card>
      </v-form>
    </v-container>
  </v-content>
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
          this.getMsgList();
        })
        .catch(error => {
          console.log(error);
        });
      this.msg = "";
      // TODO 投稿成功時に最新のリストを取得（Promise使うべきかも）
      // this.getMsgList();
    },
    sortMsgByPostedTimeDesc(receivedMsgs) {
      return receivedMsgs.sort((a, b) => {
        return a.createTime < b.createTime ? 1 : -1;
      });
    }
  }
};
</script>