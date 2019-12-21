<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="primary" @click="$refs.postDialog.open()">+ 投稿を新規作成する</v-btn>
        <PostDialog @send="sendMsg" ref="postDialog"></PostDialog>
      </v-col>
    </v-row>
    <v-card v-for="msg in messages" :key="msg.name" class="mb-2" outlined>
      <v-card-title>{{ msg.fields.title.stringValue}}</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="text--primary">
        <div class="mt-2">{{ msg.fields.content.stringValue }}</div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="d-flex justify-space-between">
        <span>投稿日：{{ msg.createTime }}</span>
        <v-btn color="grey" small outlined @click="$refs.deleteDialog.open(msg)">
          <v-icon>mdi-trash-can-outline</v-icon>削除
        </v-btn>
      </v-card-text>
    </v-card>
    <delete-dialog @del="deletePost" ref="deleteDialog"></delete-dialog>
  </v-container>
</template>
<script>
import PostDialog from "@/components/parts/PostDialog";
import DeleteDialog from "@/components/parts/DeleteDialog";
import BulletinBoardService from "@/service/BulletinBoardService";
export default {
  data() {
    return {
      messages: []
    };
  },
  components: { PostDialog, DeleteDialog },
  created() {
    this.getMsgList();
  },
  methods: {
    getMsgList() {
      (async () => {
        const documentsList = await BulletinBoardService().getDocumentList();
        this.messages = this.sortMsgByPostedTimeDesc(documentsList).map(
          document => {
            document.createTime = document.createTime.substring(0, 10);
            return document;
          }
        );
      })();
    },
    sendMsg(postContent) {
      const data = {
        fields: {
          title: { stringValue: postContent.title },
          content: { stringValue: postContent.content }
        }
      };
      (async () => {
        await BulletinBoardService().postDocument(data);
        this.getMsgList();
      })();
    },
    deletePost(name) {
      (async () => {
        await BulletinBoardService().deleteDocument(name);
        this.getMsgList();
      })();
    },
    sortMsgByPostedTimeDesc(receivedMsgs) {
      return receivedMsgs.sort((a, b) => {
        return a.createTime < b.createTime ? 1 : -1;
      });
    }
  }
};
</script>