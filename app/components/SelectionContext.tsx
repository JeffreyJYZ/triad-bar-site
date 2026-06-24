"use client";

import {
	createContext,
	useContext,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";
import type { Filling } from "@/lib/data";

export type LayerKey = "apex" | "core" | "base";
export type Selection = Partial<Record<LayerKey, Filling>>;

type Ctx = {
	selection: Selection;
	setSelection: Dispatch<SetStateAction<Selection>>;
};

const SelectionContext = createContext<Ctx | null>(null);

export function SelectionProvider({ children }: { children: ReactNode }) {
	const [selection, setSelection] = useState<Selection>({});
	return (
		<SelectionContext.Provider value={{ selection, setSelection }}>
			{children}
		</SelectionContext.Provider>
	);
}

export function useSelection() {
	const ctx = useContext(SelectionContext);
	if (!ctx) throw new Error("useSelection must be used within SelectionProvider");
	return ctx;
}
