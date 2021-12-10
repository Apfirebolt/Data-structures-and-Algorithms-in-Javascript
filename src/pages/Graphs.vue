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
      Graph Page
    </Dialog>
  </div>
</template>

<script>
export default {
  name: "Graphs",
  data() {
    return {
      display: false,
    };
  },
};
</script>
