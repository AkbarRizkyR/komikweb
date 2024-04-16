import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip"
import Image from "next/image";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
			<Card>
				<CardBody>
					<div className="flex flex-col w-full">
						<div className="flex justify-center">
							<Image
								src="/logo.png"
								alt="Dislost LinkTree Shorter"
								width={200}
								height={200}
								className="justify-center rounded-full border-2"
							/>
						</div>
						<div className="flex justify-center pt-2">
							<h2 className="text-3xl font-bold font-mono">Dislost LinkTree</h2>
						</div>
						<div className="flex justify-center m-4 gap-4">
							<Chip
								variant="shadow"
								color="success"
								size="sm"
							>
								NextJS 13
							</Chip>
							<Chip
								variant="shadow"
								color="success"
								size="sm"
							>
								VueJs 3
							</Chip>
							<Chip
								variant="shadow"
								color="success"
								size="sm"
							>
								NuxtJs 3
							</Chip>
						</div>
						<div className="flex justify-center m-2 gap-4">
							<Chip
								variant="shadow"
								color="success"
								size="sm"
							>
								ReactJs
							</Chip>
							<Chip
								variant="shadow"
								color="success"
								size="sm"
							>
								PHP
							</Chip>
							<Chip
								variant="shadow"
								color="success"
								size="sm"
							>
								HTML
							</Chip>
							<Chip
								variant="shadow"
								color="success"
								size="sm"
							>
								CSS
							</Chip>
						</div>
						<div className="flex justify-center max-w-sm">
							<p className="text-md text-center font-semibold">
								Hi!, I&apos;m a web developer, I create websites and web applications using the latest technologies,
							</p>
						</div>
						<div className="flex justify-center max-w-sm pt-2">
							<p className="text-md text-center font-semibold">
								I&apos;m a frontend developer, I use the following technologies: NextJS, VueJS, NuxtJS, ReactJS, PHP, HTML, CSS, and more.
							</p>
						</div>
						<div className="flex flex-col justify-center pt-4 gap-4">
							<a href="www.youtube.com/dislost0" target="_blank" rel="noopener noreferrer">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">
											Youtube
										</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://github.com/AkbarRizkyR" target="_blank" rel="noopener noreferrer">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">
											Github
										</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://github.com/AkbarRizkyR" target="_blank" rel="noopener noreferrer">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">
											Portofolio
										</h3>
									</CardBody>
								</Card>
							</a>
						</div>
					</div>
				</CardBody>
			</Card>
		</section>
	);
}
