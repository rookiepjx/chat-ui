import Button from "components/Button";
import Option from "components/Option";
import Select from "components/Select";
import React from "react";
import Filter from ".";
import Icon from "components/Icon"
import {ReactComponent as plus} from "assets/icon/plus.svg"

export default {
	title: "UI组件/Filter",
	component: Filter,
};

export const Default = () => (
					<Filter>
						<Filter.Filters label="列表排序">
							<Select>
								<Option>最新消息优先</Option>
								<Option>好友在线优先</Option>
							</Select>
						</Filter.Filters>
            <Filter.Actions label="创建会话">
              <Button type="primary" shape="circle">
                <Icon icon={plus} width={12} height={12}></Icon>
              </Button>
            </Filter.Actions>
					</Filter>
				);
