import React from 'react';
import { connect } from 'react-redux';
import { markMailread } from '../actions';
import { bindActionCreators } from 'redux';

class gameScreenMail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.show = false
    this.displayMailModal = this.displayMailModal.bind(this)
    this.displayLetterModal = this.displayLetterModal.bind(this)
  }

  // displays modal when clicking mail button
  displayMailModal() {
    let modal = document.getElementById("m-mailModal")
    if (modal.style.opacity == 0) {
      modal.style.opacity = 1
    } else {
      modal.style.opacity = 0
    }
  }

  displayLetterModal(idx) {
    console.log(idx)
    let modal = document.getElementById('m-letterModal-' + idx)
    if (modal.style.display == 'none') {
      modal.style.display = 'inherit'
    } else {
      console.log('go to none...')
      this.props.dispatch(markMailread(idx))
      modal.style.display = 'none'
    }
    // console.log(mailModal)
  }

  render() {
    // mail modal button and modal
    // unread mail will be bold and red in color
    //
    return (
      <div className={'o-gameScreenMail'}>
        <div style={{opacity: 0}} id="m-mailModal" className={'m-mailModal'}>
          { this.props.mail.map((letter, idx) => {
              return (
                <div key={'mail-' + idx}>
                  <div onClick={() => {this.displayLetterModal(idx)}} className={'a-letterHeader'} key={'letter-' + idx}>
                    From: {letter.from}, <i>{letter.subject}</i>
                  </div>
                  <div style={{display: 'none'}} id={'m-letterModal-' + idx } className={'m-letterModal'}>
                    <div onClick={() => {this.displayLetterModal(idx)}}>X</div>
                    <p>From: {letter.from}</p>
                    <p>{ letter.content }</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <button onClick={this.displayMailModal} className={'m-gameScreenMail'}>
          Mail: {this.props.unreadMail == 0 ? <span>{this.props.unreadMail}</span> : <strong style={{color: 'red'}}>{this.props.unreadMail}</strong> }
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(markMailread, dispatch) }
}

export default connect(mapDispatchToProps)(gameScreenMail)
