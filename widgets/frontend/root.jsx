import React from 'react';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';

  const Root = () => {
    return (
      <div>
        <Clock />
        <Tabs keys= {tabsContent()} />
      </div>
    );
  };

  function tabsContent() {
    let output = [];
    output.push( { title: 'joe', content: 'is joking', idx: 0 } );
    output.push( { title: 'riya', content: 'is rad', idx: 1 } );
    output.push( { title: 'wade', content: 'is wonderful', idx: 2 } );
    output.push( { title: 'dom', content: 'is the DOM!!!', idx: 3 } );
    output.push( { title: 'sam', content: 'is so smart', idx: 4 } );
    output.push( { title: 'elena', content: 'is so amazing', idx: 5 } );
    output.push( { title: 'jen', content: 'is jubilant!', idx: 6 } );
    output.push( { title: 'liz', content: 'is learned/levelhead/limber/lionhearted/likeable', idx: 7 } );
    output.push( { title: 'Manny', content: 'is magnificient', idx: 8} );
    return output;
  }
export default Root;
