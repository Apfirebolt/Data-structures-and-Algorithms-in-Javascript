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
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, iste.
    </Dialog>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      display: false,
    };
  },
};
</script>
