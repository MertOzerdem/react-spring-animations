import { animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import ListItemStyles from "./ListItem.module.css";

const ListItem = (props) => {
    const { dragBindFunction, dragBindConfig, style, className } = props;
    const dragBind = useDrag(dragBindFunction, dragBindConfig);

    return (
        <animated.div className={className} {...dragBind()} style={style}></animated.div>
    )
}

export default ListItem;