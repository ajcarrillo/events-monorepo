function App() {
  return (
    <button onClick={async ()=> {
      const res = await fetch('/api')
      const data = await res.text()
      console.log(data)
    }}>Click me</button>
  )
}

export default App