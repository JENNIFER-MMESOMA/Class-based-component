import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Jennifer Mmesoma',
        bio: 'A software engineer who loves coding.',
        imgSrc: 'https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png',
        profession: 'Software Engineer',
      },
      show: false,
      timeSinceMounted: 0,
    };
  }

  // Step 6: Lifecycle method for time interval
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  // Step 5: Toggle the visibility of the profile
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button onClick={this.toggleShow}>
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {/* Step 4: Show person's profile if `show` is true */}
        {this.state.show && (
          <div style={{ marginTop: '20px' }}>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <h3>{this.state.person.profession}</h3>
          </div>
        )}

        {/* Step 7: Show time since the component was mounted */}
        <p>Component mounted for {this.state.timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default Person;
