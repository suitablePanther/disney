import React from "react";
import Landing from "../_components/Landing";
import Offers from "../_components/Offers";
import Whatch from "../_components/Whatch";
import Exlusive from "../_components/Exlusive";
import Devices from "../_components/Devices";

const Home = () => {
	return (
		<>
			<Landing />
			<Offers />
			<Whatch />
      <Exlusive />
      <Devices/>
		</>
	);
};

export default Home;
