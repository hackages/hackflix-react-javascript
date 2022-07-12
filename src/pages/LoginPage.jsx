import { Input } from "postcss";

export function LoginPage() {
  return (
    <div className="wrapper loginWrapperH flex justify-center items-center">
      <form className="loginField py-12 px-24 bg-gray-900 rounded-2xl">
        <div className="userWrapper mb-3">
          <label for="user">Username</label><br></br>
          <input className="text-black p-1 text-base" type="text" name="user"></input>
        </div>
        <div className="passwordWrapper mb-3">
          <label for="pass">Password</label><br></br>
          <input className="text-black p-1 text-base" type="password" name="pass"></input>
        </div>
        <button className="text-sm hover:text-blue-400">Forgot password</button>
        <br></br>
        <input className="cursor-pointer mt-5 bg-red-700 border border-red-700 hover:bg-transparent hover:border hover:border-red-700 hover:text-red-700 text-white py-1 px-7 rounded transition-all duration-200 inline-block" type="submit" value="login" />

      </form>
    </div >
  )
}



