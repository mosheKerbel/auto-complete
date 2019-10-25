import React from 'react';
import classes from 'classnames';
import withClickOutside from 'react-click-outside';

import PropTypes from 'prop-types';
import styles from './AutoComplete.module.css';

class AutoComplete extends React.Component {
  state = {
    opened: false,
    selectedOption: null,
    hoveredOption: null,
    value: '',
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    options: [],
    onChange: () => {},
  };

  _onInputValueChange = e => {
    const {onChange} = this.props;
    const {
      target: { value },
    } = e;
    this.setState(() => {
      return {
        value: value,
      };
    }, onChange(value));
  };

  _onOptionClick = option => {
    this._closeOptions();
    this.setState(() => {
      return {
        selectedOption: option,
        value: option.displayValue,
      };
    });
  };

  _onOptionHover = option => {
    this.setState(() => {
      return {
        hoveredOption: option,
      };
    });
  };

  _onOptionOut = () => {
    this.setState(() => {
      return {
        hoveredOption: null,
      };
    });
  };

  _openOptions = () => {
    this.setState(() => {
      return {
        opened: true,
      };
    });
  };

  _closeOptions = () => {
    this.setState(() => {
      return {
        opened: false,
      };
    });
  };

  handleClickOutside() {
    // used by `withClickOutside` HOC
    this._closeOptions();
  }

  _isOptionHovered = option => {
    const { hoveredOption } = this.state;
    return hoveredOption && hoveredOption.value === option.value;
  };

  _isOptionSelected = option => {
    const { selectedOption } = this.state;
    return selectedOption && selectedOption.value === option.value;
  };

  _renderOption(option, idx) {
    const isOptionHovered = this._isOptionHovered(option);
    const isOptionSelected = this._isOptionSelected(option);
    return (
      <div
        key={`option${idx}`}
        className={classes(
          styles.option,
          isOptionSelected ? styles.option_selected : {},
          !isOptionSelected && isOptionHovered ? styles.option_hover : {},
        )}
        onClick={() => this._onOptionClick(option)}
        onMouseOver={() => this._onOptionHover(option)}
        onMouseOut={() => this._onOptionOut()}
      >
        {option.displayValue}
      </div>
    );
  }

  _renderOptions = () => {
    const { options } = this.props;
    const { opened } = this.state;
    return (
      <div
        className={classes(
          styles.options,
          opened ? styles.options_opened : styles.options_closed,
        )}
      >
        {options.map((option, idx) => this._renderOption(option, idx))}
      </div>
    );
  };

  _renderInput = () => {
    const { value } = this.state;
    return (
      <input
        onClick={this._openOptions}
        className={styles.input}
        value={value}
        onChange={this._onInputValueChange}
      />
    );
  };

  render() {
    return (
      <div className={styles.root}>
        {this._renderInput()}
        {this._renderOptions()}
      </div>
    );
  }
}

export default withClickOutside(AutoComplete);
