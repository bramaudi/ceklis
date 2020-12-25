const Header = ({ pending, complete }, child) => (
  <header>
    <div className="title">{child}</div>
    <div className="menu">
      <div>Belum: {pending.length}</div>
      <div>&nbsp; &#183; &nbsp;</div>
      <div>Selesai: {complete.length}</div>
    </div>
  </header>
)

export default Header
