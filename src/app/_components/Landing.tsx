import Image from "next/image";
import Header from "./Header";
import Button from "./Button";
import Hr from "./Hr";

const Landing = () => {
	return (
		<section className=" relative bg-[url('/imgs/landing.png')] flex flex-col justify-between bg-cover bg-center h-[98vh]">
			<Header />
			<div className="flex flex-col gap-9 justify-center items-center">
				<article className="flex flex-col gap-6 items-center justify-center">
					<Image src="/imgs/logo.png" alt="[Logo]" width={280} height={300} />
					<p className="text-center capitalize text-2xl md:text-3xl font-bold max-w-[600px]">
						stream disney+ originals, latest series & blockbuster movies
					</p>
				</article>
				<Button> sign up now +</Button>
			</div>
			<Hr />
		</section>
	);
};

export default Landing;
