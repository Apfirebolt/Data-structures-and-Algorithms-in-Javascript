<template>
  <div class="hello">
    <Dialog></Dialog>
    <Button label="Submit" @click="display = true" />
    <Dialog header="Porblem Input and Output" :visible.sync="display">
      <input-modal
        @action="simpleArray"
        question="Simple Stack Demo"
        instruction="Enter only digits separated by spaces"
      />
    </Dialog>
    {{ arrayData }}
    <Dialog header="Program Result" :visible.sync="showResult">
      <p>{{ result }}</p>
    </Dialog>
  </div>
</template>

<script>
import InputModal from "../components/InputModal.vue";
import ArrayPrograms from "../data/arrayPrograms";

export default {
  name: "StackPage",
  components: {
    InputModal,
  },
  mounted() {
    this.arrayData = ArrayPrograms;
    console.log('array data ', this.arrayData);
  },
  data() {
    return {
      display: false,
      arrayData: [],
      showResult: false,
      result: null,
    };
  },
  methods: {
    simpleArray(value) {
      this.result = value.split(" ");
      this.showResult = true;
      this.display = false;
    },
  },
};
</script>
