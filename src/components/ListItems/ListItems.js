import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { useState, useRef } from "react";
import ListItemStyles from "./ListItems.module.css";

const ListItems = (props) => {
	// const config = { duration: 2000 };
	// const [on, toggle] = useState(false);

	// const [flip, set] = useState(false);
	// const flipProps = useSpring({
	// 	to: { opacity: 1 },
	// 	from: { opacity: 0 },
	// 	reset: true,
	// 	reverse: flip,
	// 	delay: 200,
	// 	config: config,
	// 	onRest: () => set(!flip),
	// });

	// const animatedButton = useSpring({
	// 	color: on ? "blue" : "red",
	// 	config: config,
	// });

	// const animation = useSpring({
	// 	from: { opacity: 0 },
	// 	to: { opacity: 1 },
	// 	config: config,
	// });

	// const colorAnimation = useSpring({
	// 	from: { color: "blue" },
	// 	to: { color: `rgb(255,0,0)` },
	// 	config: config,
	// });

	// const multiAnimation = useSpring({
	// 	from: { opacity: 0, color: "red" },
	// 	to: [
	// 		{ opacity: 1, color: "#ffaaee" },
	// 		{ opacity: 1, color: "red" },
	// 		{ opacity: 0.5, color: "#008000" },
	// 		{ opacity: 0.8, color: "black" },
	// 	],
	// 	config: config,
	// });

	// const { xy } = useSpring({
	// 	from: { xy: [0, 0], c: "green" },
	// 	xy: on ? [800, 200] : [0, 0],
	// 	c: on ? "red" : "green",
	// 	config: config,
	// });

	// const n = useRef(0)
	// const styles = useSpring({
	// 	loop: {reverse: true, config: { friction: 4, tension: 10 }},
	// 	cancel: false,
	// 	// config: { duration: 1000 },
	// 	reverse: true,
	// 	from: { rotateZ: 0, x:100, y:100 },
	// 	to: { rotateZ: 180, x: 1000, y: 500 }
	// });

	const right = {
		bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
		justifySelf: "start",
	};

	const [aa, api] = useSpring(() => ({
		x: 0,
		y: 0,
		config: { friction: 6, tension: 10, color: "red" },
		scale: 1,
		...right,
	}));
	const { x, y } = aa;

	// const [bindFunction, setBindFunction] = useState({});
	// if (props.action === "Wobble") {
	// 	setBindFunction({
	// 		handler: ({ down, offset: [mx, my], tap }) => {
	// 			if (tap) {
	// 				console.log("tap", tap);
	// 			}
	// 			api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
	// 		},
	// 		config: { from: () => [x.get(), y.get()] },
	// 	})
	// } else if (props.action === "Stick") {
	// 	setBindFunction({
	// 		handler: ({ down, offset: [ox, oy] }) => api.start({ x: ox, y: oy, immediate: down }),
	// 		config: {
	// 			bounds: { left: -300, right: 300, top: -250, bottom: 250 },
	// 		},
	// 	})
	// }

	// const bind = useDrag(bindFunction.handler, bindFunction.config);

	const bind = useDrag(({ down, movement: [mx, my], tap }) => {
		if(tap) {
			console.log('tap', tap)
		}
		api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
	},
		// { axis: 'x' },
		// // { bounds: { left: -300, right: 300, top: -250, bottom: 250 } },
		{ pointer: { buttons: [1, 4], capture: false }, filterTaps: true, delay: 10  }
	)

	// const bind = useDrag(
	// 	({ down, offset: [ox] }) => api.start({ x: down ? ox : 0, immediate: down, config: { duration: 3000 } }),
	// 	{ from: () => [x.get(), 0] }
	//   )
	
	return (
		<div>
			{/* <animated.h1 style={animation}>Hello World</animated.h1>
			<animated.h1 style={colorAnimation}>Hello World</animated.h1>
			<animated.h1 style={multiAnimation}>Hello World</animated.h1>
			<animated.h1 style={animatedButton}>{!on ? "I'm red" : "Now I'm blue"}</animated.h1>
			<button onClick={() => toggle(!on)}>Change</button>

			<animated.h1 style={props}>hello</animated.h1> */}

			{/* <animated.div
				style={{
					width: 80,
					height: 80,
					backgroundColor: "#46e891",
					borderRadius: 25,
					...styles,
				}}
			/> */}

			<animated.div {...bind()} className={ListItemStyles.dragItem} style={{ x, y, touchAction: "none" }} />
		</div>
	);
};

export default ListItems;
