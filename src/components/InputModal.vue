<template>
  <div class="hello">
    <h3>{{ question }}</h3>  
    <p>{{ instruction }}</p>
    <Textarea v-model="value" :autoResize="true" rows="5" cols="50" />
    <p>{{ output }}</p>
    <Button
      label="Submit"
      class="p-button-secondary"
      @click.prevent="confirmAction"
    />
  </div>
</template>

<script>
export default {
  name: "InputModalComponent",
  props: {
    question: {
      type: String,
      required: false,
      default: "",
    },
    instruction: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      selectedCity: null,
      display: false,
      value: "",
      output: null,
    };
  },
  methods: {
    confirmAction() {
      this.$emit("action", this.value);
    },
  },
};
</script>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
}
</style>
