type TAvatarProps = { firstName: string; lastName: string; size?: number; fontSize?: number }

const Avatar = ({ firstName, lastName, size = 42, fontSize = 16 }: TAvatarProps) => {
  return (
    <div
      css={{
        fontSize,
        backgroundColor: '#fde3cf',
        color: '#f56a00',
        width: size,
        height: size,
        borderRadius: size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <span>{firstName[0]}</span>
      <span>{lastName[0]}</span>
    </div>
  )
}

export default Avatar
