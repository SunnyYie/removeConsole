<script setup lang="ts">
import { ref } from "vue"

defineProps<{ msg: string }>()

const count = ref(0)

function onClick() {
  count.value++
  console.log(
    "%cConsole Log Test===>>>: ",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    "Console Log Test"
  )
}

console.log(
  "%cConsole Log Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "Console Log Test"
)


console.warn(
  "%cConsole warn Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "Console warn Test"
)

console.error(
  "%cConsole error Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "Console error Test"
)

console.info(
  "%cConsole info Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "Console info Test"
)

console.log(
  "%cConsole Log Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "这个不删"
)
console.log(
  "%cConsole Log Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "noRemove"
)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="onClick">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
