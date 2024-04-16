<template>
  <section class="bg-white rounded p-3">
    <h1>modal home</h1>
    <ol class="list-decimal list-inside">
      <li>components</li>
      <li>props</li>
      <li>click event modifiers: @events.modifiers</li>
      <li>slots</li>
      <li>teleport, look at index.html (and inspect element)</li>
    </ol>
    <button @click="toggleModal" class="border p-1 rounded">Open Modal</button>
    <div v-if="showModal">
      <Modal modal-title="I Am Modal Title" :modal-content="modalContent" @close="toggleModal">
        <!-- <p>content slot</p> -->
        <template v-slot:insideSlot>
          <p>slot name inside slot</p>
        </template>
        <template v-slot:notUsedSlot>
          <p>slot ini tidak muncul karena tidak digunakan</p>
        </template>
      </Modal>
    </div>
    <button @click="toggleModalTwo" class="border p-1 rounded">Open Modal two</button>
    <div v-if="showModalTwo">
      <Modal modal-title-two="I Am Modal Title Two" :modal-content-two="modalContentTwo" @close="toggleModalTwo">
        <p>slot content modal two</p>
      </Modal>
    </div>
    <button @click="toggleModalTeleport" class="border p-1 rounded">Open Modal teleport</button>
    <teleport to=".modals" v-if="showModalTeleport">
      <Modal modal-title-teleport="I Am Modal Title Teleport" @close="toggleModalTeleport">
        <p>slot content modal teleport</p>
      </Modal>
    </teleport>
  </section>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      modalContent: "Hello I am modal content",
      showModal: false,
      modalContentTwo: "Hello I am modal content two",
      showModalTwo: false,
      showModalTeleport: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
    toggleModalTeleport() {
      this.showModalTeleport = !this.showModalTeleport;
    },
  },
};
</script>
