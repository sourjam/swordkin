import React from 'react';

export default class gameScreenMail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.displayMailModal = this.displayMailModal.bind(this)
  }

  displayMailModal() {
    let modal = document.getElementById("m-mailModal")
    if (modal.style.opacity == 0) {
      modal.style.opacity = 1
    } else {
      modal.style.opacity = 0
    }
  }

  render() {
    return (
      <div className={'o-gameScreenMail'}>
        <button onClick={this.displayMailModal} className={'m-gameScreenMail'}>
          Mail: {this.props.unreadMail == 0 ? <span>{this.props.unreadMail}</span> : <strong style={{color: 'red'}}>{this.props.unreadMail}</strong> }

          <div style={{opacity: 0}} id="m-mailModal" className={'m-mailModal'}></div>
        </button>
      </div>
    )
  }
}
