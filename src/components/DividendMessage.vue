<script setup>
import {
  ref, defineProps, defineEmits,
} from 'vue';

const props = defineProps({
  estimated: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['update:checked']);
const isCheckedBox = ref(props.isChecked);

const handleCheckbox = () => {
  emit('update:checked', isCheckedBox.value);
};

</script>

<template>
  <article>
    <img
      src="../assets/ice-axe-icon.svg"
      alt="ice axe icon"/>
    <section>
      <p>Members get an estimated <b>{{ estimated }}</b> back on this item.</p>
      <div>
        <input type="checkbox"
          v-model="isCheckedBox"
          @change="handleCheckbox"
          aria-label="Add a lifetime membership of $30"
          />
        <p>Add a <a href="">lifetime membership</a> for a <b>one-time fee</b> of $30 </p></div>
    </section>
  </article>
</template>
