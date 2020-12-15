## 项目概述

一个即时通讯软件的常见组件UI库，使用到的技术栈和第三方库有react、react-router、样式库styled-component、UI组件开发环境storybook、模板生成库hygen、动画库react-spring

## 组件库预览

`yarn storybook`

若图片无法预览，请开启代理访问

![](https://cdn.jsdelivr.net/gh/rookiepjx/image-bed/img/Snipaste_2020-12-15_15-04-18.jpg)

## 聊天界面预览

`yarn start`

- 消息列表

  ![](https://cdn.jsdelivr.net/gh/rookiepjx/image-bed/img/1.jpg)

- 联系人列表

  ![](https://cdn.jsdelivr.net/gh/rookiepjx/image-bed/img/dwad.jpg)

- 文件列表

  ![](https://cdn.jsdelivr.net/gh/rookiepjx/image-bed/img/3.jpg)

- 笔记列表

  ![](https://cdn.jsdelivr.net/gh/rookiepjx/image-bed/img/4.jpg)

- 设置页面

  ![](https://cdn.jsdelivr.net/gh/rookiepjx/image-bed/img/5.jpg)

- 个人信息界面

  ![](https://cdn.jsdelivr.net/gh/rookiepjx/image-bed/img/6.jpg)

- 屏蔽好友列表

  ![](https://cdn.jsdelivr.net/gh/rookiepjx/image-bed/img/fee.jpg)

- 滑动抽屉界面

  ![](https://cdn.jsdelivr.net/gh/rookiepjx/image-bed/img/8.jpg)

- 视频通话界面

  ![](https://cdn.jsdelivr.net/gh/rookiepjx/image-bed/img/9.jpg)

  

## storybook

添加装饰器

1. 全局添加

   .storybook/preview.js

~~~javascript
import React from "react"
import {addDecorator,addParameters} from "@storybook/react"
import {ThemeProvider} from "styled-components"
import theme from "../src/theme"

// 方便添加主题色
addDecorator((storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
)))

// 添加预览窗口内边距
addDecorator((storyFn => (
<div style={{padding:"20px"}}>{storyFn()}</div>
)))

// 修改侧边栏显示方式
addParameters({
  options:{
    showRoots:true
  }
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
~~~

2.局部添加

在组件的story文件中 ,可以以数组形式添加多个装饰器

~~~
export default {
	title: "排版组件/Paragraph",
	component: Paragraph,
	decorators: [(storyFn) => <div style={{ padding: "10px" }}>{storyFn()}</div>],
};
~~~



## hygen模板生成器

安装

`npm i -g hygen`

初始化

`hygen init self`

新建component生成器

`hygen generator new component`

编辑index.js模板

~~~
---
to: src/components/<%= name %>/index.js
---

import React from "react";
import PropTypes from "prop-types";
import {<%= name %>Wrapper} from "./style";

function <%= name %>({children,...prop}) {
  return (
    <<%= name %>Wrapper {...prop}>
      {children}
    </<%= name %>Wrapper>
  );
}

<%= name %>.propTypes = {
  children: PropTypes.any
};

export default <%= name %>;

~~~

编辑style.js模板

~~~
---
to: src/components/<%= name %>/style.js
---

import styled from "styled-components";

export const <%= name %>Wrapper = styled.div``;
~~~

编辑组件.stories.js模板

~~~
---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
---

import React from "react";
import <%= name %> from ".";

export default {
  title: "<%= name %>",
  component: <%= name %>
};

export const Default = () => <<%= name %>>默认</<%= name %>>;
~~~

使用hygen快速构建组件

`hygen component new 组件名`

## styled-component使用技巧

### useTheme函数

作用和使用macro插件的css属性一样。通过useTheme函数返回的对象获取theme的属性，并添加css样式

~~~
const theme = useTheme()
<component color={theme.color}></component>
~~~

### css函数

1.使用css函数可以抽离公共样式组件，然后在需要使用的地方调用这个css函数即可。

~~~javascript
在mixins.js中定义公共组件
import { css } from "styled-components";

export const circle = (color = "#F34848", size = "8px") => css`
	width: ${size};
	height: ${size};
	border-radius: 50%;
	background-color: ${color};
`;
在styled-component中调用
${({ bgc }) => circle(bgc, "8px")};
~~~

2.根据props决定css样式

~~~javascript
const typeVariants = {
	primary: css`
		color: ${({ theme }) => theme.grayDark};
	`,
	secondary: css`
		color: ${({ theme }) => theme.grayDark};
		opacity: 0.3;
	`,
	danger: css`
		color: ${({ theme }) => theme.red};
	`,
};

// 调用函数
font-size:${({size}) => sizeVariants[size]}
~~~



### 获取子组件

当需要在styled-component中获取子组件时，可以通过`${组件名}`来获取。

需要注意的是组件名需要和styled-component中的**组件名一样**。

## macros插件的使用

当storybook中的组件需要访问theme.js中的属性，但是不想再单独创建一个组件包裹在外层时，可以使用macros插件。

适用于需要添加**简短的独立样式**时使用。

在.storybook文件夹下新建.babelrc文件，添加

~~~
{
	"plugins":["macros"]
}
~~~

再在storybook组件文件中引入

~~~javascript
import "styled-component/macro"
~~~

再使用css函数在组件外层包裹div，div上直接添加

~~~
<div css={`background0color:${({theme}) => theme.background}`}></div>
~~~

## react-router

- useHistory() 

  返回路由中的history对象，可以用于编程式实现路由跳转。

~~~javascript
const history = useHistory()
history.push("/todo")
~~~

- useLocation()

  返回路由中的location对象，location中包含pathname等信息

- matchPath

  用于匹配路径是否一致

~~~javascript
	const active = !!matchPath(location.pathname, {
		path: to,
		exact: to === "/",
	});
~~~

## react-spring

动画效果模拟弹簧的伸缩

api:

- useSpring

  实现单组件的单个动画

- useSprings

  实现单组件的多个动画

- useTrail

  实现多个相同组件（数据集）的多个动画，一个组件动画跟随或者滞后于一个组件动画

- useTransition

  实现组件挂载/卸载时的过渡动画

- useChain

  多个动画按序执行

config:

- mass 弹簧质量
- tension 弹簧张力（弹性）
- friction  弹簧摩擦力
- ...官网

使用示例：

1. 配置动画效果

~~~
// 返回动画效果数组
const animations = useTrail(数据集长度,{
	transform:"translate3d(0,0,0)", //动画终点
	from:{transform:"translate3d(-50px,0,0)", //动画起点
	config:{
		mass:0.8,
		tension:280,
		friction:20
	},
	delay:200 // 数据集动画延迟
})
~~~

2. 指定动画目标

   ~~~javascript
   {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
   						<animated.div key={index} style={animations[index]}>
   							<MessageCard
   								key={index}
   								name="李明"
   								active={index === 0}
   								replied={index % 2 === 0}
   								avatarSrc={face1}
   								avatarStatus="online"
   								statusText="在线"
   								message="湖人总冠军"
   								time="3 小时前"
   								unreadCount={2}
   							/>
   						</animated.div>
   					))}
   ~~~

   

   抽离动画hooks

   ~~~javascript
   import { useTrail } from "react-spring";
   
   export default function useAnimation(num) {
   	const animations = useTrail(num, {
   		transform: "translate3d(0,0,0)",
   		from: { transform: "translate3d(-50px,0,0)" },
   		config: {
   			mass: 0.8,
   			tension: 280,
   			friction: 20,
   		},
   		delay: 200,
   	});
   
   	return animations;
   }
   ~~~

   