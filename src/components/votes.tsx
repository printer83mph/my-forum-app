import React, { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

const Votes = () => {
  const [score, setScore] = useState(0)

  return (
    <div className="flex flex-col items-center text-sm">
      <button type="button" onClick={() => setScore(s => s + 1)}>
        <HiChevronUp title="Upvote" />
      </button>
      <div className="font-bold text-gray-700">{score}</div>
      <button type="button" onClick={() => setScore(s => s - 1)}>
        <HiChevronDown title="Downvote" />
      </button>
    </div>
  )
}

export default Votes
