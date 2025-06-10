<template>
    <div class="min-h-screen bg-info flex items-center justify-center">
        <div class="max-w-2xl bg-white shadow-lg rounded-lg p-8">
            <h1 class="text-4xl font-bold text-primary mb-4">Graph Sample Questions</h1>
            <p class="text-dark leading-relaxed mb-4">
                Practice and improve your understanding of graphs with these sample questions:
            </p>
            <ul class="list-disc pl-6 mb-4 text-dark">
                <li v-for="(question, idx) in questions" :key="idx">{{ question }}</li>
            </ul>
            <button class="bg-primary text-white px-4 py-2 rounded hover:bg-green-700">
                Try More Questions
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const questions = ref([
    "Implement Breadth-First Search (BFS) for a graph.",
    "Implement Depth-First Search (DFS) for a graph.",
    "Detect a cycle in an undirected graph.",
    "Detect a cycle in a directed graph.",
    "Find the shortest path in an unweighted graph (BFS).",
    "Find the shortest path in a weighted graph (Dijkstra’s Algorithm).",
    "Check if a graph is bipartite.",
    "Find the number of connected components in a graph.",
    "Topological sort of a directed acyclic graph (DAG).",
    "Clone a graph."
]);
</script>

<style scoped></style>