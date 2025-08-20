import React from 'react'
import './Avatar.css'

const Avatar = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, cursor }) => {

  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'white',
    borderRadius,
    fontSize,
    textAlign: 'center',
    cursor: cursor || 'pointer',
    textDecoration: 'none'
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
