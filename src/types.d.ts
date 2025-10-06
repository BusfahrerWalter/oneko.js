declare module 'onekojs' {
	export const neko: (config?: NekoConfig) => void;
	export const img: string;

	export interface NekoConfig {
		x?: number;
		y?: number;
		width?: number;
		height?: number;
		speed?: number;
		img?: string;
		pause?: 'idle' | boolean;
	}
}

declare module 'onekojs/ie6' {
	export const neko: () => void;
	export const img: string;
}

declare module 'onekojs/webring' {
	export const neko: () => void;
	export const img: string;
}