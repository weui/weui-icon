WeUI icon
====

[![npm version](https://img.shields.io/npm/v/weui-icon.svg)](https://www.npmjs.org/package/weui-icon)

## 概述

WeUI icon 是 WeUI 的 配套图标库，目前分为`filled (填充)`和`outlined (描边)`两种样式，具体可见下述预览图。

## 预览图
![image](https://user-images.githubusercontent.com/2395166/76525455-d0e15b00-64a6-11ea-8274-41b930bc204c.png)
![image](https://user-images.githubusercontent.com/2395166/76525466-d63ea580-64a6-11ea-8e37-585607898ed5.png)

## 使用
主要是通过**class**来控制。class 规则是`weui-icon-[style]-[name]`，比如需要展示预览图中，`filled`样式的`add-friends`，则 class 为`weui-icon-filled-add-friends`。


#### link

html
```html
<link rel="stylesheet" href="https://res.wx.qq.com/t/wx_fed/cdn_libs/res/weui-icon/1.0.0/weui-icon.css" />

<span class="weui-icon-filled-add-friends"></span>
<span class="weui-icon-outlined-add-friends"></span>
```

#### import 所有 icon

terminal
```
npm i weui-icon
```

javascript
```javascript
import 'weui-icon';
```

html
```html
<span class="weui-icon-filled-add-friends"></span>
<span class="weui-icon-outlined-add-friends"></span>
```

#### import 单个 icon

terminal
```
npm i weui-icon
```

javascript
```javascript
import 'weui-icon/dist/filled/add-friends.css';
```

html
```html
<span class="weui-icon-filled-add-friends"></span>
```
