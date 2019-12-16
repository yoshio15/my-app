<template>
  <v-dialog v-model="postDialog" max-width="600px" class="mx-auto">
    <v-card>
      <v-card-title class="grey lighten-5 justify-center">投稿を新規作成する</v-card-title>
      <v-divider class="mb-6"></v-divider>
      <v-card-text class="mb-n6">
        <v-text-field outlined v-model="postContent.title" placeholder="投稿のタイトル"></v-text-field>
        <v-textarea outlined v-model="postContent.content" placeholder="投稿したい内容を入力して下さい"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close()">閉じる</v-btn>
        <v-btn color="blue darken-1" text @click="post(); close()">投稿する</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      postDialog: false,
      postContent: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    open() {
      this.postDialog = true;
    },
    close() {
      this.postDialog = false;
    },
    post() {
      this.$emit('send', this.postContent);
    }
  }
};
</script>