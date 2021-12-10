<template>
  <div class="hello">
    <Dialog></Dialog>
    <Button
      label="Submit"
      @click="display = true"
    />
    <Dialog header="Porblem Input and Output" :visible.sync="display">
      <input-modal @action="simpleCurry" question="Curry Function Demo" instruction="Enter only digits separated by spaces" />
    </Dialog>
  </div>
</template>

<script>
import InputModal from "../components/InputModal.vue";

export default {
  name: "CurryFunction",
  components: {
    InputModal,
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    simpleCurry(value) {
      console.log("Executing simple DP", value);
    },
  },
};
</script>
