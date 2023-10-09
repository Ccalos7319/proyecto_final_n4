function Login() {
  return (
    <>
    <div className=" flex flex-col justify-center items-center h-screen">
      <div className=" w-[473.831px] h-[634.303px] rounded-3xl border-solid border-2 border-gray-400 flex flex-col items-center justify-center  " >
        <div className=" flex flex-col gap-4 w-[318px]">
        <p>devchallenges</p>
        <h2 className="font-semibold ">Join thousands of learners from around the world</h2>
        <p className=" font-normal">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
      </div>
      <div className="flex flex-col gap-5 pt-6">
        <input className="w-[356.481px] h-[48px] rounded-lg border-solid border-2 border-gray-400 " type="text" placeholder="Email"/>
        <input className="w-[356.481px] h-[48px] rounded-lg border-solid border-2 border-gray-400" type="text"placeholder="Password" />
        <button type="submit" className=" w-[356.481px] h-[38px] bg-[#2F80ED] text-white rounded-lg font-semibold font text-base">Star coding now</button>
      </div>
      <div className="flex flex-col items-center gap-8  pt-6 ">
        <p>or continue with these social profile</p>
        <div className="flex gap-5"> 
          <div>
            <img src="../public/google.png" alt="google" />
          </div>
          <div>
            <img src="../public/facebook.png" alt="facebook" />
          </div>
          <div>
            <img src="../public/twitter.png" alt="twitter" />
          </div>
          <div>
            <img src="../public/github.png" alt="github" />
          </div>
        </div>
        <div className=" flex">
          <p>Adready a member?</p>
          <p className=" text-sky-400">Login</p>
        </div>
      </div>
    </div>
      </div>
       
     
    </>
  );
}

export default Login;
