import { useTrail } from "react-spring";

export default function useAnimation(num) {
	const animations = useTrail(num, {
		transform: "translate3d(0,0,0)",
		from: { transform: "translate3d(-50px,0,0)" },
		config: {
			mass: 0.8,
			tension: 280,
			friction: 20,
		},
		delay: 200,
	});

	return animations;
}
