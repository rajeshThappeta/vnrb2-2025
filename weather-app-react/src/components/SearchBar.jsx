import { useForm } from 'react-hook-form'

function SearchBar({onSearch}) {

  let {register,handleSubmit}=useForm()


  const onFormSubmit=(cityObj)=>{
    console.log(cityObj)// { city :""}
    onSearch(cityObj.city)
  }

  return (
    <div>
      <form  className="w-50 mx-auto my-5" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" {...register("city")}  className="form-control mb-3"  placeholder='Search by City name....'/>
        <button type="submit" className="btn btn-success">Search</button>
      </form>
    </div>
  )
}

export default SearchBar