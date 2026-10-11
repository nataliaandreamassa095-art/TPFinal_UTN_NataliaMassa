function Avatar({ initials, color, size = 'medium' }) {
  return (
    <span
      className={`avatar avatar-${size}`}
      style={{ '--avatar-color': color }}
      aria-hidden="true"
    >
      {initials}
    </span>
  )
}

export default Avatar
