import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      surname: "",
      phone: "",

    }
  }

  handleChangeForm = ({ target: { name, value } }) => {    
    this.setState({
      [name]: value,
    })
  }

  handleFormSubmit = (ev) => {
    ev.preventDefault();

    const { name, surname, phone } = this.state;
    const { onAdd, contacts } = this.props;

    const isValidatedForm = this.validateForm();
   
    if (!isValidatedForm) {
      return
    }
    
//     const conactexist = !!contacts.find((name) => name === contacts.name)
// if(conactexist){
//   contacts
// }
    if(typeof(name)==="number") {
      throw new Error ("error!!");
    }

    onAdd({ id: new Date().getSeconds(), name, surname, phone })


  }

  validateForm = () => {
    const { name, surname, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !surname || !phone) {
      alert("Fill in required fields!");
      return false
    }
    return onCheckUnique(name)
  }



  // resetForm = () => {
  //   return this.setState({
  //     name: "",
  //     surname: "",
  //     phone: ""
  //   })
  // }

  render() {
    const {name, surname, phone} = this.state;

    return (
      <>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="name" placeholder="Input your name" value={name} onChange={this.handleChangeForm} />
          <input type="text" name="surname" placeholder="Input your surname" value={surname} onChange={this.handleChangeForm} />
          <input type="tel" name="phone" placeholder="Input your phone number" value={phone} onChange={this.handleChangeForm} />
          <button type="submit" className="but">Add contact</button>
        </form>
      </>
    )
  }
}


export default ContactForm    