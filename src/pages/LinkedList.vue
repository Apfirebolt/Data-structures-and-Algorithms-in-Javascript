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
      Linked List
    </Dialog>
  </div>
</template>

<script>
export default {
  name: "LinkedList",
  data() {
    return {
      display: false,
    };
  },
};
</script>
