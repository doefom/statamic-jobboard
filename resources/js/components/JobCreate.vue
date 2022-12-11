<template>

    <publish-form
        :title="title"
        :action="action"
        :blueprint="blueprint"
        :meta="meta"
        :values="values"
        @saved="onSaved"
    />

</template>

<script>

export default {
    props: ['title', 'action', 'blueprint', 'meta', 'values'],
    methods: {
        onSaved () {
            setTimeout(() => window.location.href = "/cp/jobboard/jobs", 500);
        },
    }
}

</script>

<style scoped>

</style>
