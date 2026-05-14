import { useForm } from "react-hook-form";

function FormDemo(){
    const {
        register, //to register form fields
        handleSubmit, //to handle for submission
        formState:{errors} // to handle errors
    }=useForm()
    //form submit function
    const onFormSubmit=(Obj)=>{
        console.log(Obj);
    }
    return(
        <div>
            <h1 className="text-cyan-950 text-center text-4xl">Form Demo</h1>
            <form className="max-w-md mx-auto mt-10 bg-amber-50 " onSubmit={handleSubmit(onFormSubmit)}>

                <div className="mb-3">
                    <label htmlFor="username">Username </label>
                    <input type="text" 
                    {...register("username",{
                        required:"Username required",
                        validate:(v)=>v.trim().length!=0 || "White space is not valid",
                        // minLength:4,
                    })}
                        id="username"
                        className="border w-full p-3"/>
                    {errors.username?.type === "required" && <p className="text-red-500 ">*Username Required</p>}
                    {errors.username?.type === "minLength" && <p className="text-red-500 ">*minimum length of usernameis 4 characters</p>}

                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    {...register("email",{
                        required:"Email required",
                    })}
                    id="email"
                    className="border w-full p-3" />
                    {errors.email?.type === "required" && <p className="text-red-500 ">*Email Required</p>}
                </div>
                <div className="mb-3">
                    <button className="bg-blue-400 p-2 block mx-auto">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormDemo;