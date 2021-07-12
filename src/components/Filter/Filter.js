// import React from "react";
// import PropTypes from "prop-types";
// import styles from "../Filter/Filter.module.css";

// const Filter = ({ value, onFilter }) => {
//   return (
//     <input
//       className={styles.input}
//       type="text"
//       value={value}
//       onChange={onFilter}
//     />
//   );
// };

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onFilter: PropTypes.func.isRequired,
// };

// export default Filter;

import React from "react";
import { connect } from "react-redux";
import styles from '../Filter/Filter.module.css';
import actions from "../../redux/actions";

const Filter = ({ value, onFilter }) => {
  return <input type="text" className={styles.input} value={value} placeholder="Filter" onChange={onFilter} />
}

const mapStateToProps = (state) => ({
  value: state.filter,
})

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(actions.Filter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)