import { useRef } from 'react'
import _ from 'lodash'
import { useSprings, animated } from '@react-spring/web'
import { useDrag } from "@use-gesture/react";

// Returns fitting styles for dragged/idle items
const fn = (order, active, originalIndex, curIndex, y) => (index) =>
  active && index === originalIndex
    ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: (n) => n === 'y' || n === 'zIndex' }
    : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }

const Reorder = ({ items }) => {
  const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  const [springs, setSprings] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.

  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = _.clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    console.log(curRow)
    // // const newOrder = _.swap(order.current, curIndex, curRow)
    // setSprings(fn(newOrder, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    // if (!active) order.current = newOrder
  })

  return (
    <div className="content" style={{ height: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.to((s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            y,
            scale
          }}
          children={items[i]}
        />
      ))}
    </div>
  )
}

export default Reorder

