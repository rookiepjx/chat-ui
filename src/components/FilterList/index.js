import React from "react";
import PropTypes from "prop-types";
import StyledFilterList from "./style";
import Input from "components/Input/index";
import Filter from "components/Filter/index"
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import {ReactComponent as plus} from "assets/icon/plus.svg"
import Icon from "components/Icon";

function FilterList({
	children,
	filterLabel = "列表排序",
	options=["选项1","选项2"],
	actionsLabel,
	...props
}) {
	return (
		<StyledFilterList {...props}>
			<Input.Search />
			<Filter>
				<Filter.Filters label={filterLabel}>
					<Select>
						{options &&
							options.map((option, index) => (
								<Option key={index}>{option}</Option>
							))}
					</Select>
				</Filter.Filters>
				{actionsLabel && (
					<Filter.Actions label={actionsLabel}>
						<Button type="primary" shape="circle">
							<Icon icon={plus} width={12} height={12} />
						</Button>
					</Filter.Actions>
				)}
			</Filter>
			{children}
		</StyledFilterList>
	);
}

FilterList.propTypes = {
	children: PropTypes.any,
	filterLabel: PropTypes.string,
	actionsLabel: PropTypes.string,
	options: PropTypes.array,
};

export default FilterList;
