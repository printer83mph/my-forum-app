import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import NewMessage from './components/new-message'
import Thread from './components/thread'
import { MessageWithId } from './types'

const swapUrl = new URL(
  './resources/swap.png?width=160',
  import.meta.url,
)

const App = () => {
  const [threads, setThreads] = useState<MessageWithId[]>([])

  return (
    <main className="container max-w-2xl mx-auto mt-6 px-3 mb-4">
      <div className="flex items-center justify-center mb-4">
        <div className="w-20 h-20 aspect-square bg-cover bg-center rounded-full mr-5" title="swapneel my beloved" style={{ backgroundImage: `url('${swapUrl}')` }}>
          <span className="sr-only">swapneel my beloved</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">197 Forum Hub Discussions Central</h1>
      </div>
      <div className="mb-4">
        <NewMessage
          onSubmit={(msg) => {
            setThreads((t) => [...t, { id: uuidv4(), ...msg }])
          }}
          clear
        />
      </div>
      <ul className="flex flex-col gap-4">
        {threads.map((msg) => (
          <Thread {...msg} key={msg.id} depth={0} />
        ))}
      </ul>
    </main>
  )
}

export default App
