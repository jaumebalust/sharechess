<template>
  <div class="qr-component">
    <div class="qr-component__title">
      <button class="pure-material-button-contained" @click="saveImage">Save me</button>
    </div>
    <div class="qr-component__content">
      <div id="qrcode"></div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  name: 'qr-component',
  props: [
    'fenString'
  ],
  data() {
    return {};
  },
  mounted() {
    this.updateQR()
  },
  methods: {
    saveImage() {
      window.scrollTo(0, 0);// you need to scrool to top for safari hack
      var e = document.getElementById("qrcode");
      var e_width = e.offsetWidth;
      var e_height = e.offsetHeight;
      var e_x_offset = window.scrollX + e.getBoundingClientRect().left;
      var e_y_offset = window.scrollY + e.getBoundingClientRect().top;
      html2canvas(document.querySelector('#qrcode'),
        {
          scale: 1,
          width: 300,
          height: 300,
          x: e_x_offset-108,
          y: e_y_offset
        })
        .then(canvas => {
          var seconds = new Date().getTime() / 1000;
          var a = document.createElement('a');
          // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
          a.href = canvas.toDataURL('image/jpeg')
            .replace('image/jpeg', 'image/octet-stream');
          a.download = 'shared_chess' + seconds + '.jpg';
          a.click();
        });

    },
    updateQR(){
      document.getElementById('qrcode').innerHTML = ''
      new QRCode(document.getElementById('qrcode'), {
        width: 300,
        height: 300,
        text: 'https://sharechess.jaumebalust.com/?fen=' + this.fenString,
        colorDark: '#000',
        colorLight: '#fff',
        correctLevel: QRCode.CorrectLevel.L
      });
    }
  },
  computed: {},
  watch:{
    fenString(){
      this.updateQR()
    }
  }
};
</script>
<style lang="scss">
.qr-component {
  .hide-scrollbar {
    overflow: -moz-hidden-unscrollable;
    overflow: hidden;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 30px;
  &__title {
    padding-bottom: 30px;

  }

  &__content {
    display: flex;
    width: 300px;

    border: 2px solid black;
  }
}

/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {

  .qr-component {
    &__title {

    }

    &__content {

    }
  }
}

:root {
  --pure-material-onprimary-rgb: #448aff;
}

.pure-material-button-contained {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: white;
  background-color: var(--pure-material-onprimary-rgb);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system;
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.pure-material-button-contained::-moz-focus-inner {
  border: none;
}

/* Overlay */
.pure-material-button-contained::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color:  var(--pure-material-onprimary-rgb);
  opacity: 0;
  transition: opacity 0.2s;
}

/* Ripple */
.pure-material-button-contained::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  padding: 50%;
  width: 32px; /* Safari */
  height: 32px; /* Safari */
  background-color:  var(--pure-material-onprimary-rgb);
  opacity: 0;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 1s, transform 0.5s;
}

/* Hover, Focus */
.pure-material-button-contained:hover,
.pure-material-button-contained:focus {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

.pure-material-button-contained:hover::before {
  opacity: 0.08;
}

.pure-material-button-contained:focus::before {
  opacity: 0.24;
}

.pure-material-button-contained:hover:focus::before {
  opacity: 0.3;
}

/* Active */
.pure-material-button-contained:active {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.pure-material-button-contained:active::after {
  opacity: 0.32;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0s;
}

/* Disabled */
.pure-material-button-contained:disabled {
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);
  box-shadow: none;
  cursor: initial;
}

.pure-material-button-contained:disabled::before {
  opacity: 0;
}

.pure-material-button-contained:disabled::after {
  opacity: 0;
}


</style>

