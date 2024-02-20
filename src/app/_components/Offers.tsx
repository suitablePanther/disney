import Image from "next/image";
import { offers } from "../data";
import Hr from "./Hr";

const Offers = () => {
	return (
		<section className="relative py-24">
			<main className="container grid grid-cols-auto justify-center gap-9 py-9 ">
				{offers.map((ele) => {
					const { id, imgURL, title, description } = ele;
					return (
						<article
							key={id}
							className="flex gap-6 flex-col items-center mt-6 md:mt-0"
						>
							<Image src={imgURL} alt={title} width={80} height={100} />
							<h2> {title} </h2>
							<p className=" text-center leading-7 text-lg max-w-[400px]">
								{description}
							</p>
						</article>
					);
				})}
			</main>
			<Hr />
		</section>
	);
};

export default Offers;
