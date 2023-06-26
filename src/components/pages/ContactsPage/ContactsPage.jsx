import Form from "components/modules/form/Form";
import Filter from "components/modules/filter/Filter";
import Contacts from "components/modules/contacts/Contacts";
import css from './ContactsPage.module.scss'

const ContactsPage = () => {
    return (
        <>
            <div className={css.container}>
            <h1>Phonebook</h1>
            <Form />
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
            </div>
        </>
    )
}
export default ContactsPage;