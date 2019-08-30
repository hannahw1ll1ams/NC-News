import React, { Component } from 'react';
import * as api from '../api';
import '../App.css';


class VoteUpdater extends Component {
  state = {
    votesChange: 0
  }

  VotesChanger = (votesDifference) => {
    const { comment_id } = this.props;
    this.setState(currentState => {
      return { votesChange: currentState.votesChange + votesDifference }
    })
    api.patchVotes(votesDifference, comment_id)
  }

  render() {
    const { votes } = this.props;
    const { votesChange } = this.state
    return (
      <div>
        <button class='vote-up-button' onClick={() => this.VotesChanger(1)} type='submit' disabled={votesChange === 1}>VOTE UP</button>
        <p>VOTES: {votes + votesChange}</p>
        <button class='vote-down-button' onClick={() => this.VotesChanger(-1)} type='submit' disabled={votesChange === -1}>VOTE DOWN</button>
      </div>
    );
  }
}

export default VoteUpdater;