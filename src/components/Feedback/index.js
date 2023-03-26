import './index.css'

const Feedback = props => {
  const {resources, f1} = props
  const {emojis} = resources
  const fu = e => {
    console.log(e.target)
    f1()
  }
  return (
    <div className="super">
      <div className="sub">
        <h1 className="heading">
          How satisfied are you with our customer support performance ?
        </h1>
        <ul className="sub1">
          {emojis.map(r => (
            <li className="sub2">
              <img
                src={r.imageUrl}
                key={r.id}
                alt={r.name}
                className="imagee"
                onClick={fu}
              />
              <p>{r.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const Opinion = props => {
  const {rs} = props
  const {loveEmojiUrl} = rs

  return (
    <div className="super">
      <div className="sub">
        <img src={loveEmojiUrl} alt="love emoji" className="image1" />
        <h1 className="heading">Thank You!</h1>
        <p className="para">
          We Will use your feedback to improve our customer support performance
        </p>
      </div>
    </div>
  )
}

export default Feedback
