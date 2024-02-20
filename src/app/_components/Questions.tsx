"use client";
import React, { useState } from "react";
import { questions } from "../data";

const Questions = () => {
	return (
		<section>
			<main>
				{questions.map((ele) => {
					const { id, question, solution } = ele;
					return <Sol key={id} question={question} solution={solution} />;
				})}
			</main>
		</section>
	);
};

const Sol = ({ question, solution }: { question: any; solution: string[] }) => {
	const [isShow, setIsShow] = useState(false);
	return (
		<li
			className={`container px-9  `}
		>
			<span
				className={`flex text-2xl py-6 justify-between mb-2 cursor-pointer ${isShow ? "text-white" : "text-sky-200/50"} md:text-2xl font-semibold border-b border-stone-700/90`}
				onClick={() => setIsShow(!isShow)}
			>
				{question}?
				<span className={` ${isShow && " rotate-180 block"} `}>3</span>
			</span>
			<p
				className={`text-sky-200/50  px-2 leading-6 ${
					isShow ? " border-b border-stone-700/90 pt-3 pb-5" : ""
				} capitalize text-justify text-sm md:text-xl`}
			>
				{isShow &&
					solution.map((ele, i) => {
						return <span key={i} className="block pb-2"> {ele}  </span>;
					})}
			</p>
		</li>
	);
};

export default Questions;
