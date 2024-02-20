"use client";
import { useRef, useState } from "react";
import Button from "./Button";

const Header = () => {
	const [language, setLanguage] = useState<string | null>("english");
	const [isShow, setIsShow] = useState<boolean>(false);
	const optRef = useRef(null);
	const handleLanguage = (e: MouseEvent): void => {
		const target = e.currentTarget as HTMLElement;
		const lang: string | null = target.textContent;
		setLanguage(lang);
		setIsShow(!isShow);
		return;
	};
	const langauges: string[] = ["english", "arabic", "french"];
	return (
		<header className=" flex w-full gap-5 justify-end">
			<div className="flex gap-3 bg-black px-3 items-center rounded-md">
				<span className=" capitalize">choose language</span>
				<div className="relative *:capitalize pl-6">
					<span onClick={() => setIsShow(!isShow)} className="p-2 flex gap-2">
						{language} <span className={isShow ? "rotate-180" : ""}> 3 </span>
					</span>
					{isShow && (
						<div className="absolute -right-3 top-[110%] bg-black *:px-3 *:py-0.5 pr-1 pl-4">
							{langauges.map((ele) => {
								return (
									<li
										key={ele}
										onClick={(e: any) => handleLanguage(e)}
										className={
											ele === language
												? 'relative before:absolute before:text-main before:text-lg before:font-semibold before:content-["="] before:-left-2 before:top-[3px] '
												: ""
										}
									>
										{ele}
									</li>
								);
							})}
						</div>
					)}
				</div>
			</div>
			<Button>Log in</Button>
		</header>
	);
};



export default Header;
