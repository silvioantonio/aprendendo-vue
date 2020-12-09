<template>
    <div class="tasks">
        <template>
            <div v-for="(task, i) in tasks" :key="task.name"
            @task-deleted="$emit('task-deleted', i)"
            @task-state-change="$emit('task-state-changed', i)">
                {{task.name}}
            </div>
        </template>
    </div>
</template>
<script>
export default {
    props:{
        tasks: {type: Array, required: true}
    }
}
</script>