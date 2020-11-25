import React from "react";
import PropTypes from "prop-types";
import StyledMessageList,{ListContainer} from "./style";
import Input from "components/Input/index"
import Filter from "components/Filter/index"
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import {ReactComponent as plus} from "assets/icon/plus.svg"
import Icon from "components/Icon";
import MessageCard from "components/MessageCard";
import face1 from "assets/images/face-male-1.jpg"

function MessageList({children,...props}) {
  return (
    <StyledMessageList {...props}>
      <Input.Search/>
      <ChatFilter style={{padding:"30px 0"}}/>
      <ListContainer>
        {[1,2,3,4,5,6,7,8].map((item,index) => {
          return (
            <MessageCard 
            key={index} 
            name="彭佳鑫"
            active={index === 0} 
            replied={index % 2 ===0}
            avatarSrc={face1}
            avatarStatus="online"
            statusText="在线"
            message="湖人总冠军"
            time="3 小时前"
            unreadCount={2} />
          )
        })}
      </ListContainer>
    </StyledMessageList>
  );
}

function ChatFilter(){
  return (
		<Filter>
			<Filter.Filters label="列表排序">
				<Select>
					<Option>最新消息优先</Option>
					<Option>好友在线优先</Option>
				</Select>
			</Filter.Filters>
			<Filter.Actions label="新建会话">
        <Button type="primary" shape="circle">
          <Icon icon={plus} width={12} height={12}/>
        </Button>
      </Filter.Actions>
		</Filter>
	);
}

MessageList.propTypes = {
  children: PropTypes.any
};

export default MessageList;
