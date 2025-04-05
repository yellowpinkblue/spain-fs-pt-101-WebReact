import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle

//create your first component

const Home = () => {
	return (
		<div classNameName="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card />
					</div>
				</div>
			</div>
			<hr/>

			<Footer />
		</div>
	);
};

export default Home;