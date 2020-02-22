import React, { Component, Fragment } from 'react'

export default class Card extends Component {
  render() {
    const { header, image, image_alt, subheader } = this.props;

    return (
      <Fragment>
        <h4>
          {header}
        </h4>
        <img
          className='avatar'
          src={image}
          alt={image_alt}
        />
        {subheader &&
          <h5>
            Score: {subheader.toLocaleString()}
          </h5>
        }
      </Fragment>
    )
  }
}
