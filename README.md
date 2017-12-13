# glsl-loader

### Brief Introduction
learning how to create a glsl loader


load glsl to create shaders


### Usage

#### Install
First, install glsl-loader through npm
```
npm install glsl-loader --save-dev
```
#### Setting
Configure webpack to rewrite the normal glsl-loader configuration, such as:
```js
module: {
    loaders: [
        {
            test: /\.glsl$/,
            loader: 'glsl-loader'
        }
    ]
}

```
inspire by [webpack-glsl-loader](https://github.com/grieve/webpack-glsl-loader)
# TODO 