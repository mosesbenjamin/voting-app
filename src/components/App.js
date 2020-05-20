import unsplash from '../api/unsplash';
import React from 'react';
import ProductList from './ProductList';

class App extends React.Component {
	state = {products: [] };

	async componentDidMount(){
		const response = await unsplash.get("/search/photos", {
				params: {query: 'products'}
		});
		this.setState({products: response.data.results})
	}

	render(){
		let productsDetail;
		if (this.state.products.length){
			productsDetail = (
			<div className="main ui text container">
				<h1 className="ui dividing centered header">Popular Products</h1>
				<div className="ui unstackable items">
					<ProductList
					 products={this.state.products}
					 />
				</div>
			</div>
				)
		}
		return (
			<div>
				{productsDetail}
			</div>
		);
}
}
export default App;