
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

// سطرين ضروريين لتعريف المسارات في النظام الحديث
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default { 
  mode: "development",
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: false,
    open: true,
    port: 9000,
  },
  module: {
     rules: [
      { test: /\.html$/i,
      loader: "html-loader",
      },
      {
        test: /\.css$/i,
        exclude: /bootstrap\.min\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /bootstrap\.min\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "images/[name][ext]"
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[name][ext]"
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
    new CssMinimizerPlugin()
  ]
};