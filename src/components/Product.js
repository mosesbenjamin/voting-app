import React from 'react';


class Product extends React.Component{
	handleUpVote = () => {
	this.props.onUpVote(this.props.id);
}
	handleDownVote = () => {
	this.props.onDownVote(this.props.id);
}
	render(){
		const {productImageUrl, votes, url, title, description,submitterAvatarUrl} = this.props;
		return(
			<div className="item">
				<div className="image">
					<img src= {submitterAvatarUrl} alt=""/>
				</div>
				<div className='middle aligned content'>
					<div className='header'>
						<a 
						href="#vote-up"
						onClick={this.handleUpVote}
						className="icons">
							<i className="large caret up icon" />
								{votes}
						</a>
						<a 
						href="#vote-down"
						onClick={this.handleDownVote}
						className="icons">
							<i className="large caret down icon"/>
						</a>
					</div>
					<div className='description'>
						<a href={url}>
							{title}
						</a>
						<p>
							{description}
						</p>
					</div>
					<div className='extra'>
						<span>Submitted by:</span>
						<img
						className='ui avatar image'
						src= {productImageUrl} alt="" />
					</div>
				</div>
			</div>
			);
	}
}

export default Product;