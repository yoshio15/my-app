<template>
  <v-dialog v-model="deleteDialog" max-width="400px" class="mx-auto">
    <v-card>
      <v-card-title class="grey lighten-5 justify-center">削除確認</v-card-title>
      <v-divider class="mb-6"></v-divider>
      <v-card-text class="mb-n6 text-center text--primary">投稿のタイトル「{{ title }}」<br>本当にこの投稿を削除してもよろしいですか？</v-card-text>
      <v-card-actions class="mt-3">
        <v-spacer></v-spacer>
        <v-btn color text @click="close()">× 閉じる</v-btn>
        <v-btn color="error darken-1" text @click="del()">削除する</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      deleteDialog: false,
      name: "",
      title: ""
      };
  },
  methods: {
    open(post) {
      this.name = post.name;
      this.title = post.fields.title.stringValue
      this.deleteDialog = true;
    },
    close() {
      this.deleteDialog = false;
    },
    del() {
      this.$emit("del", this.name);
      this.close();
    }
  }
};
</script>