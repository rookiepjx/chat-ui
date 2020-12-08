import React from "react";
import FileCard from ".";

export default {
	title: "UI组件/FileCard",
	component: FileCard,
};

export const Default = () => (
	<FileCard fileType="zip" name="压缩文件" size="5.2MB" time="2020-12-01" />
);

export const Ppt = () => (
	<FileCard fileType="ppt" name="PPT文件" size="5.2MB" time="2020-12-01" />
);
export const Excel = () => (
	<FileCard fileType="excel" name="Excel文件" size="5.2MB" time="2020-12-01" />
);

export const Word = () => (
	<FileCard fileType="word" name="Word文件" size="5.2MB" time="2020-12-01" />
);
export const Image = () => (
	<FileCard fileType="image" name="Image文件" size="5.2MB" time="2020-12-01" />
);
export const Pdf = () => (
	<FileCard fileType="pdf" name="Pdf文件" size="5.2MB" time="2020-12-01" />
);

