<template>
  <div class="document-card">
    <div class="document-card-img ">
      <img :src="img" class="radius-05 shadow" />
    </div>
    <div class="document-card-desc">
      <slot name="desc" />
    </div>
    <div class="document-card-hover radius-05 bg-dark">
      <slot name="info" />
      <slot name="button" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DocumentCard',
  props: {
    img: {
      type: String,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.document-card {
  width: 100%;
  max-width: 275px;
  max-height: 330px;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
  &-img {
    width: 100%;
    height: 100%;
  }
  &-desc {
    margin-top: 1rem;
    text-align: center;
    transition: 1s ease-in-out;
  }
  &-hover {
    z-index: 15;
    height: 100%;
    text-align: center;
    display: grid;
    grid-template-rows: auto auto;
    align-content: center;
    justify-content: center;
    gap: 0px;
    color: $white;
    opacity: 0;
    transition: 1s ease-in-out;
    width: 100%;
    top: 0px;
    position: absolute;
    button {
      margin-top: 36px;
    }
  }
}
.document-card:hover {
  .document-card-hover {
    opacity: 1;
  }
  .document-card-desc {
    opacity: 0;
  }
}
</style>
