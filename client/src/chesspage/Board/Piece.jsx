import React from 'react'
import { useDrag } from 'react-dnd'

export default function Piece({ piece: { type, color } }) {
  const [ , drag] = useDrag({
    item: { type: 'piece', id: `${type}_${color}` },
  })

  const pieceImg = require(`../assets/${type}_${color}.png`)
  return (
    <div className="piece-container" ref={drag}>
      <img src={pieceImg} alt="" className="piece" />
    </div>
  )
}
