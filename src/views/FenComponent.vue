<template>
  <div class="fen-component">
    <div class="fen-component__title"><a href="https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation">FEN String</a></div>
    <div class="fen-component__content">
      {{fenString}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'fen-component',
  props:[
    'fenString'
  ],
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
.fen-component {

  &__title {
    font-size: 1.3em;
    padding-bottom: 10px;

  }

  &__content {

  }
}

/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {

  .fen-component {
    &__title {

    }

    &__content {

    }
  }
}

</style>

