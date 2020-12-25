export default ({ text }, [face]) => {
  return (
    <div className="empty">
      <div>
        <div className="face">
        {face}
        </div>
        {text}
      </div>
    </div>
  )
}