### Target

规范网页中使用按钮的代码

### Usage

#### Basic

```js
import MobileButton from '@forzoom/mobile-button';
Vue.component('MobileButton', MobileButton);
```

```html
<MobileButton tag="router-link"
	name="primary"
	to="/path/to/target"
	:is-block="true"
	:is-disabled="true">
	click me
</MobileButton>
```

生成的html

```html
	<router-link class="btn btn-mobile btn-primary btn-block disabled" to="/path/to/target">
		click me
	</router-link>
```

### Props

|名称|类型|默认|描述|
|---|---|---|---|
|id|String|null|添加到外层元素的id|
|class-list|Object/Array|null|添加到外层元素的class|
|tag|String|a|生成的元素，例如可以是div/a/router-link等|
|name|String|null|是否添加`btn-${name}`样式类|
|to|Object/String|null|点击导航地址，类似于router-link中的to。只有当tag的值为router-link时，to的类型允许是Object|
|is-block|Boolean|false|是否添加btn-block样式类|
|is-disabled|Boolean|false|是否添加disabled样式类|
|is-selected|Boolean|false|是否添加selected样式类|

> 备注: 由于组件使用render函数渲染，暂时需要使用id和classList来传入id和class

### Events

|名称|描述|
|---|---|
|click|非disabled情况下点击将触发该事件|
|click-when-disabled|disabled情况下点击将触发该事件|
|touchstart|touchstart事件，为了iOS能够正常触发active效果|