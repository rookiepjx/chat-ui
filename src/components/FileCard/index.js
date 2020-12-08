import React from "react";
import PropTypes from "prop-types";
import StyledFileCard, {
	FileIcon,
	FileTime,
	FileSize,
	FileName,
	FileOptions,
	OptionsContentWrapper,
} from "./style";
import { ReactComponent as zip } from "assets/icon/fileZip.svg";
import { ReactComponent as excel } from "assets/icon/fileExcel.svg";
import { ReactComponent as ppt } from "assets/icon/filePpt.svg";
import { ReactComponent as word } from "assets/icon/fileWord.svg";
import { ReactComponent as image } from "assets/icon/fileImage.svg";
import { ReactComponent as pdf } from "assets/icon/filePdf.svg";
import { ReactComponent as option } from "assets/icon/options.svg";

import Icon from "components/Icon";

import { useTheme } from "styled-components";
import Paragraph from "components/Paragraph";

const fileIcons = {
	zip: zip,
	excel: excel,
	ppt: ppt,
	word: word,
	image: image,
	pdf: pdf,
};

function FileCard({ children, fileType, size, time, name, ...props }) {
	const theme = useTheme();
	return (
		<StyledFileCard {...props}>
			<FileIcon icon={fileIcons[fileType]} />
			<FileName>{name}</FileName>
			<FileSize>{size}</FileSize>
			<FileTime>{time}</FileTime>
			<FileOptions content={<OptionsContent/>}>
				<Icon icon={option} color={theme.gray4} />
			</FileOptions>
		</StyledFileCard>
	);
}
/* eslint-disable jsx-a11y/accessible-emoji */
function OptionsContent() {
	return (
		<OptionsContentWrapper>
			<Paragraph size="10px">查看</Paragraph>
			<Paragraph size="10px">删除</Paragraph>
		</OptionsContentWrapper>
	);
}

FileCard.propTypes = {
	children: PropTypes.any,
	fileType: PropTypes.oneOf(["zip", "excel", "ppt", "word", "image", "pdf"]),
	size: PropTypes.string,
	time: PropTypes.string,
	name: PropTypes.string,
};

export default FileCard;
