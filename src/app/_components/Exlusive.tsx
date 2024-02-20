import Image from "next/image";
import React from "react";
import Hr from "./Hr";

const Exlusive = () => {
	return (
		<section className="relative">
			<main className="container flex flex-col items-center gap-6 py-6">
				<h1> Exclusive Originals</h1>
				<p className=" text-lg font-semibold mb-6 max-w-[500px] text-center">
					Tv series, movies and documentaries you can t see anywhere else, from
					the world s to greatest storytellers.
				</p>
				<Image
					src="/imgs/movies.png"
					alt="[Watch Image]"
					width={1000}
					height={760}
				/>
			</main>
			<Hr />
		</section>
	);
};

export default Exlusive;
