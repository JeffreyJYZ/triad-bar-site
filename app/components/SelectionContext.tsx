"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";
import type { Filling } from "@/lib/data";

export type LayerKey = "apex" | "core" | "base";
export type Selection = Partial<Record<LayerKey, Filling>>;

interface Ctx {
	selection: Selection;
	setSelection: Dispatch<SetStateAction<Selection>>;
}

const SelectionContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "triad-selection-v1";

export function SelectionProvider({ children }: { children: ReactNode }) {
	const [selection, setSelection] = useState<Selection>({});

	useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) setSelection(JSON.parse(raw) as Selection);
		} catch {
			// ignore malformed storage
		}
	}, []);

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
		} catch {
			// storage unavailable or full — selection stays in-memory
		}
	}, [selection]);

	return (
		<SelectionContext.Provider value={{ selection, setSelection }}>
			{children}
		</SelectionContext.Provider>
	);
}

export function useSelection() {
	const ctx = useContext(SelectionContext);
	if (!ctx)
		throw new Error("useSelection must be used within SelectionProvider");
	return ctx;
}
