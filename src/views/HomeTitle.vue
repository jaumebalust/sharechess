<template>
  <div class="home-title">
    <div class="home-title__title">Share chess games easily</div>
    <div class="home-title__content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'home-title',
  data() {
    return {};
  },
  mounted() {

  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss">
.home-title {
  padding-bottom: 5vh;
  &__title {

    font-size: 2em;
  }

  &__content {

  }
}

/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {

  .home-title {
    &__title {

    }

    &__content {

    }
  }
}

</style>

