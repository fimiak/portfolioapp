import React from 'react';

function Form() {
  return (
    <form
      action="mailto:tylerjamesgreve@gmail.com?subject=Message Tyler from his Website!&body=Message:"
      method="get"
      name="form"
      enctype="text/plain"
      className="form">
      <input type="text" name="name" minlength="3" placeholder="Name"></input>
      <input type="email" name="email" placeholder="Email Address" />
      <textarea type="text" name="message" rows="4" placeholder="Message me!" minlength="10"></textarea>
      <input className="form-submit" type="submit" value="Send" name="submit"></input>
    </form>
  );
}

export default Form;
