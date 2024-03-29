import titledIcon from "../img/Path 318.png"
import Feature from "./Feature"
import pic1 from "../img/Group 2.png"
import pic2 from "../img/music icon.png"
import pic3 from "../img/Group 4.png"

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      <img src={titledIcon} alt="" className="w-[5rem]" />
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature title="For Live Music" src={pic1} />
        <Feature title="For Daily Music" src={pic2} />
        <Feature title="For Artists" src={pic3} />
      </div>
    </div>
  )
}

export default Experience