import React from 'react'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <p>
        <p>HELLO WORLD</p>
      </p>
    )
  }
}

export default Error