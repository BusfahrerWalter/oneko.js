import { neko, img, NekoConfig } from 'onekojs';

const cfg: NekoConfig = {
	pause: 'idle',
	element: document.querySelector<HTMLElement>('.neko')!
};

setTimeout(() => {
	cfg.pause = false;
}, 1000);

console.log(img);
neko(cfg);