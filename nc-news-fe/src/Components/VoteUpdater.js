import React, { Component } from 'react';
import * as api from '../api';
import '../App.css';


class VoteUpdater extends Component {
  state = {
    votesChange: 0
  }

  VotesChanger = (votesDifference) => {
    const { id, item } = this.props;
    console.log(item)
    this.setState(currentState => {
      return { votesChange: currentState.votesChange + votesDifference }
    })
    api.patchVotes(votesDifference, id, item)
  }

  render() {
    const { votes } = this.props;
    const { votesChange } = this.state
    return (
      <div>
        <button className='vote-up-button' onClick={() => this.VotesChanger(1)} type='submit' disabled={votesChange === 1}>VOTE UP</button>
        <p>VOTES: {votes + votesChange}</p>
        <button className='vote-down-button' onClick={() => this.VotesChanger(-1)} type='submit' disabled={votesChange === -1}>VOTE DOWN</button>
      </div>
    );
  }
}

export default VoteUpdater;