<template>
    <div class="min-h-screen bg-info flex items-center justify-center">
        <div class="max-w-2xl bg-white shadow-lg rounded-lg p-8">
            <h1 class="text-4xl font-bold text-primary mb-4">Linked List Sample Questions</h1>
            <p class="text-dark leading-relaxed mb-4">
                Practice and improve your understanding of linked lists with these sample questions:
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
    "Implement a singly linked list.",
    "Reverse a linked list.",
    "Detect a cycle in a linked list.",
    "Find the middle of a linked list.",
    "Merge two sorted linked lists.",
    "Remove the N-th node from the end of a linked list.",
    "Check if a linked list is a palindrome.",
    "Remove duplicates from a sorted linked list.",
    "Find the intersection point of two linked lists.",
    "Implement a doubly linked list."
]);
</script>

<style scoped></style>