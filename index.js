import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetails from './CommentDetails';
const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard >
				<CommentDetails  author= "Sam"
				 timeAgo="Today at 3:00pm"
				  comment="looking good bro"
				   avatar={faker.image.avatar()}/>
			</ApprovalCard>
			<ApprovalCard >
				<CommentDetails  author= "Alex"
				 timeAgo="Today at 4:40pm" 
				 comment="awesome" 
				 avatar={faker.image.avatar()} />
			</ApprovalCard >
			<ApprovalCard >
				<CommentDetails  author= "Miya"
				 timeAgo="yesterday at 5:00pm" 
				 comment="nice work" 
				 avatar={faker.image.avatar()} />
			</ApprovalCard >
		</div>
		);
};
ReactDom.render(<App />, document.querySelector('#root'));