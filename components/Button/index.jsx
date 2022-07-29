export function Button({
  type = 'button',
  text,
  color = 'primary',
  disable = false,
  handleClick
}) {
  return (
    <button
      type={type}
      className={`btn ${color}`}
      disabled={disable}
      onClick={handleClick}
    >
      {text}
    </button>
  )
} 