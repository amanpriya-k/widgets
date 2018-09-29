import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currIndex: 7 };
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    const tabs = this.props.keys.map ( (key) =>
         ( <div id={key.title} key={key.idx} class="tab">
            <h1 class="tab-header" onClick={this.clickHandler} > {key.title}</h1>
            <article class="tab-content">{key.content}</article>
           </div> )
    );
    return (
      <div class="tabs">
        <ul>
        {tabs}
        </ul>
      </div>
    );
  }

  clickHandler(e) {
    let idx = this.props.keys.findIndex( el => el.title === e.target.innerText);
    this.setState( { currIndex: idx });
    let nameStr = '#' + this.props.keys[idx].title;
    let person = document.querySelector(nameStr);
    let content = person.children[1];
    content.classList.add('orange');
    // debugger;
    console.log(this.state.currIndex);
  }

}

export default Tabs;






String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
