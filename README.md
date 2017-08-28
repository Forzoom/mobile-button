### Usage

#### Basic

```js
import MobileButton from '@forzoom/mobile-button';
Vue.component('MobileButton', MobileButton);
```

#### Props

|名称|类型|描述|
|---|---|---|
|to|Object/String|点击导航地址|

#### Events

|名称|描述|
|---|---|
|click|非disabled情况下点击将触发该事件|
|click-when-disabled|disabled情况下点击将触发该事件|
|touchstart|touchstart事件，为了iOS能够正常触发active效果|

### Version

#### 0.0.2(deprecated)

1. 修复错误

#### 0.0.3(deprecated)

1. 添加isSelected

#### 0.0.4

1. 删除不再使用的代码

#### 0.0.6

1. 添加touchstart事件，支持router-link和原生标签

#### 0.0.8

1. to支持object，用于支持router-link的命名路由