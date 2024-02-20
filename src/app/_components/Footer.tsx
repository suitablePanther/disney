import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="container">
			<main className=" flex flex-col md:flex-row md:justify-between items-center *:p-3 *:max-w-[380px] *:w-full">
				<article className=" w-fit">
					<h4>company</h4>
					<p className=" flex md:flex-col capitalize *:text-sm *:text-blue-300/40  *:p-2">
						<Link href="#">supported devices</Link>
						<Link href="#">interned based ads</Link>
					</p>
				</article>
				<article>
					<h4>View website in</h4>
					<p className=" flex md:flex-col capitalize *:text-sm *:text-blue-300/40  *:p-2">
						<Link href="#">English</Link>
						<Link href="#">arabic</Link>
					</p>
				</article>
				<article>
					<h4>need help?</h4>
					<p className=" flex md:flex-col capitalize *:text-sm *:text-blue-300/40  *:p-2">
						<Link href="#">help</Link>
						<Link href="#">feedback</Link>
					</p>
				</article>
				<article>
					<h4>connect with us</h4>
					<p className=" flex md:flex-col capitalize *:text-sm *:text-blue-300/40  *:p-2 pb-3">
						<Link href="#">fb</Link>
						<Link href="#">X</Link>
						<Link href="#">insa</Link>
					</p>
				</article>
			</main>
			<span className="block text-blue-300/40 m-auto md:m-0 w-fit">
				&copyDisney. all rights reserver
			</span>
			<div
				className=" md:text-sm flex flex-col gap-2 md:justify-between
       md:flex-row items-center *:text-blue-300/40 "
			>
				<article className="*:text-blue-300/40 flex gap-6">
					<Link href="#">privacy policy</Link>
					<Link href="#">cookie policy</Link>
					<Link href="#">subscriber Agreement</Link>
				</article>
				<article className="*:text-blue-300/40 flex gap-6">
					<Link href="#">EMEA privacy rights</Link>
					<span>manage preferences</span>
				</article>
				<article className="flex gap-9 pt-6 pb-3">
					<Link href="#">
						<Image
							src="/imgs/google-playstore.png"
							alt="[Play store]"
							width={150}
							height={100}
						/>
					</Link>
					<Link href="#">
						<Image
							src="/imgs/ios-appstore.png"
							alt="[Play store]"
							width={150}
							height={100}
						/>
					</Link>
				</article>
			</div>
		</footer>
	);
};

export default Footer;
