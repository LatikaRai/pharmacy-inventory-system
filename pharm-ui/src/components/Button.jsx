
const Button = ({
  children,
  color,
  bgColor,
  style,
  borderColor,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`py-2 px-6 rounded-md border ${style} ${color} ${bgColor} ${borderColor}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
