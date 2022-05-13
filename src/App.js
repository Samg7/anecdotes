import { useState } from "react";

const Anecdote = ({text, voteTally}) => {
  return (
    <>
      {text}
      <div>
        has {voteTally} votes
      </div>
    </>
  )
};

const Button = ({handleClick, label}) => {
  return (
    <>
      <button onClick={handleClick}>{label}</button>
    </>
  )
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  // State definitions
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(7).fill(0));
  const [index, setIndex] = useState(0);
  const [mostVotedIndex, setMostVotedIndex] = useState(0);

  // Helper function(s)
  // Randomly generate an integer between [min, max] inclusive
  const generateRandomNumber = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) + min);

  const generateNewIndex = () => {
    const i = generateRandomNumber(0, anecdotes.length - 1);
    setIndex(i);
  };

  // Handle next anecdote 
  const changeAnecdote = () => {
    generateNewIndex();
    setSelected(index);
  };

  // Handle anecdote vote
  const voteOnAnecdote = () => {
    // copy the array before updating the tally
    const votesCopy = [...votes]
    votesCopy[selected] += 1;
    setVotes(votesCopy)
  };

  // Update state of most voted anecdote to reflect change in index
  for (let i = 0; i < anecdotes.length; i++) {
    if (votes[i] > votes[mostVotedIndex]) {
      setMostVotedIndex(i);
    }
  }

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <Anecdote text={anecdotes[selected]} voteTally={votes[selected]} />
      <div>
        <Button handleClick={voteOnAnecdote} label='vote' />
        <Button handleClick={changeAnecdote} label='next anecdote' />
      </div>
      <h3>Anecdote with most votes</h3>
      <Anecdote text={anecdotes[mostVotedIndex]} voteTally={votes[mostVotedIndex]} />
    </div>
  )
};

export default App;
