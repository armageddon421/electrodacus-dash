<template>
    <magic-grid v-bind:gap="16" v-bind:animate="false" v-bind:maxColWidth="600">
        <slot />
    </magic-grid>
</template>

<script>

export default {
  name: 'Grid'
}
</script>

<style scoped>

.wrapper {
  margin-top: 16px;
}
</style>
