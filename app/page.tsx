import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stratum from "./components/Stratum";
import Lab from "./components/Lab";
import Vessel from "./components/Vessel";
import Prices from "./components/Prices";
import GoldenTickets from "./components/GoldenTickets";
import Builder from "./components/Builder";
import Manifesto from "./components/Manifesto";
import Footer from "./components/Footer";
import { SelectionProvider } from "./components/SelectionContext";

export default function Page() {
	return (
		<SelectionProvider>
			<Nav />
			<main className="flex-1">
				<Hero />
				<Stratum />
				<Lab />
				<Builder />
				<Manifesto />
				<Vessel />
				<Prices />
				<GoldenTickets />
			</main>
			<Footer />
		</SelectionProvider>
	);
}
