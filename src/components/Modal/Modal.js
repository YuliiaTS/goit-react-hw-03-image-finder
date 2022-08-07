import React, { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyEscape);
  }

  onKeyEscape = e => {
    if (e.code === 'Escape') {
      this.props.modalToggle();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.modalToggle();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.imageSelected;

    return (
      <div className={s.Overlay} onClick={this.props.modalToggle}>
        <div className={s.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  modalToggle: PropTypes.func.isRequired,
  imageSelected: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
