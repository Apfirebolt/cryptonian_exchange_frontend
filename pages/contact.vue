<template>
    <NuxtLayout name="dashboard">
        <p>
            Inside the Contact Page {{ name }} {{ age }}
        </p>
    </NuxtLayout>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const age = ref(0);
const router = useRouter();

definePageMeta({
    layout: 'dashboard',
    title: 'Contact Us',
    description: 'Contact us for any queries',
});

onMounted(() => {
    name.value = 'John Doe';
    age.value = 30;

    // After 3 seconds redirect to the home page
    setTimeout(() => {
        router.push('/');
    }, 3000);

    console.log('Inside mounted hook');
});
</script>

<style scoped>
/* Add your styles here */
</style>