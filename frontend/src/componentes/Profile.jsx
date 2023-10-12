

function Profile() {





  return (
    <div className="  flex p-7 flex-col justify-center items-center h-screen ">
        <p className=" text-4xl font-normal ">Personal info</p>
        <p className=" text-lg font-light pb-10">Basic info, like your name and photo</p>
        <div className=" w-[845.911px] h-[580.543px] rounded-xl border-solid border-2 border-gray-400  ">
          <div className=" flex items-center justify-around border-solid border-b border-gray-400 p-6">
            <div>
              <p className=" text-2xl font-normal">Profile</p>
              <p className=" text-sm font-medium text-gray-400">Some info may be visible to other people</p>
            </div>
            <div>
              <button className="border-solid border-2 border-gray-400 w-[95px] h-[38px] rounded-xl" type="submit">Edit</button>
            </div>
          </div>

          <div className=" flex p-7 border-solid border-b border-gray-400 gap-[200px]">
            <p className=" text-gray-400 text-sm font-medium">PHOTO</p>
            <img src="" alt="Photo" />
          </div>
          <div className=" flex p-7 border-solid border-b border-gray-400  gap-[210px]">
            <p className=" text-gray-400 text-sm font-medium">NAME</p>
            <p>Carlos</p>
          </div>
          <div className="  flex p-7 border-solid border-b border-gray-400  gap-[225px]">
            <p className=" text-gray-400 text-sm font-medium">BIO</p>
            <p>I am a sotfware developer</p>
          </div>
          <div className="  flex p-7 border-solid border-b border-gray-400  gap-[200px]">
            <p className=" text-gray-400 text-sm font-medium">PHONE</p>
            <p>974740515</p>
          </div>
          <div className="  flex p-7 border-solid border-b border-gray-400  gap-[210px]">
            <p className=" text-gray-400 text-sm font-medium">EMAIL</p>
            <p>carlos4049@hotmail.com</p>

          </div>
          <div className="  flex p-7  gap-[180px] ">
            <p className=" text-gray-400 text-sm font-medium">PASSWORD</p>
            <p>***********</p>
          </div>
        </div>

      </div>
  )
}

export default Profile