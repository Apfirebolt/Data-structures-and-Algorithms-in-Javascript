<template>
  <div class="hello">
    <Dialog></Dialog>
    <Button
      label="Submit"
      @click="display = true"
      icon="pi pi-check"
      iconPos="right"
    />
    <Dialog header="Header" :visible.sync="display">
      DP Page
    </Dialog>
  </div>
</template>

<script>
export default {
  name: "DynamicProgramming",
  data() {
    return {
      display: false,
    };
  },
};
</script>
