// Package imports
import { useState, useRef } from 'react';

// Style imports
import styles from '../styles/Navbar.module.scss';

// Icon imports
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { CgMenuRightAlt, CgMenuRight } from 'react-icons/cg';

const Navbar = ({ logo, links }) => {
	const [activeLink, setActiveLink] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	const handleBurgerClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.navbar}>
			<img src={logo.default.src} width={60} className={styles.logo}></img>
			<ul className={`${isOpen ? styles.menu_open : styles.menu_links}`}>
				{links.map((link, i) => (
					<li
						className={`${styles.menu_link} ${
							link === activeLink && styles.menu_link__active
						}`}
						key={i}
						onClick={() => handleLinkClick(link)}>
						{link}
					</li>
				))}
			</ul>
			<ul className={`${styles.menu_links} ${styles.menu_icons}`}>
				<li className={styles.menu_icon}>
					<BiSearchAlt />
				</li>
				<li className={styles.menu_icon}>
					<MdOutlineShoppingCart />
				</li>
				<li className={styles.menu_icon}>
					<BsSuitHeart />
				</li>
			</ul>
			<div className={styles.menu_burger} onClick={() => handleBurgerClick()}>
				{isOpen ? <CgMenuRight /> : <CgMenuRightAlt />}
			</div>
		</div>
	);
};

export default Navbar;
