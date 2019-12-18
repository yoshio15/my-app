<template>
  <!-- TODO 削除ボタンの実装 -->
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="primary" @click="$refs.postDialog.open()">+ 投稿を新規作成する</v-btn>
        <PostDialog @send="sendMsg" ref="postDialog"></PostDialog>
      </v-col>
    </v-row>
    <!-- TODO: 各投稿の高さを固定して「続きを読む」追加 -->
    <v-card v-for="msg in messages" :key="msg.name" class="mb-2" outlined>
      <v-card-title>{{ msg.fields.title.stringValue}}</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="text--primary">
        <div class="mt-2">{{ msg.fields.content.stringValue }}</div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="d-flex justify-space-between">
        <span>投稿日：{{ msg.createTime }}</span>
        <v-btn color="grey" small outlined @click="deletePost(msg.name)">
          <v-icon>mdi-trash-can-outline</v-icon>削除
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
import PostDialog from "@/components/parts/PostDialog";
export default {
  data() {
    return {
      messages: []
    };
  },
  components: { PostDialog },
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
          this.messages = this.sortMsgByPostedTimeDesc(
            response.data.documents
          ).map(document => {
            console.log(document);
            document.createTime = document.createTime.substring(0, 10);
            return document;
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendMsg(postContent) {
      const url =
        "https://firestore.googleapis.com/v1/projects/yoshio-app/databases/(default)/documents/postContents";
      const data = {
        fields: {
          title: { stringValue: postContent.title },
          content: { stringValue: postContent.content }
        }
      };
      axios
        .post(url, data)
        .then(response => {
          console.log(response);
          // TODO: async-awaitの式変更する
          this.getMsgList();
        })
        .catch(error => {
          console.log(error);
        });
    },
    deletePost(name) {
      const baseUrl = 'https://firestore.googleapis.com/v1/'
      console.log(name);
      axios
        .delete(baseUrl + name)
        .then(response => {
          console.log(response);
          this.getMsgList();
        })
        .catch(error => {
          console.log(error);
        });
    },
    sortMsgByPostedTimeDesc(receivedMsgs) {
      return receivedMsgs.sort((a, b) => {
        return a.createTime < b.createTime ? 1 : -1;
      });
    }
  }
};
</script>