import React, {useEffect, useState} from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
	const [productList, setproductList] = useState([]);
	const getProduct = async () =>{
		let url = `http://localhost:5000/products`;
		let response = await fetch(url);
		let data = await response.json();
		setproductList(data);
	}
	useEffect(()=>{
		getProduct();
	},[]);
	return (
		<div>
			<Container>
				<Row>
			{productList.map((product) =>(
				<Col lg={3}><ProductCard item={product}/>
				</Col>
			))}
			</Row>
			</Container>
			</div>
	)
}

export default ProductAll