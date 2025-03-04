import * as React from 'react'
import { motion } from 'framer-motion'

export default function Layer1() {
    const [value, setValue] = React.useState('')

    return (
        <div className="bg-[#eee] h-screen">
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
    )
}