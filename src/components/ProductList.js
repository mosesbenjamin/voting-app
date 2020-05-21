import React from 'react';
import Product from './Product';

class ProductList extends React.Component{
	state = {products: []}

	componentDidMount(){
		this.setState({products: this.props.products})
	}

	handleProductUpVote = (productId) => {
		const nextProducts = this.state.products.map((product) => {
				if (product.id === productId) {
				return Object.assign({}, product, {
				likes: product.likes + 1,
				});
				} else {
				return product;
				}
				});

			this.setState({products: nextProducts})		

}
	handleProductDownVote = (productId) => {
			const nextProducts = this.state.products.map((product) => {
					if (product.id === productId) {
					return Object.assign({}, product, {
					likes: product.likes - 1,
					});
					} else {
					return product;
					}
					});

				this.setState({products: nextProducts})		

	}
	render(){
			this.props.state.sort((a, b)=>{
									return b.likes - a.likes}
									)
			const renderedProduct = this.state.products.map((product)=>{
				return (
				<Product 
						key={'product-' + product.id}
						id={product.id}
						title={product.alt_description}
						description={product.description}
						url={product.urls.full}
						votes={product.likes}
						productImageUrl={product.user.profile_image.large}
						submitterAvatarUrl={product.links.download}
						onUpVote={this.handleProductUpVote}
						onDownVote={this.handleProductDownVote}
						/>
				)
			})
		return(
			<div className="ui segment" style={{marginTop: '10px'}}>
				<div className="ui unstackable items">
					{renderedProduct}
				</div>
			</div>
			);
	}
}

export default ProductList;