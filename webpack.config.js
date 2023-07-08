const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports =(env)=> {
  console.log("nodeenvs",env)
  let publicpath_global=env.electron?"./":"/";
  return {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    publicPath: publicpath_global,
    filename: "bundle.js"
  },
  resolve: {
   alias: {
      // add as many aliases as you like! 
      "@routes": [path.resolve(__dirname, 'src/routes'), 'node_modules'], 
      "@components": [path.resolve(__dirname, 'src/components'), 'node_modules'], 
      "@styles": [path.resolve(__dirname, 'src/styles'), 'node_modules'], 
      "@fonts": [path.resolve(__dirname, 'src/fonts'), 'node_modules'], 
      "@pages": [path.resolve(__dirname, 'src/pages'), 'node_modules'], 
      "@utils": [path.resolve(__dirname, 'src/utils'), 'node_modules'], 
      "@fontawesome": [path.resolve(__dirname, 'src/fontawesome_5'), 'node_modules'], 
      "@schemas": [path.resolve(__dirname, 'src/schema'), 'node_modules'], 
    }
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
      test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          },
          
          ]
        },
      {
      test: /\.(png|jpeg|gif|jpg|svg)$/i,
        loader: 'file-loader',
         options: {
              name: '[name].[ext]',
              outputPath: 'images/'
          }
      },
      {
        test: /\.(json)$/i,
        loader: 'file-loader',
        type: 'javascript/auto',
         options: {
              name: '[name].[ext]',
              outputPath: 'jsons/'
          }
      },
      //  {
      //   test: /\.(png|jpeg|gif|jpg|json)$/i,
      //   loader: 'file-loader',
      //   type: 'javascript/auto',
      //   options: {
      //     name() {
      //       return '[path][name].[ext]';
      //     },
      //   },
      // },
       {
        test: /\.(s[ac]ss|css)$/i,
         use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },"css-loader","sass-loader"]
      }
    ]
  },
  performance : {
    hints : false
},    
  devServer: {
     hot:true,
    historyApiFallback: true,
    port: 8050
  },
  plugins: [
    new MiniCssExtractPlugin({
                publicPath:publicpath_global,
                filename: 'style/[name].css',
                chunkFilename: 'style/[name].chunk.css'
            }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "public", "index.html")
    }),
     new CopyPlugin({
      patterns: [
        { from: "public/electron.js", to: "." },
        { from: "public/manifest.json", to: "." },
        { from: "public/favicon.ico", to: "." },
        { from: "public/logo192.png", to: "." },
        { from: "public/logo512.png", to: "." },

      ],
    }),
  ],
target:"web"
}
};