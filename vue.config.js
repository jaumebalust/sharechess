module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'ShareChess | Share chess boards';
        return args;
      });
  }
};
