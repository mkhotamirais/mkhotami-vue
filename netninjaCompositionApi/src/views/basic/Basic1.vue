<template>
  <h1>basic1</h1>
  <div>
    <ul>
      <li>name: {{ name }}</li>
      <li>age: {{ age }}</li>
    </ul>
    <button @click="changeName" class="underline">change name</button>
  </div>
  <div>
    <p ref="p">Content Ref p</p>
    <button @click="showP" class="underline">show ref p</button>
  </div>
  <div>
    <div>nameRef: {{ personRef.name }} - ageRef: {{ personRef.age }}</div>
    <button @click="changeRef" class="underline">changeRef</button>
  </div>
  <div>
    <div>nameReactive: {{ personReactive.name }} - ageReactive: {{ personReactive.age }}</div>
    <button @click="changeReactive" class="underline">changeReactive</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  name: "Home",
  setup() {
    console.log("setup");

    // not reactive
    let name = "ahmad";
    let age = 20;
    const changeName = () => (name = "abdul");

    // ref for dom
    const p = ref(null);
    const showP = () => {
      console.log(p, p.value);
      p.value.textContent = "change text content p";
      p.value.classList.add("font-bold");
    };

    // ref for reactive
    const personRef = ref({ name: "ayu", age: 20 });
    const changeRef = () => {
      personRef.value.name = "siti";
      personRef.value.age = age++;
    };

    // reactive
    const personReactive = reactive({ name: "ahmad ayu", age: 20 });
    const changeReactive = () => {
      personReactive.name = "abdul siti";
      personReactive.age = age++;
    };

    // reactive vs ref
    // you can't use primitive values inside reactive
    const nameRef = ref("ahmad");
    // you can't do bellow
    // const nameReactive = reactive("abdul");
    // const ageReactive = reactive(20);

    return { name, age, changeName, p, showP, personRef, changeRef, personReactive, changeReactive };
  },
};
</script>
