

function Avatar(props){
  const{name,gender,img}=props
  return(
    <div>
      <h2>
        Hello, {gender?`Mr`:`Mrs`} {name} !
      </h2>
      <img src={img} alt="" width={100} height={100}/>
    </div>
  )
}

export default Avatar
