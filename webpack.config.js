module.exports = {
  entry: './src/index.js',
  module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: ['babel-loader']
     },
     {
       test: /\.scss$/,
       use: [
         {loader:"style-loader"}, // creates style nodes from JS strings
         {loader:"css-loader",
           options: {
             modules: true,
           }}, // translates CSS into CommonJS
         {loader:"sass-loader"} // compiles Sass to CSS, using Node Sass by default
       ]
     },
     {
       test: /\.(md|ttf|txt|eot|ico|otf|svg|png|gif|woff2|woff|jpg|jpeg|webp|(2)?)(\?[a-z0-9]+)?$/,
       exclude: [/demo-files/],
       use: [
         { loader: 'file-loader' },
       ],
     }
   ]
 },
 resolve: {
   extensions: ['*', '.js', '.jsx']
 },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
