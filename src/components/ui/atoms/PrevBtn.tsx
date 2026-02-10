import { PrevSongIco } from '@/Icons/PrevSongIco'

interface Props {
  prevSong: () => void
  className?: string
}

export function PrevBtn({ prevSong, className }: Props) {
  return (
    <button
      onClick={prevSong}
      className={className}>
      <PrevSongIco />
    </button>)
}
