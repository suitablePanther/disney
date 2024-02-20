import React from "react";
import { devices } from "../data";
import Image from "next/image";

const Devices = () => {
	return (
		<section>
			<h1 className=" m-auto w-fit mb-9"> Compatible devices</h1>
			<main className="container grid grid-cols-auto justify-center gap-6 py-9">
				{devices.map((ele) => {
					const { id, imgURL, title, description, width, height } = ele;
					return (
						<article
							key={id}
							className="flex gap-6 flex-col items-center mt-6 md:mt-0"
						>
							<Image src={imgURL} alt={title} width={width} height={height} />
							<h2> {title} </h2>
							<p className="text-center leading-7 text-lg max-w-[400px]">
								{description.map((el) => (
									<span key={el} className="block capitalize p-1">
										{el}
									</span>
								))}
							</p>
						</article>
					);
				})}
			</main>
		</section>
	);
};

export default Devices;
