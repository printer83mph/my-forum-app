import React, { useState } from 'react'
import { HiReply, HiX } from 'react-icons/hi'
import { v4 as uuidv4 } from 'uuid'

import { Message, MessageWithId } from '../types'
import NewMessage from './new-message'
import Votes from './votes'

export interface ThreadProps extends Message {
  depth: number
}

const Thread = ({ name, message, depth }: ThreadProps) => {
  const [replies, setReplies] = useState<MessageWithId[]>([])
  const [replyOpen, setReplyOpen] = useState<boolean>()

  return (
    <li className="flex flex-col">
      <div className="flex flex-row justify-between items-center mb-2">
        <div>
          <p className="text-sm text-sky-700 tracking-wide">{name}</p>
          <p className="mt-1">{message}</p>
        </div>
        <Votes />
      </div>
      {depth < 2 ? (
        <>
          {replies.length ? (
            <ul className="border-l-gray-300 border-l-2 mb-2 pl-3 flex flex-col gap-3 py-1">
              {replies.map(reply => (
                <Thread {...reply} key={reply.id} depth={depth + 1} />
              ))}
            </ul>
          ) : null}
          <button
            type="button"
            onClick={() => setReplyOpen(v => !v)}
            className="mr-auto text-gray-400 text-sm flex gap-1 items-center tracking-wide"
          >
            {replyOpen ? (
              <>
                <HiX />
                Cancel
              </>
            ) : (
              <>
                <HiReply />
                Reply
              </>
            )}
          </button>
          {replyOpen && (
            <div className="mt-2">
              <NewMessage
                onSubmit={msg => {
                  setReplyOpen(false)
                  setReplies(r => [...r, { id: uuidv4(), ...msg }])
                }}
              />
            </div>
          )}
        </>
      ) : null}
    </li>
  )
}

export default Thread
