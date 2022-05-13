import { useState } from "react";

const Button = ({handleClick, label}) => {
  return (
    <>
      <button onClick={handleClick}>{label}</button>
    </>
  )
};

// Randomly generate an integer between [min, max] inclusive
const generateRandomNumber = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) + min);


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

  // Helper method(s)
  const generateNewIndex = () => {
    const i = generateRandomNumber(0, 6);
    setIndex(i);
  };

  // Handle next anecdote 
  const changeAnecdote = () => {
    generateNewIndex();
    setSelected(index);
  };

  // Handle anecdote vote
  // pre: 0 <= index <= 6
  const voteOnAnecdote = () => {
    // copy the array before updating the tally
    const votesCopy = [...votes]
    votesCopy[selected] += 1;
    setVotes(votesCopy)
  };

  // DELETE LATER
  console.log(votes)

  return (
    <div>
      {anecdotes[selected]}
      <div>
        <Button handleClick={voteOnAnecdote} label='vote' />
        <Button handleClick={changeAnecdote} label='next anecdote' />
      </div>
    </div>
  )
};

export default App;
