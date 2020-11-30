import styled from "styled-components";
import arrowRight from "assets/icon/arrowRight.svg";
import Icon from "components/Icon";

const StyledProfile = styled.div`
	display: grid;
	align-content: start;
	justify-content: center;
	justify-items: center;
	position: relative;
	padding: 30px;
	overflow-y: auto;
	height: 100vh;
	margin-top: 2vh;
`;

const SocialLinks = styled.div`
	& > * {
		margin: 0 10px;
	}
`;
const ContactSection = styled.section`
	display: grid;
	row-gap: 18px;
`;

// 相册容器
const AlbumContainer = styled.section`
	width: 264px;
`;

// 相册标题
const AlbumTitle = styled.div`
	display: flex;
	justify-self: stretch;
	justify-content: space-between;
	align-items: center;
	font-size: ${({ theme }) => theme.normal};
	& > a {
		text-decoration: none;

		color: ${({ theme }) => theme.primaryColor};
		&::after {
			display: inline-block;
			content: url(${arrowRight});
			margin-left: 4px;
		}
	}
`;

// 相册图片容器
const Album = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

// 相册图片
const Photo = styled.img`
	width: 80px;
	height: 80px;
	object-fit: cover;
	/* margin: 4px; */
`;
const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
	position: absolute;
	right: 30px;
	top: 30px;
	cursor: pointer;
`;
export default StyledProfile;
export {
	SocialLinks,
	ContactSection,
	AlbumContainer,
	Album,
	AlbumTitle,
	Photo,
	CloseIcon,
};
