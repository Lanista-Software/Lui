<template>
  <div class="hero-two">
    <div class="hero-two-content">
      <div v-if="$slots.title" class="hero-two-content-title">
        <slot name="title"></slot>
      </div>
      <div v-if="$slots.textcontent" class="hero-two-content-textcontent">
        <slot name="textcontent"></slot>
      </div>
      <div v-if="$slots.buttons" class="hero-two-content-buttons">
        <slot name="buttons"></slot>
      </div>
    </div>
    <div v-if="$slots.default" class="hero-two-media">
      <div class="hero-two-media-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroTwo',
}
</script>

<style scoped lang="scss">
.hero-two {
  width: 100%;
  text-align: center;

  &-content {
    &-title {
      padding-bottom: 12px;
    }

    &-textcontent {
      padding-bottom: 24px;
    }

    &-buttons {
      padding-bottom: 30px;
      text-align: center;

      button {
        margin-bottom: 12px;
      }
    }
  }

  &-media {
    display: grid;
    padding: 12px;
    justify-content: center;
    grid-template-columns: auto;
    &-container {
      width: 100%;
      max-width: 566px;
      min-width: 200px;
    }
  }
}

@media ($lg) {
  .hero-two {
    text-align: left;
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 24px;

    &-content {
      display: grid;
      grid-template-rows: auto auto auto;
      justify-content: center;
      align-content: center;
      &-buttons {
        display: flex;
        padding-bottom: 30px;
        text-align: left;
        button {
          margin-bottom: 12px;
        }
      }
    }

    &-media {
      display: grid;
      justify-content: end;
      grid-template-columns: auto;
      &-container {
        width: 100%;
        max-width: 566px;
        min-width: 200px;
      }
    }
  }
}
</style>
