import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';

//1. 전체 상품 페이지, 로그인, 상품 상세 페이지
function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="" element={<ProductAll />} />
				<Route path="/login" element={<Login />} />
				<Route path="/product/:id" element={<ProductDetail />} />
			</Routes>
		</div>
	);
}

export default App;
