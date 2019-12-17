<template>
  <v-dialog v-model="postDialog" max-width="600px" class="mx-auto">
    <v-card>
      <v-card-title class="grey lighten-5 justify-center">投稿を新規作成する</v-card-title>
      <v-divider class="mb-6"></v-divider>
      <v-card-text class="mb-n6">
        <v-form ref="post">
          <v-text-field
            outlined
            v-model="postContent.title"
            :rules="[rules.required]"
            placeholder="投稿のタイトル"
          ></v-text-field>
          <v-textarea
            outlined
            v-model="postContent.content"
            counter="140"
            :rules="[rules.required, rules.max140]"
            placeholder="投稿したい内容を入力して下さい"
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close()">閉じる</v-btn>
        <v-btn color="blue darken-1" text @click="post()">投稿する</v-btn>
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
      },
      rules: {
        required: value => !!value || "入力必須です",
        max140: value => value.length <= 140 || "140字以内で入力して下さい"
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
      if (this.$refs.post.validate()) {
        this.$emit("send", this.postContent);
        this.close();
      }
    }
  }
};
</script>