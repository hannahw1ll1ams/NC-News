import React, { Component } from 'react';
import * as api from './api';


class ArticleVoteUpdater extends Component {
  state = {
    votesChange: 0
  }

  VotesChanger = (votesDifference) => {
    const { article_id } = this.props;
    api.patchArticleVotes(votesDifference, article_id).then(() => {
      this.setState(currentState => {
        return { votesChange: currentState.votesChange + votesDifference }
      })
    })
  }

  render() {
    const { votes } = this.props;
    const { votesChange } = this.state
    return (
      <div>
        <button onClick={() => this.VotesChanger(1)} type='submit' disabled={votesChange === 1}>VOTE UP</button>
        <p>VOTES: {votes + votesChange}</p>
        <button onClick={() => this.VotesChanger(-1)} type='submit' disabled={votesChange === -1}>VOTE DOWN</button>
      </div>
    );
  }
}

export default ArticleVoteUpdater;