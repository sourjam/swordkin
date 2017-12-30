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

  // displays mail modal for list of mails
  displayMailModal() {
    let modal = document.getElementById("m-mailModal")
    if (modal.style.opacity == 0) {
      modal.style.opacity = 1
    } else {
      modal.style.opacity = 0
    }
  }

  // displays individual letters in a modal
  displayLetterModal(idx, letter) {
    let modal = document.getElementById('m-letterModal-' + idx)
    if (modal.style.display == 'none') {
      modal.style.display = 'inherit'
    } else {
      // check if letter has items to collect
      this.props.dispatch(markMailread(idx, letter.materials, letter.recipes))
      modal.style.display = 'none'
    }
  }

  render() {
    return (
      <div className={'o-gameScreenMail'}>
        <div style={{opacity: 1}} id="m-mailModal" className={'m-mailModal'}>
          { this.props.mail.map((letter, idx) => {
              return (
                <div key={'mail-' + idx}>
                  <div style={ letter.unread === true ? {border: '1px solid red' ,color: 'red'} : null } onClick={() => {this.displayLetterModal(idx)}} className={'a-letterHeader'} key={'letter-' + idx}>
                    From: {letter.from}, <i>{letter.subject}</i>
                  </div>
                  <div style={{display: 'none'}} id={'m-letterModal-' + idx } className={'m-letterModal'}>
                    <p>From: {letter.from}</p>
                    <p>{ letter.content }</p>
                    { letter.materials ?
                      <p><strong>Enclosed material: {letter.materials[0].name} x {letter.materials[0].count}</strong></p>
                      : null
                    }
                    { letter.recipes ?
                      <p><strong>Enclosed recipe: {letter.recipes[0].name}</strong></p>
                      : null
                    }
                    { letter.unread === true ?
                      <button onClick={() => {this.displayLetterModal(idx, letter)}}>Collect</button>
                      : null
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(markMailread, dispatch) }
}

export default connect(mapDispatchToProps)(gameScreenMail)
