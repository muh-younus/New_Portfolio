    import React, {useState} from 'react'


    function Login({setLoggedIn,setRole}) {

        const [name, setName] =useState("");
        const [password, setPassword] =useState("");

        const handleSubmit = (e) =>{

            e.preventDefault();

        if(name == "admin" && password == "admin"){
            setLoggedIn(true);
            setRole("admin");
            alert("Login Successful");
        }
         else if(name == "user" && password == "user"){
            setLoggedIn(true);
            setRole('user');
            alert("Login Successful");
        }
        else{

            alert("Invalid Credentials");
            setLoggedIn(false);
        }
    }


    return (
        <>
        <div className="flex justify-center items-center h-screen bg-gray-400">
        <div className="bg-gray-100 p-10 my-auto space-y-6  w-[350px] rounded-lg mx-auto shadow-6sm">
        <h2 className="text-center focus:border-blue-700 font-bold text-3xl text-blue-400">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
            <label htmlFor="email">Email:</label><br />
            <input className="border border-gray-300 p-2 w-full rounded" type="name" name="text" required
            onChange={(e) => setName(e.target.value)}
            value={name} />
            </div>
            <div className="space-y-2">
            <label htmlFor="password">Password:</label><br/>
            <input className="border border-gray-300 p-2 w-full rounded" type="password" id="password" name="password" required
            value={password}
            onChange={(e)=> setPassword(e.target.value)} />

            <div className="flex justify-between">
                <div className="inline-flex">
                    <input type="checkbox" class="default:ring-2 ..." />
                <p className="text-sm">Remeber for 30 Days</p>
                </div>
            <a href="#"  className="text-blue-500 text-sm hover:underline text-right">Forget Password</a>
            </div>
            </div>
            <div className="flex justify-center flex-col space-y-4 ">
                <button className="hover:bg-blue-400  w-[250px]  p-2 rounded-xl  bg-blue-500 text-white" type="submit">Sign In</button>

                <button className="rounded-lg gap-2 text-center flex justify-center hover:bg-blue-100 items-center p-2  border border-gray-300"><i className="fab fa-google  text-red-500 text-xl"></i><span>Sign in with Google</span>

    </button>
    <p className="text-center text-sm">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
            </div>
            
        </form>
        </div>
        </div>

        <h1 className=' text-blue-400'>Hello</h1>
        </>
    )
    }


    export default Login