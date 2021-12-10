<template>
  <div class="hello">
    <Sidebar :visible.sync="isSidebarVisible">
      <ul>
        <li v-for="item in items" :key="item.link">
          <router-link :to="{ name: item.link}">{{ item.text }}</router-link>
        </li>
      </ul>
    </Sidebar>

    <Button icon="pi pi-arrow-right" @click="isSidebarVisible = true" />
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      isSidebarVisible: true,
      items: [
        {
          text: "Basics",
          link: "Basics",
        },
        {
          text: "Classes",
          link: "Classes",
        },
        {
          text: "Array",
          link: "Array",
        },
        {
          text: "Linked Lists",
          link: "LinkedList",
        },
        {
          text: "Closures",
          link: "Closures",
        },
        {
          text: "Dynamic Programming",
          link: "DynamicProgramming",
        },
        {
          text: "Stack",
          link: "Stack",
        },
        {
          text: "Queue",
          link: "Queue",
        },
        {
          text: "Sorting",
          link: "Sorting",
        },
        {
          text: "Math",
          link: "Math",
        },
        {
          text: "String",
          link: "String",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
   list-style-type: none;
   padding: 0; 
}

li {
    background: #CBA;
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 5px;
}

li a {
    color: mintcream;
    text-decoration: none;
}
</style>
