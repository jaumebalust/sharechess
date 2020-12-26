<template>
  <div class="full-width">
    <home-title/>
    <div class="chess-board-home">
      <chess-board id="mainBoard"
                   draggable-pieces
                   style="width: 400px"
      ></chess-board>
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
import RestartBoard from '@/views/RestartBoard';

export default {
  name: 'Home',
  data() {
    return {
      board: null,
      fenString:''

    };
  },
  mounted() {
    var This = this;
    this.board = document.querySelector('#mainBoard');
    //check for a FEN
    if (!this.fen) {
      this.board.start();
    } else {
      this.board.setPosition(this.fen);
    }
    This.fenString = This.board.fen();
    This.board.addEventListener('change', (e) => {
      setTimeout(()=>{
        This.fenString = This.board.fen();
        console.log('event',This.board.fen())
      },300)


    });

  },
  methods:{
    restartBoard(){
      this.board.start()
    }
  },
  computed: {
    fen() {

      if (!this.$route.query.fen) {
        return false;
      }
      return decodeURI(this.$route.query.fen);
    }
  },
  components: {
    RestartBoard,
    ShareViaWhatsapp,
    QrComponent,
    FenComponent,
    HomeTitle,
    ChessBoard
  },
};
</script>
<style lang="scss">
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

  }

}

</style>
