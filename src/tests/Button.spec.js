import React, {useState} from "react";
import {
  create
} from "react-test-renderer";

/* First test
function Button(props) {
  return <button>Nothing to do for now</button>;
}

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
*/

// second test, WRONG WAY
//Test de modo errado, pois testa o ESTADO do componente, mas não o q está sendo apresentado de fato
/*
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return {
        text: "PROCEED TO CHECKOUT"
      };
    });
  }

  render() {
    return ( 
      <button onClick = {this.handleClick} > {this.state.text || this.props.text}</button>
    );
  }
}

describe("Button component", () => {
  test("it shows the expected text when clicked (testing the wrong way!)", () => {
    const component = create( <Button text = "SUBSCRIBE TO BASIC" /> );
    const instance = component.getInstance();
    expect(instance.state.text).toBe("");
    //teste de click do botao
    instance.handleClick();
    expect(instance.state.text).toBe("PROCEED TO CHECKOUT");
  });
});
*/

//third test
//Test the component from the user’s perspective: test what the user should see.
/*
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(() => {
      return { text: "PROCEED TO CHECKOUT" };
    });
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.text || this.props.text}
      </button>
    );
  }
}

describe("Button component", () => {
  test("it shows the expected text when clicked (testing the RIGHT way!)", () => {
    const component = create(<Button text="SUBSCRIBE TO BASIC" />);
    //the documentation testRenderer.root 
    //“returns the root test instance object that is useful for making assertions about specific nodes in the tree”
    const instance = component.root;
    const button = instance.findByType("button");
    button.props.onClick();
    expect(button.props.children).toBe("PROCEED TO CHECKOUT");
  });
});
*/

//fourth test -> using hooks
//Usando Hooks precisa de um ReactDom para simular a renderização dos compontes
//No exemplo foi usado ReactDom e o act foi usado para interagir com o DOM
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

function Button(props) {
  const [text, setText] = useState("");
  function handleClick() {
    setText("PROCEED TO CHECKOUT");
  }
  return <button onClick={handleClick}>{text || props.text}</button>;
}


let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Button component", () => {
  test("it shows the expected text when clicked", () => {
    act(() => {
      ReactDOM.render(<Button text="SUBSCRIBE TO BASIC" />, container);
    });

    const button = container.getElementsByTagName("button")[0];
    expect(button.textContent).toBe("SUBSCRIBE TO BASIC");

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(button.textContent).toBe("PROCEED TO CHECKOUT");
  });
});