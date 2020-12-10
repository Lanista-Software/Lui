<template>
  <div class="filter-group shadow radius-05 bg-light">
    <l-button
      v-for="(btn, i) in buttons"
      :key="i"
      :bg-variant="active === btn.category ? btn.active : btn.deactive"
      :text-variant="btn.textVariant"
      size="sm"
      @click="activeEmit(btn.category)"
      >{{ btn.text }}</l-button
    >
  </div>
</template>

<script>
import LButton from "./LButton.vue";
export default {
  name: "FilterGroup",
  components: { LButton },
  props: {
    buttons: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      active: null
    };
  },
  methods: {
    activeEmit(i) {
      this.active = i;
      this.$emit("active", i);
    }
  }
};
</script>
<style lang="scss" scoped>
.filter-group {
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
