import "./styles/main.css";
import logo from "./assets/logo.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdsBanner } from "./components/CreateAdsBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "./components/Form/Input";
import { GameController } from "phosphor-react";
import { CreateAdModal } from "./components/CreateAdModal";

interface Game {
	id: string;
	title: string;
	bannerUrl: string;
	_count: {
		ads: number;
	};
}

function App() {
	const [games, setGames] = useState<Game[]>();

	useEffect(() => {
		fetch("http://localhost:3333/games")
			.then((response) => response.json())
			.then((data) => {
				setGames(data);
			});
	}, []);

	return (
		<div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
			<img src={logo} />

			<h1 className="text-6xl text-white font-black mt-20">
				Seu{" "}
				<span className="text-transparent bg-clip-text bg-rgy-gradient">
					duo
				</span>{" "}
				está aqui.
			</h1>

			<div className="grid grid-cols-6 gap-6 mt-16">
				{games?.map((game) => (
					<GameBanner
						key={game.id}
						bannerUrl={game.bannerUrl}
						title={game.title}
						adsCounter={game._count.ads}
					/>
				))}
			</div>

			<Dialog.Root>
				<CreateAdsBanner />
				<CreateAdModal />
			</Dialog.Root>
		</div>
	);
}

export default App;
