<template>
  <div class="about">
    <h1>
      This is an about page. Count: {{ counter.count }}; Subitem:
      {{ counter.subitem.count }}; Is Greater of 5: {{ counter.isGreater(5) }}
    </h1>
    <button @click="onGoToHome">go to home</button>
    <button @click="onIncrement">increment</button>
  </div>
</template>

<script setup>
import { onUnmounted, onMounted } from "vue";
import { useRouter /*, useRoute*/ } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import { useLayoutStore } from "@/stores/layout";


// HOOKS
const router = useRouter();
const counter = useCounterStore();
const layout = useLayoutStore()


// HANDLERS
function onGoToHome() {
  router.push({ path: "/" });
}
function onIncrement() {
  //counter.count++
  // ACTION
  counter.increment()
  // $PATCH
  //counter.$patch({ count: counter.count + 1 });
  // $PATCH-STATE
  counter.$patch((state) => {
    state.subitem.count++;
    state.count++;
  });
}


// WATCH
counter.$subscribe(
  (mutation, state) => {
    console.log(`Change state: ${state.count}`);
  },
  { detached: true }
);

// WATCH ACTION
const unsubscribe = counter.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError, // hook if the action throws or rejects
  }) => {
    console.log(`Start "${name}" with params [${args.join(", ")}].`);
  }
);


// LIFECYCLE
// vue setup call when component is mounted
onUnmounted(() => {
  console.log("Component is unmounted.");
  unsubscribe();
});
onMounted(() => {
  console.log("Component is mounted.");
  layout.title = "Users"
})
</script>
