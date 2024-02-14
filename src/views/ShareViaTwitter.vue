<template>
  <div class="share-via-twitter">
    <div class="share-via-twitter__title"></div>
    <div class="share-via-twitter__content">
      <div id="tweet-container"></div>

    </div>
  </div>
</template>

<script>
import TwitterButton from 'vue-share-buttons/src/components/TwitterButton';
//<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="Check out this chess board..." :data-url="shareUrl" data-show-count="false">Tweet</a>
export default {
  name: 'share-via-twitter',
  props: ['fenString'],
  data() {
    return {
      button:null
    };
  },
  mounted() {
    setTimeout(()=>{
      this.regenerateButton()
    },1000)

  },
  methods: {
    regenerateButton(){
      var container = document.getElementById("tweet-container")
      container.innerHTML = ''
      twttr.widgets.createShareButton(
        this.shareUrl,
        document.getElementById("tweet-container"),
        {
          size: "large",
          text: this.text,
          via: "sharechess1",
          related: "twitterapi,twitter"
        }
      );
    }
  },
  computed: {
    shareUrl() {
      return encodeURI('https://sharechess.jaumebalust.com/?fen=' + this.fenString);
    },
    text() {
      return 'Check out this chess board...';
    },
  },
  watch:{
    fenString(){
      this.regenerateButton()
    }
  },
  components: {
    TwitterButton,
  },
};
</script>
<style lang="scss">
.share-via-twitter {

  &__title {

  }

  &__content {

  }
}

/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {

  .share-via-twitter {
    &__title {

    }

    &__content {

    }
  }
}

</style>

