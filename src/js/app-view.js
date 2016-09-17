// Import React
import React from 'react';

// Create class called AppView that extends the base React Component class
class AppView extends React.Component {
  render() {
    return (
      <div>AppView {this.props.name}</div>
    );
  }
}

export default AppView;
