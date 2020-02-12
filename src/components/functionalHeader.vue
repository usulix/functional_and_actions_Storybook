<template functional>
    <thead>
    <tr>
        <th v-for="item in props.tableHeaders"
            v-bind:key="item.id"
            :style="{width: item.width || '150px', cursor: item.id !== 5 ? 'pointer' : 'inherit'}"
            :class="{ active: item.sorted }"
            @click="() => {if (typeof item.sorted !== 'undefined') {parent.$emit('sort', item.id)}}">
            {{item.label}}
        </th>
    </tr>
    </thead>
</template>

<script>
export default {
    props: {
        tableHeaders: {
            type    : Array,
            required: true
        }
    }
}
</script>

<style scoped>
    th {
        border-top: none !important;
    }

    .active {
        border-bottom-color: #9da1a5;
    }
</style>