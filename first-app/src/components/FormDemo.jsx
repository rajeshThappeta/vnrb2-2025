import { useForm } from "react-hook-form";

function FormDemo() {
  let { register, handleSubmit } = useForm();

  const onFormSubmit = (userObj) => {
    console.log(userObj);
  };

  return (
    <div className="container">
      <form className=" w-50 mx-auto mt-5" onSubmit={handleSubmit(onFormSubmit)}>
        {/* username */}
        <input type="text" {...register("username",{required:true,minLength:4,maxLength:6})} className="form-control mb-3" placeholder="Username" />
        {/* age */}
        <input type="number" {...register("age")} className="form-control mb-3" placeholder="Age" />
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
