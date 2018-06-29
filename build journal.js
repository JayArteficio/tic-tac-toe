Taken from React Tutorial on 
https://reactjs.org/tutorial/tutorial.html#lifting-state-up

1. only doing until bare-bones Game (no history)
2. need to refactor into more modern react 
3. understand the logic more fully 
4. pretty up or remake a new one

5. Old vs. New React 
https://gist.github.com/davidpaulhunt/1091b91ad0271f2df9b1

Declaration
// old
const helloWorld = React.createClass({
  render() {},
});

// new
class HelloWorld extends React.Component {
  render() {}
}

Default properties and property types
// old
const helloWorld = React.createClass({
  getDefaultPropTypes() {
    return {
      greeting: React.PropTypes.string,
    };
  },
  
  getDefaultProps() {
    return {
      greeting: 'Hello, world!',
    };
  },
  
  render() {},
});

// new
class HelloWorld extends React.Component {
  static propTypes = {
    greeting: React.PropTypes.string,
  };
  
  static defaultProps = {
    greeting: 'Hello, world!',
  };
  
  render() {}
}
Default state
// old
const helloWorld = React.createClass({
  getDefaultPropTypes() {
    return {
      greeting: React.PropTypes.string,
    };
  },
  
  getDefaultProps() {
    return {
      greeting: 'Hello, world!',
    };
  },
  
  getInitialState(props) {
    return {
      greetedCount: 0,
    };
  },
  
  render() {},
});

// new
class HelloWorld extends React.Component {
  static propTypes = {
    greeting: React.PropTypes.string,
  };
  
  static defaultProps = {
    greeting: 'Hello, world!',
  };
  
  constructor(props) {
    super(props);
    this.state = { greetedCount: 0 };
  }
  
  render() {}
}
Proper binding
// old
const helloWorld = React.createClass({
  getDefaultPropTypes() {
    return {
      greeting: React.PropTypes.string,
    };
  },
  
  getDefaultProps() {
    return {
      greeting: 'Hello, world!',
    };
  },
  
  getInitialState(props) {
    return {
      greetedCount: 0,
    };
  },
  
  handleClick(e) {
    alert(this.props.greeting);
    this.setState({ greetedCount: this.greetedCount + 1 });
  },
  
  render() {
    return (
      <button onClick={ this.handleClick.bind(this) }>Click Me!</button>
    );
  },
});

// new
class HelloWorld extends React.Component {
  static propTypes = {
    greeting: React.PropTypes.string,
  };
  
  static defaultProps = {
    greeting: 'Hello, world!',
  };
  
  constructor(props) {
    super(props);
    this.state = { greetedCount: 0 };
  }
  
  handleClick = () => {
    alert(this.props.greeting);
    this.setState({ greetedCount: this.state.greetedCount + 1 });
  }
  
  render() {
    return (
      <button onClick={ handleClick }>Click Me!</button>
    );
  }
}
