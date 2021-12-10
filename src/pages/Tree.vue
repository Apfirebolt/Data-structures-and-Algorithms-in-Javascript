<template>
  <div class="hello">
    <Dialog></Dialog>
    <Button
      label="Submit"
      @click="display = true"
    />
    <p class="--text-color-red-200"></p>
    <Dialog header="Porblem Input and Output" :visible.sync="display">
      <input-modal @action="simpleTree" question="Simple Array Demo" instruction="Enter only digits separated by spaces" />
    </Dialog>
    <Dialog header="Program Result" :visible.sync="showResult">
      <p>{{ result }}</p>
    </Dialog>
    {{ result }}
  </div>
</template>

<script>
import InputModal from "../components/InputModal.vue";

export default {
  name: "Tree",
  components: {
    InputModal,
  },
  data() {
    return {
      display: false,
      showResult: false,
      result: null
    };
  },
  methods: {
    simpleTree(value) {
      this.result = value.split(' ');
      this.showResult = true;
      this.display = false;
    },
  },
};
</script>
