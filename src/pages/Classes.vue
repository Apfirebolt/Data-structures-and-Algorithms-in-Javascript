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
      Classes Page
    </Dialog>
  </div>
</template>

<script>
export default {
  name: "Classes",
  data() {
    return {
      display: false,
    };
  },
};
</script>
