import { neko, img, NekoConfig } from 'onekojs';

const cfg: NekoConfig = {
	pause: 'idle'
};

setTimeout(() => {
	cfg.pause = false;
}, 5000);

console.log(img);
neko(cfg);