import React from 'react';

const Form = () => (
  <>
    <div className="formfield">
      <h1>Add New Book</h1>
      <form>
        <input type="text" name="title" placeholder="Book Name" />
        <input type="text" name="auther" placeholder="Auther Name" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </>
);

export default Form;
