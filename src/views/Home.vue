<template>
  <div class="full-width">
    <home-title/>
    <div class="chess-board-home">
      <div>
        <chess-board id="mainBoard"
                     draggable-pieces
                     :style="'width: '+dynamicWidth+'px'"
        ></chess-board>

        <div>
          <a href="https://www.buymeacoffee.com/jaumebalust"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jaumebalust&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"></a>
        </div>

        <share-via-twitter :fenString="fenString"/>
      </div>

      <div>
        <share-via-whatsapp :fenString="fenString"/>

        <fen-component :fenString="fenString"/>
        <qr-component :fenString="fenString"/>
        <div class="restart-board">
          <button class="pure-material-button-contained" @click="restartBoard">Restart board</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChessBoard from 'chessboard-element';
import HomeTitle from '@/views/HomeTitle';
import FenComponent from '@/views/FenComponent';
import QrComponent from '@/views/QrComponent';
import ShareViaWhatsapp from '@/views/ShareViaWhatsapp';
import ShareViaTwitter from '@/views/ShareViaTwitter';

export default {
  name: 'Home',
  data() {
    return {
      board: null,
      fenString: '',

    };
  },
  mounted() {
    const This = this;
    this.board = document.querySelector('#mainBoard');
    // check for a FEN
    if (!this.fen) {
      this.board.start();
    } else {
      this.board.setPosition(this.fen);
    }
    This.fenString = This.board.fen();
    This.board.addEventListener('change', (e) => {
      setTimeout(() => {
        This.fenString = This.board.fen();
        console.log('event', This.board.fen());
      }, 300);
    });
  },
  methods: {
    restartBoard() {
      this.board.start();
    },


  },
  computed: {
    isMobile() {
      return window.innerWidth <= 800
    },
    fen() {
      if (!this.$route.query.fen) {
        return false;
      }
      return decodeURI(this.$route.query.fen);
    },
    dynamicWidth() {
      if (window.innerWidth < 350) {
        return 300;
      }
      if (window.innerWidth < 400) {
        return 350;
      }
      return 400;
    },
  },
  components: {
    ShareViaTwitter,
    ShareViaWhatsapp,
    QrComponent,
    FenComponent,
    HomeTitle,
    ChessBoard,
  },
};
</script>
<style lang="scss">
.affiliate-links-mobile{
  display: flex;

  justify-content: space-evenly;
}

.affiliate-links-desktop{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
:root {
 --light-color:#fff !important;
 --dark-color:#000 !important;
}

.full-width {
  width: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;
}

.chess-board-home {

  display: flex;
  justify-content: space-evenly;
  width: 100%;

}
.restart-board{
  margin-top: 40px;
}

/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {
  .chess-board-home {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding: 5px;

  }

}

</style>
