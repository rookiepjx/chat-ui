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