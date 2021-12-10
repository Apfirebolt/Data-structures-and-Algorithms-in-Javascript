<template>
  <div class="hello">
    <Dialog></Dialog>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <Listbox v-model="selectedCity" :options="cities" optionLabel="name" />
    <Button label="Submit" @click="display = true" icon="pi pi-check" iconPos="right" />
    <Dialog header="Header" :visible.sync="display" >
	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, iste.
</Dialog>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
	return {
		selectedCity: null,
    display: false,
    value: '',
		cities: [
			{name: 'New York', code: 'NY'},
			{name: 'Rome', code: 'RM'},
			{name: 'London', code: 'LDN'},
			{name: 'Istanbul', code: 'IST'},
			{name: 'Paris', code: 'PRS'}
		]
	}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
