
export const Header =({children,title,show}) => {
  return (
    <header className="header">
      <h1 className='title'>Juan Stewert</h1>
      {children}
      {show ? <p>esto se muestra si el show esta true</p> : <p>esto se muestra si el show esta false</p>}
    </header>
  );
}

export default Header;
