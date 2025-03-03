

function App() {
  return (
    <div className="App">
      <div className="container max-w-5xl bg-[#eee] mx-auto pt-8 h-screen">
        <div className="circle bg-white rounded-full w-1/4 h-1/4 mx-auto"></div>

        <div className="form-input border-t border-t-white py-8 my-8">
          <form action="#" onSubmit={() => false}>
            <input
              type="text"
              placeholder="Got something on your mind?"
              className="w-full outline-none p-4"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App