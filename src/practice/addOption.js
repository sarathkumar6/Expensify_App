const indecisionObj = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
  };
  
  const app = (
    <div>
      <h1>
        {indecisionObj.title}
      </h1>
      {indecisionObj.subtitle && <p>indecisionObj.subtitle</p>}
      <p>{indecisionObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{indecisionObj.options.length}</p>
      <ol>
          <li>Item one</li>
          <li>Item one</li>
      </ol>
      <form onSubmit={onFormSubmit}>
          <input name="option" id="" className="btn btn-primary" type="text" />
          <button className="btn">Add Option</button>
      </form>
    </div>
  );
  
  // class attribute in HTML -----> className in JSX because class is a reserved keyword
  //ReactDOM.render(app, getElement); //Takes two arguments 1) JSX 2)
  
  const renderIndecisionApp = () => {
      const app = (
          <div>
            <h1>
              {indecisionObj.title}
            </h1>
            {indecisionObj.subtitle && <p>indecisionObj.subtitle</p>}
            <p>{indecisionObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{indecisionObj.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item one</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input name="option" id="" className="btn btn-primary" type="text" />
                <button className="btn">Add Option</button>
            </form>
          </div>
        );
        ReactDOM.render(app, getElement);
  }
  
  const onFormSubmit = (event) => {
      event.preventDefault();
      console.log('Form Submitted');
      const option = event.target.elements.option.value;
      if (option) {
          indecisionObj.options.push(option);
          renderIndecisionApp();
      }
  };
  
  renderIndecisionApp();