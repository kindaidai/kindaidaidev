type Props = {
  name: string
}

export const Tag: React.FC<Props> = ({ name }: Props) => (
  <span className="text-sm mr-1 px-1 bg-gray-300 rounded shadow-md">
    {name}
  </span>
)
