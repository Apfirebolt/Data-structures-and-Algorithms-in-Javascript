<template>
  <div class="hello">
    <Dialog></Dialog>
    <Button label="Submit" @click="display = true" />
    <p class="title">Search Page</p>
    <Dialog header="Porblem Input and Output" :visible.sync="display">
      <input-modal
        @action="program1"
        question="Search for an element in a given array"
        multiline="true"
        instruction="Enter only digits separated by spaces"
      />
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
import SearchPrograms from "../data/searchPrograms";

export default {
  name: "Search",
  components: {
    InputModal,
  },
  mounted() {
    this.programs = SearchPrograms;
  },
  data() {
    return {
      display: false,
      programs: [],
      showResult: false,
      result: null,
      inputArray: [],
      inputString: "",
    };
  },
  methods: {
    // Linear Search  
    program1(value) {
      this.inputArray = value.split(" ");
      let elementToFind = 10;
      let isFound = -1;

      let i = 0;
      while (i < this.inputArray.length) {
        if (parseInt(this.inputArray[i]) === elementToFind) {
          isFound = i;
          break;
        }
        i += 1;
      }
      if (isFound === -1) {
        this.result = "Element not found in the array";
      } else {
        this.result = "Element found at index " + isFound;
      }
      this.showResult = true;
      this.display = false;
    },
  },
};
</script>
