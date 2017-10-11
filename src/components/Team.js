import React, { Component } from 'react';

class Team extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li className="list-group-item">{item}</li>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="list-group">
          {listItems}
      </ul>
    );
  }
};

export default Team;
