import Image from "next/image";
import React from "react";

const Whatch = () => {
	return (
		<section>
			<main className="container flex flex-col items-center gap-6 py-6">
				<h1> whatch the way you want</h1>
				<p className=" text-lg font-semibold mb-6">
					discover the world s greatest stories, all in one place.
				</p>
				<Image
					src="/imgs/watch.png"
					alt="[Watch Image]"
					width={1000}
					height={760}
				/>
			</main>
		</section>
	);
};

export default Whatch;
