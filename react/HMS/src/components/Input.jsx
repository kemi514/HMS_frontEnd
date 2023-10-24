
const Input = ({field, type, placeholder}) => {
  return (
    <div class="mb-3">
      
    <label className="form-label text-left text-secondary"><small className='mx-2'>{field}</small></label> <br />
    <input type={type} className="my-2 w-100"placeholder={placeholder}/>
  </div>
  )
}

export default Input
