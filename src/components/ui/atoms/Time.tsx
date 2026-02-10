
export function Time({ value }: { value: number }) {
    const minutes = Math.floor(value / 60)
    const secs = Math.floor(value % 60)

    return (
        <span className="text-xs opacity-60 select-none w-6">
            {minutes}:{secs < 10 ? 0 : ""}{secs}
        </span>
    )
}