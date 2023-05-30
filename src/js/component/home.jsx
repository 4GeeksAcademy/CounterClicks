import React from "react";
import logo from "/src/img/contador.png" ;
import Boton from "../component/Boton";
import Contador from "../component/Contador";
import { useState } from "react";



//include images into your bundle


//create your first component
const Home = () => {

	const [numClicks,setNumClic] = useState (0);

	const manejarClick = () => {
		setNumClic (numClicks + 1) ;
	}

		const reinciarContador = () => {
			setNumClic (0);
		}
	return (
		<div className="text-center">
			<div className="logo-container">
				<img 
				className="logo"
				src={logo}
				alt="Logo"
				/>
			</div>
			<div className="main-container">
				<Contador numClicks={numClicks}/>
				<Boton
				texto = "click"
				esBotonDeClick ={true}
				manejarClick = {manejarClick} />

            <Boton 
				texto = "reinciar"
				esBotonDeClick ={false}
				manejarClick = {reinciarContador} />
			</div>
		</div>
	);
};

export default Home;
