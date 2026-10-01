import './HelpBox.css'

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2 style={{ color: 'red' }}>{title}</h2>
      <p>{text}</p>
    </article>
  )
}

export default HelpBox
