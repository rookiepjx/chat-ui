import React from "react"
import {addDecorator,addParameters} from "@storybook/react"
import {ThemeProvider} from "styled-components"
import theme from "../src/theme"

// 添加主题
addDecorator((storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
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