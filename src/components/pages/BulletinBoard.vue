<template>
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
        <!-- TODO: 削除ダイアログ実装 -->
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
import BulletinBoardService from "@/service/BulletinBoardService";
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
      (async () => {
        const documentsList = await BulletinBoardService().getDocumentList();
        console.log(documentsList)
        this.messages = this.sortMsgByPostedTimeDesc(documentsList).map(
          document => {
            documentsList.createTime = document.createTime.substring(0, 10);
            return document;
          }
        );
      })();
    },
    sendMsg(postContent) {
      // TODO: 以下data()プロパティに移動
      const data = {
        fields: {
          title: { stringValue: postContent.title },
          content: { stringValue: postContent.content }
        }
      }
      ;(async () => {
        await BulletinBoardService().postDocument(data);
        this.getMsgList();
      })()
    },
    deletePost(name) {
      ;(async () => {
        await BulletinBoardService().deleteDocument(name);
        this.getMsgList();
      })()
    },
    sortMsgByPostedTimeDesc(receivedMsgs) {
      return receivedMsgs.sort((a, b) => {
        return a.createTime < b.createTime ? 1 : -1;
      });
    }
  }
};
</script>