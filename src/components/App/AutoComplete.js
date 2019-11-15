import React from 'react';
import classes from 'classnames';
import withClickOutside from 'react-click-outside';
import uuid from 'uuid/v1';

import PropTypes from 'prop-types';
import styles from './AutoComplete.module.css';

class AutoComplete extends React.Component {
  state = {
    opened: false,
    selectedOption: null,
    hoveredOption: null,
    value: '',
  };

  constructor(props) {
    super(props);
    this._uniqeId = uuid();
  }

  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    options: [],
    onChange: () => {},
  };

  _onInputValueChange = e => {
    const { onChange } = this.props;
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

  _hoverOption = option => {
    const optionIndex = this._getOptionIndex(option, this.props.options);

    const queryId = `${this._uniqeId}@${optionIndex}`;
    const optionElement = document.querySelector(`[id='${queryId}']`);

    const optionRangeStart = optionElement.offsetTop;
    const optionRangeEnd =
      optionRangeStart + optionElement.getBoundingClientRect().height;

    const visibleRangeStart =
      this._optionsRef.offsetTop + this._optionsRef.scrollTop;
    const visibleRangeEnd =
      visibleRangeStart + this._optionsRef.getBoundingClientRect().height;

    const scrollIfNeeded = () => {
      if (optionRangeStart < visibleRangeStart) {
        const toScroll = optionRangeStart - visibleRangeStart;
        this._optionsRef.scrollBy(0, toScroll);
      } else if (optionRangeEnd > visibleRangeEnd) {
        const toScroll = optionRangeEnd - visibleRangeEnd;
        this._optionsRef.scrollBy(0, toScroll);
      }
    };

    this.setState(() => {
      return {
        hoveredOption: option,
      };
    }, scrollIfNeeded);
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

  // used by `withClickOutside` HOC
  handleClickOutside() {
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

  _selectOption = e => {
    const { hoveredOption } = this.state;
    if (!hoveredOption) {
      return;
    }
    this.setState({
      selectedOption: hoveredOption,
      hoveredOption: null,
      value: hoveredOption.displayValue,
    });
    this._closeOptions();
    e.preventDefault();
  };

  _onKeyDown = e => {
    // tab || enter
    if (e.keyCode === 9 || e.keyCode === 13) {
      this._selectOption(e);
    } else if (e.keyCode === 27) {
      this._closeOptions();
    } else if (e.keyCode === 38) {
      this._openOptions();
      this._hoverPrevOption();
    } else if (e.keyCode === 40) {
      this._openOptions();
      this._hoverNextOption();
    }
  };

  _getOptionIndex = (hoveredOption, options) => {
    for (let i = 0; i < options.length; i++) {
      const o = options[i];
      if (o === hoveredOption) {
        return i;
      }
    }

    return -1;
  };

  _hoverPrevOption = () => {
    const { hoveredOption } = this.state;
    const { options } = this.props;

    // no option -> do nothing
    if (!hoveredOption) {
      return;
    }

    // first option is hovered -> hover the last one
    const optionIndex = this._getOptionIndex(hoveredOption, options);
    if (hoveredOption === options[0]) {
      const lastOptionIndex = options.length - 1;
      this._hoverOption(options[lastOptionIndex]);
      return;
    }

    const nextOption = options[optionIndex - 1];
    this._hoverOption(nextOption);
  };

  _hoverNextOption = () => {
    const { hoveredOption } = this.state;
    const { options } = this.props;

    // no option -> hover the first one
    if (!hoveredOption) {
      this._hoverOption(options[0]);
      return;
    }

    // last option is hovered -> hover the first one
    const optionIndex = this._getOptionIndex(hoveredOption, options);
    if (optionIndex === options.length - 1) {
      this._hoverOption(options[0]);
      return;
    }

    const nextOption = options[optionIndex + 1];
    this._hoverOption(nextOption);
  };

  _renderOption(option, idx) {
    const isOptionHovered = this._isOptionHovered(option);
    const isOptionSelected = this._isOptionSelected(option);
    return (
      <div
        id={`${this._uniqeId}@${idx}`}
        key={`option${idx}`}
        className={classes(
          styles.option,
          isOptionSelected ? styles.option_selected : {},
          !isOptionSelected && isOptionHovered ? styles.option_hover : {},
        )}
        onClick={() => this._onOptionClick(option)}
        onMouseMove={() => this._hoverOption(option)}
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
        ref={ref => (this._optionsRef = ref)}
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
        onKeyDown={this._onKeyDown}
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
