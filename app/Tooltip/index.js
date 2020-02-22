import React, { Component } from 'react'
import Hover from '../Hover'
// import withHover from '../withHover'

const styles = {
  container: {
    position: 'relative',
    display: 'block'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  }
}

const Tooltip = ({ text, children, hovering }) => (
  <Hover>
    {(hovering) => (
      <div style={styles.container}>
        {hovering === true && <div style={styles.tooltip}>{text}</div>}
        {children}
      </div>
    )}
  </Hover>
)


export default Tooltip
