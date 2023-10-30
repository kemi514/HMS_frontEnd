
const Input = ({field, type, placeholder, name, Update}) => {
  return (
    <div className="mb-3">
      
    <label className="form-label text-left text-secondary"><small className='mx-2'>{field}</small></label> <br />
    <input type={type} className="my-2 w-100"placeholder={placeholder} name={name} onChange={Update}/>
  </div>
  )
}

export default Input
