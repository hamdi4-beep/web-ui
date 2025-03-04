import { MouseEventHandler } from "react"

export default function Button({
    handleClick,
    children
}: {
    handleClick: MouseEventHandler<HTMLButtonElement>
    children: string
}) {
    return (
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer" onClick={handleClick}>{children}</button>
    )
}