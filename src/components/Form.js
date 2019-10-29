import React from 'react';

function Form() {
  return (
    <form
      action="mailto:tylerjamesgreve@gmail.com?subject=Message Tyler from his Website!&body=Message:"
      method="get"
      name="form"
      className="form">
      <input type="text" name="name" minlength="3" placeholder="Name"></input>
      <input type="email" name="email" placeholder="Email Address" />
      <textarea type="text" name="message" rows="4" placeholder="Message me!" minlength="10"></textarea>
      <button type="submit" name="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
