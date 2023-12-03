import { Component } from '@/components/component'

export default function Home () {
  const delayedMessage = new Promise((resolve) => {
    setTimeout(() => resolve('Hello from server!'), 2000)
  })
  return (
    <main>
      <div>
        <Component delayedMessage={delayedMessage}/>
      </div>
    </main>
  )
}
