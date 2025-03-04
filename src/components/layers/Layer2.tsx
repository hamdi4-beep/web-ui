import Button from "../ui/Buttons"

export default function Layer2() {
    return (
        <div className="layer">
            <h1>Layer 2</h1>
            <Button handleClick={() => scroll({
                top: 0,
                behavior: 'smooth'
            })}>
                Layer 1
            </Button>
        </div>
    )
}