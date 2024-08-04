interface IconTextButtonProps {
  icon: React.ReactNode
  background: string
  // path: string
  text: string
}
export default function IconTextButton(props: IconTextButtonProps) {
  return (
    <>
      <div style={{ backgroundColor: props.background }}>
        <span>{props.icon}</span>
        <span>{props.text}</span>
      </div>
    </>
  )
}
