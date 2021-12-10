<template>
  <div class="hello">
    <Dialog></Dialog>
    <Button
      label="Submit"
      @click="display = true"
      icon="pi pi-check"
      iconPos="right"
    />
    <Dialog header="Array Page" :visible.sync="display">
      Basics Page
    </Dialog>
  </div>
</template>

<script>
export default {
  name: "Basics",
  data() {
    return {
      display: false,
    };
  },
};
</script>
