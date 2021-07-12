import React from "react";
import { connect, useSelector } from "react-redux";
import styles from "../Contact/Contact.module.css";
import actions from "../../../redux/actions";


const Contact = ({ onDeleteClick }) => {
  const contacts = useSelector((state) => {
    

    return state.contacts
  });
  const filter = useSelector(({ filter }) => filter);
  const filteredContacts = getFilteredContacts(contacts, filter);
  return filteredContacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={styles.Contact}>
        {name}: {number}
        <button className={styles.button} onClick={() => onDeleteClick(id)} type="button">
          Delete
        </button>
      </li>
    )
  })
};
const getFilteredContacts = (allContacts, filterValue) =>
  allContacts.filter(({ name }) => name.toLowerCase().includes(filterValue.toLowerCase()))

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: (id) => dispatch(actions.Delete(id)),
});

export default connect(null, mapDispatchToProps)(Contact);