function Box(props){
  const {mau,rong,cao} = props
  return(
    <div style={{
      marginTop:'10px',
      backgroundColor:mau,
      width:rong,
      height:cao
    }}>

    </div>
  )
}

export default Box;
