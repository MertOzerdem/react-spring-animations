import { useSpring } from "react-spring";
import ListItemStyles from "./ListItems.module.css";
import ListItem from "../ListItem/ListItem";

const ListItems = (props) => {
	const right = {
		bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
		justifySelf: "start",
	};
	const [{ x, y }, api] = useSpring(() => ({
		x: 0,
		y: 0,
		config: { friction: 6, tension: 10, color: "red" },
		scale: 1,
		...right,
	}));
	const animationSets = {
		drag: {
			bindFunction: ({ down, movement: [mx, my], tap }) => {
				if (tap) {
					console.log("tap", tap);
				}
				// api.set({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
				api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
			},
			bindConfig: { pointer: { buttons: [1, 4], capture: false }, filterTaps: true, delay: 10 },
		},
		offset: {
			bindFunction: ({ down, offset: [ox] }) => {
				// api.set({ x: down ? ox : 0, immediate: down, config: { duration: 1500 } })
				api.start({ x: down ? ox : 0, immediate: down, config: { duration: 1500 } })
			},
			bindConfig: { from: () => [x.get(), 0] },
		},
		stick: {
			bindFunction: ({ down, offset: [ox, oy] }) => api.start({ x: ox, y: oy, immediate: down }),
			bindConfig: { left: -30, right: 30, top: -25, bottom: 25 }
		}
	};

	return (
		<div>
			<ListItem
				className={ListItemStyles.dragItem}
				dragBindFunction={animationSets[props.action].bindFunction}
				dragBindConfig={animationSets[props.action].bindConfig}
				style={{ x, y, touchAction: "none" }}
			></ListItem>
		</div>
	);
};

export default ListItems;
