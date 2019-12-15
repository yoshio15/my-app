<template>
  <!-- TODO 削除ボタンの実装, 投稿レイアウトの修正 -->
  <v-content>
    <v-container width="80%">
      <v-row>
        <v-col>
          <!-- TODO: ダイアログのコンポーネント化 -->
          <v-dialog v-model="postDialog" max-width="600px" class="mx-auto">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" class="primary">+ 投稿を新規作成する</v-btn>
            </template>
            <v-card>
              <v-card-title class="grey lighten-5 justify-center">投稿を新規作成する</v-card-title>
              <v-divider class="mb-6"></v-divider>
              <v-card-text class="mb-n6">
                <v-text-field outlined v-model="postContent.title" placeholder="投稿のタイトル"></v-text-field>
                <v-textarea outlined v-model="postContent.content" placeholder="投稿したい内容を入力して下さい"></v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="postDialog=!postDialog">閉じる</v-btn>
                <v-btn color="blue darken-1" text @click="postDialog=!postDialog; sendMsg()">投稿する</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- ダイアログEND -->
        </v-col>
      </v-row>
      <v-form></v-form>
      <v-card v-for="msg in messages" :key="msg.name" class="mb-2" outlined>
        <v-card-title>{{ msg.fields.title.stringValue}}</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="text--primary">
          <div>
            <div class="mt-2">{{ msg.fields.content.stringValue }}</div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>投稿日時：{{ msg.createTime }}</v-card-text>
      </v-card>
    </v-container>
  </v-content>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "",
      postContent: {
        title: "",
        content: ""
      },
      messages: [],
      postDialog: false
    };
  },
  created() {
    this.getMsgList();
  },
  methods: {
    getMsgList() {
      const url =
        "https://firestore.googleapis.com/v1/projects/yoshio-app/databases/(default)/documents/postContents";
      axios
        .get(url)
        .then(response => {
          this.messages = this.sortMsgByPostedTimeDesc(response.data.documents);
          console.log(this.messages);
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendMsg() {
      const url =
        "https://firestore.googleapis.com/v1/projects/yoshio-app/databases/(default)/documents/postContents";
      const data = {
        fields: {
          title: { stringValue: this.postContent.title },
          content: { stringValue: this.postContent.content }
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