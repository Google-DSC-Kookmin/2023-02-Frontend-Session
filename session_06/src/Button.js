function Button({ onClickAction, text }) {
  return (
    <button onClick={onClickAction}>{text}</button>
  )
}

export default Button;