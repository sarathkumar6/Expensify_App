/**
 * What is JSX?
 *  - JavaScript XML (JS Language extension)
 *  - Makes working with templates more easier
 *
 * What is Babel?
 *  - JavaScript compiler
 *  - Take features in ES6, ES7 or later releases and convert into ES5 to support stone age browsers like IE
 */

const getElement = document.getElementById("app");
const recipe = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  sides: ["Raita", "Sliced onion"]
};
const template = (
  <div>
    <h1>Title: {recipe.title}</h1>
    <h3>Subtitle: {recipe.subtitle}</h3>
    <ul>
      <li>{recipe.sides[0]}</li>
      <li>{recipe.sides[1]}</li>
    </ul>
  </div>
);

/**
 * Create app object with properties i.e. title, subtitle
 * render template
 */

/**
 *  Create a templateTwo let JSX expression
 *  let templateTwo = <div>
 *      <h1>Sarath Nagaraj</h1>
 *      <p>Age: 30</p>
 *      <p>Location: Webster, New York</p>
 *  </div>;
 */

const indecisionObj = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onRemoveAllOptionsHandler = () => {
  indecisionObj.options = [];
  renderIndecisionApp();
}

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * indecisionObj.options.length);
  alert(indecisionObj.options[randomNumber]);
}

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
          <p>{indecisionObj.subtitle}</p>
          <p>{indecisionObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <ol>
            {
                indecisionObj.options.map((option, index) => <li key={index}>{option}</li>)
            }
          </ol>
          <button disabled={indecisionObj.options.length < 1} onClick={onMakeDecision}>What should I do?</button>
          <button onClick={onRemoveAllOptionsHandler}>Remove All</button><br></br><br></br>
          <form onSubmit={onFormSubmit}>
              <input name="option" id="" className="btn btn-primary" type="text" /><br></br>
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
