


function Footer() {
  return (
    <footer style={{ width: "100%", marginRight : "5%",  display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div style={{ flex: 1 }}>
    <span>® 2023 Mariusz Wiacek  </span>
  </div>
  <div style={{ flex: 1, textAlign: 'center' }}>
    <span style={{color:"orange"}}> www.mariuszwiacek.com</span>
  </div>
  <div style={{ flex: 1, textAlign: 'right' }}>
    <span style={{marginRight : "3%"}}> wiacek.mariusz@gmail.com</span>
  </div>
</footer>)
}




export default Footer;