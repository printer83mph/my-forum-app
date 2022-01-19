import React, { useState } from 'react'
import { Message } from '../types'

export interface NewMessageProps {
  onSubmit: (values: Message) => void
  clear?: boolean
}

const NewMessage = ({ onSubmit, clear }: NewMessageProps) => {
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const fieldsInvalid = !(name.trim().length && message.trim().length)

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault()
        onSubmit({ name, message })
        if (clear) {
          setName('')
          setMessage('')
        }
      }}
      className="flex flex-col"
    >
      <input
        type="text"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
        placeholder="Your Name Here"
        className="rounded py-2 px-3 border-gray-300 border-[1px] mb-3"
      />
      <input
        value={message}
        onChange={(evt) => setMessage(evt.target.value)}
        placeholder="Your Message Here"
        className="rounded py-2 px-3 border-gray-300 border-[1px] resize-none mb-3 whitespace-wrap"
      />
      <button
        type="submit"
        className={`rounded px-6 py-2 ${fieldsInvalid ? 'bg-blue-400' : 'bg-blue-700'} text-white ml-auto tracking-wide`}
        disabled={fieldsInvalid}
      >
        Submit
      </button>
    </form>
  )
}

export default NewMessage
