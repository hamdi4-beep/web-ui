import { motion } from "framer-motion"
import React from "react"

function App() {
  const [value, setValue] = React.useState('')

  return (
    <div className="App">
      <div className="container max-w-5xl bg-[#eee] mx-auto pt-8 h-screen">
        <motion.div
          key={value}
          className="circle bg-white rounded-full w-1/4 h-1/4 mx-auto"
          animate={{ scale: .5 }}
          transition={{ duration: 0.3 }}
        />

        <div className="form-input border-t border-t-white py-8 my-8">
          <form action="#" onSubmit={() => false}>
            <textarea
              placeholder="Got something on your mind?"
              className="w-full outline-none p-4"
              onChange={e => setValue(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App