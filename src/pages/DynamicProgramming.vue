<template>
  <div class="hello">
    <Dialog></Dialog>
    <Button
      label="Submit"
      @click="display = true"
    />
    <Dialog header="Porblem Input and Output" :visible.sync="display">
      <input-modal @action="simpleDP" question="Reverse the contents of an array" instruction="Enter only digits separated by spaces" />
    </Dialog>
  </div>
</template>

<script>
import InputModal from "../components/InputModal.vue";

export default {
  name: "DynamicProgramming",
  components: {
    InputModal,
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    simpleDP(value) {
      console.log("Executing simple DP", value);
    },
  },
};
</script>
