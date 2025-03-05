export default function Layer() {

    return (
        <div className="bg-[#eee] h-screen">
          <div className="response-container p-12 pb-8">
            <h1 className='font-bold text-5xl text-center'>Response Area</h1>
          </div>

          <div className="input-container border-t border-t-white p-8 my-8">
            <ul className="flex gap-4 justify-end">
              <li>What can you help me with?</li>
              <li>How should I phrase my questions to get the best answers?</li>
              <li>Do you have any limitations I should know about?</li>
              <li>Can you remember things from our previous conversations?</li>
              <li>How do you generate your responses?</li>
            </ul>

            <form action="#" onSubmit={() => false} className='py-8'>
              <textarea
                placeholder="Got something on your mind?"
                className="w-full outline-none"
              />
            </form>
          </div>
        </div>
    )
}