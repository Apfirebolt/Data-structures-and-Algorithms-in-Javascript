<template>
    <div class="min-h-screen bg-info flex items-center justify-center">
        <div class="max-w-2xl bg-white shadow-lg rounded-lg p-8">
            <h1 class="text-4xl font-bold text-primary mb-4">Array Sample Questions</h1>
            <p class="text-dark leading-relaxed mb-4">
                Practice and improve your understanding of arrays with these sample questions:
            </p>
            <ul class="list-disc pl-6 mb-4 text-dark">
                <li>Find the maximum and minimum element in an array.</li>
                <li>Reverse an array in place.</li>
                <li>Find the "Kth" largest element in an array.</li>
                <li>Remove duplicates from a sorted array.</li>
                <li>Find the subarray with the maximum sum (Kadane’s Algorithm).</li>
            </ul>
            <button class="bg-primary text-white px-4 py-2 rounded hover:bg-green-700">
                Try More Questions
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArrayScreen",
};
</script>

<style scoped></style>