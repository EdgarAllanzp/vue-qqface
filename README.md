# vue-qqface

基于 Vue2.x 的 QQ表情组件

## 安装
```
yarn add vue-qqface
```

## 使用示例
```html
<link rel="stylesheet" href="./node_modules/vue-qqface/dist/vue-qqface.css">
<script src = './vue.min.js'></script>
<script src = './node_modules/vue-qqface/dist/vue-qqface.min.js'></script>
```
```html
<div id="app">
  <h1>Vue-QQface</h1>
  <div class="text-area" contenteditable="true" v-face:face></div>
  <vue-qqface ref="face"></vue-qqface>
</div>
```