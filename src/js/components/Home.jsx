import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import {MyCard} from "./mycard";
import Footer from "./footer";

//include images into your bundle

//create your first component

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3">
						<MyCard
							imgUrl='https://cdn.pixabay.com/photo/2025/02/20/10/38/robin-9419575_1280.jpg'
							title='Robin Bird'
							text='Bird on the nature'
							btn='Click on me!'
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<MyCard
							imgUrl='https://cdn.pixabay.com/photo/2022/07/25/18/47/waterfall-7344396_1280.jpg'
							title='Mountains and flowers'
							text='Enjoy, breathe fresh air'
							btn='Press me!'
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<MyCard
							imgUrl='https://cdn.pixabay.com/photo/2023/10/16/06/21/white-butterfly-8318526_1280.jpg'
							title='Butterfly'
							text='White butterfly on lavender'
							btn='Learn more!'
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<MyCard
							imgUrl='https://cdn.pixabay.com/photo/2019/03/09/16/43/meerkat-4044441_1280.jpg'
							title='Meerkat'
							text='Meerkat average about 50cm. '
							btn='Find out more!'
						/>
					</div>
				</div>
			</div>
			<hr />

			<Footer />
		</div>
	);
};

export default Home;