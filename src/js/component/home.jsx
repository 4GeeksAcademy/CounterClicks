import React from "react";
import logo from "/src/img/contador.png" ;
import Boton from "../component/Boton";




//include images into your bundle


//create your first component
const Home = () => {

	const manejarClick = () => {
		console.log("click");
	}

		const reinciarContador = () => {
			console.log ("reinicar");
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
