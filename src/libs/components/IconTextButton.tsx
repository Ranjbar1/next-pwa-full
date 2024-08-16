interface IconTextButtonProps {
  icon: React.ReactNode
  background: string
  // path: string
  text: string
}
export default function IconTextButton(props: IconTextButtonProps) {
  return (
    <>
      <div
        style={{
          backgroundColor: props.background,
          borderRadius: '0.7rem',
          padding: '0.7rem',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            // border: '1px solid red',
            width: '',
            // justifyContent: 'space-between',
            direction: 'ltr',
          }}
        >
          <span>{props.icon}</span>

          <span style={{ marginLeft: '0.5rem' }}>{props.text}</span>
        </div>
      </div>
    </>
  )
}
