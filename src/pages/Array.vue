<template>
  <div class="hello">
    <Dialog></Dialog>
    <Button
      label="Submit"
      @click="display = true"
    />
    <p class="title">Array Page</p>
    <Dialog header="Porblem Input and Output" :visible.sync="display">
      <input-modal @action="simpleArray" question="Simple Array Demo" instruction="Enter only digits separated by spaces" />
    </Dialog>
    {{ programs }}
    <Dialog header="Program Result" :visible.sync="showResult">
      <p>{{ result }}</p>
    </Dialog>
    {{ result }}
  </div>
</template>

<script>
import InputModal from "../components/InputModal.vue";
import ArrayPrograms from "../data/arrayPrograms";

export default {
  name: "Array",
  components: {
    InputModal,
  },
  mounted() {
      this.programs = ArrayPrograms;
  },
  data() {
    return {
      display: false,
      programs: [],
      showResult: false,
      result: null
    };
  },
  methods: {
    simpleArray(value) {
      this.result = value.split(' ');
      this.showResult = true;
      this.display = false;
    },
  },
};
</script>
