<template>
  <div class="container mb-3">
    <form>
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <label for="" class="form-label">Page title</label>
            <input type="text" class="form-control" v-model="pageTitle" />
          </div>
          <div class="mb-2">
            <label for="" class="form-label">Content</label>
            <textarea class="form-control" rows="5" v-model="content"></textarea>
          </div>
        </div>
        <div class="col">
          <div class="mb-2">
            <label for="" class="form-label">Link Text</label>
            <input type="text" class="form-control" v-model="linkText" />
          </div>
          <div class="mb-2">
            <label for="" class="form-label">Link Url</label>
            <input type="text" class="form-control" v-model="linkUrl" />
          </div>
          <div class="mb-2">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" v-model="published" />
              <label for="gridCheck1" class="form-check-label">published</label>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <button class="btn btn-primary" :disabled="isFormValid" @click.prevent="submitForm">Create Page</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["pageCreated"],
  computed: {
    isFormValid() {
      return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
    },
  },
  data() {
    return {
      pageTitle: "",
      content: "",
      linkText: "",
      linkUrl: "",
      published: true,
    };
  },
  methods: {
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert("Please fill the form");
        return;
      }
      this.pageCreated({
        pageTitle: this.pageTitle,
        content: this.content,
        link: {
          text: this.linkText,
          url: this.linkUrl,
        },
        published: this.published,
      });
      (this.pageTitle = ""), (this.content = ""), (this.linkText = ""), (this.linkUrl = ""), (this.published = true);
    },
  },
};
</script>

<style></style>
