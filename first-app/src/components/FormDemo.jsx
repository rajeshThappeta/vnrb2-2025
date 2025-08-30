import { useForm } from "react-hook-form";

function FormDemo() {
  let { register, handleSubmit ,formState:{errors}} = useForm();


  //console.log("errors :",errors)
  const onFormSubmit = (userObj) => {
    console.log(userObj);
  };

  return (
    <div className="container">
      <form className=" w-50 mx-auto mt-5" onSubmit={handleSubmit(onFormSubmit)}>
        {/* username */}
        <input type="text" {...register("username",{required:true,minLength:4,maxLength:6})} className="form-control mb-3" placeholder="Username" />
        {/* validation error messages of username */}
        {errors.username?.type==='required' && <p className="text-danger">Username is required</p>}
        {errors.username?.type==='minLength' && <p className="text-danger">Min length should be 4</p>}
        {errors.username?.type==='maxLength' && <p className="text-danger">Max length is 6</p>}
        {/* age */}
        <input type="number" {...register("age",{min:18,max:25})} className="form-control mb-3" placeholder="Age" />
        {/* validation error messages for age */}
        { errors.age?.type==='min'&&<p className="text-danger">Min length is 18</p>}
        { errors.age?.type==='max'&&<p className="text-danger">Max length is 25</p>}
        {/* course */}
        <select {...register("course")} className="form-select mb-3">
          <option value="cse">CSE</option>
          <option value="it">IT</option>
          <option value="ai&ml">AI&ML</option>
          <option value="iot">IOT</option>
          <option value="ds">DS</option>
        </select>
        {/* skills */}
        <div className="mb-3">
          <div className="form-check">
            <input type="checkbox" {...register("css")} id="css" className="form-check-input" />
            <label htmlFor="css" className="form-check-label">
              CSS
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" {...register("angular")} id="angular" className="form-check-input" />
            <label htmlFor="angular" className="form-check-label">
              Angular
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" {...register("react")} id="react" className="form-check-input" />
            <label htmlFor="react" className="form-check-label">
              React
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Submit form
        </button>
      </form>
    </div>
  );
}

export default FormDemo;

//<button type="button">test</button>  ---> onClick event
//button type="submit">test</button>   ----> onSubmit event




// ?:  condition ? react- elemen-1 : react-element-2   if-else
//&&    condition && react-element     if 




