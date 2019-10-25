import React from "react";
import PropTypes from "prop-types";
import styles from "./AutoComplete.module.css";

class AutoComplete extends React.Component {

  static propTypes = {
    options: PropTypes.array.isRequired
  };

  static defaultProps = {
    options: [],
  };

  _renderOption(option, idx) {
    return <div key={`option${idx}`} className={styles.option}>{option}</div>;
  }

  render() {
    const {options} = this.props;
    return (
      <div className={styles.root}>
        <input className={styles.input}/>
        <div className={styles.options}>
          {options.map((option, idx) => this._renderOption(option, idx))}
        </div>
      </div>
    );
  }
}


export default AutoComplete;
