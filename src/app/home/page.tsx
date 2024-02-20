import React from "react";
import Landing from "../_components/Landing";
import Offers from "../_components/Offers";
import Whatch from "../_components/Whatch";
import Exlusive from "../_components/Exlusive";
import Devices from "../_components/Devices";
import Questions from "../_components/Questions";
import Footer from "../_components/Footer";

const Home = () => {
	return (
		<>
			<Landing />
			<Offers />
			<Whatch />
			<Exlusive />
			<Devices />
			<Questions />
			<Footer />
		</>
	);
};

export default Home;
