import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export const Navbar = () => {
	const menuList = ['여성', '남성', '아동', '악세사리', 'Home', 'Shoes', 'Beauty', 'Sale']
	return (
		<div>

			<div><div className="login-button"><FontAwesomeIcon icon={faUser} /> <div>로그인</div></div></div>
			<div className='nav-section'><img width={100} src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" /></div>
			<div>
				<ul className='menu-list'>{menuList.map(menu => <li>{menu}</li>)}</ul>
			</div>
			<div className='search-section'>
				<FontAwesomeIcon className="search-icon" icon={faSearch} />
				<input type="text" />
			</div>
		</div>
	)
}

export default Navbar;