import React from "react";
import NoteCard from ".";

export default {
  title: "UI组件/NoteCard",
  component: NoteCard
};

export const Default = () => <NoteCard name="读书笔记" content="在这里记录我的读书笔记！" time="2020-12-01"/>;