import Image from 'next/image'
import bgPng from "./bg.png";
import {FaceSmileIcon, PaperAirplaneIcon, PlusIcon} from '@heroicons/react/24/outline';

function ContactStact(props: { name: String }) {
  const firstLetter = props.name[0];
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return (<div className="flex flex-row h-[70px] w-[100%] mb-3">
    <div style={{ backgroundColor: randomColor, mixBlendMode: "difference" }} className={`w-[70px] h-[100%] ${randomColor}  text-5xl text-center leading-[70px] rounded-full`}>{firstLetter}</div>
    <div className=' border-b border-gray-800 pb-1 flex justify-between w-[calc(100%-70px)] pl-3 py-2 pr-2'>
      <div>
        <div className=" text-[20px]">{props.name}</div>
        Last message
      </div>
      <div>
        22:40
      </div>
    </div>
  </div>);
}




function Message(props:{text:String, sender:String}) {
  return (<div className={`w-full flex p-2 ${props.sender == "other" ? "" :'justify-end'}`}>
    <span className={`p-3 ${props.sender == "other" ? "bg-white" :'bg-[#d9fdd3]'}`}>
      {props.text}
    </span>
  </div>);
}


function TextArea() {
  return (
    <div className="absolute top-0 left-0 h-full w-full ">
      <div className=" h-[calc(100%-60px)] w-full" style={{ backgroundImage: "url(./bg.png)", }}>
        <Message text={"Hello"} sender={"me"}/>
        <Message text={"Hii"} sender={"other"}/>
      </div>
      <div className=" bg-green-600 h-[60px] w-full flex">
        <div className="w-[60px] flex justify-center items-center">
        <PlusIcon className=' w-[30px] text-white'/>
        </div>
      <div className="flex-grow-[1] p-2">
        <div className="bg-white flex h-full p-2">
          <FaceSmileIcon className='w-[30px] text-gray-800 '/>
        <input type="text" className='w-[100%] h-full outline-none p-1' placeholder='Type a messege...' />
        </div>
      </div>
      <div className=" flex justify-center items-center w-[60px]">
      <PaperAirplaneIcon className='w-[30px] text-white'/>
      </div>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-green-800  absolute top-0 left-0 h-[100%] w-[100%]">
      <div className=' bg-white  relative h-[calc(100%-38px)] w-[calc(100%-38px)] top-[19px] m-auto flex border-2 border-black rounded-[10px] overflow-auto'>
        <div className=" flex flex-col p-2 h-[100%] w-[80%] max-w-[350px] ">
          <ContactStact name={"Chandan Kalita"} />
          <ContactStact name={"Rupanjan"} />
          <ContactStact name={"Parashar"} />
          <ContactStact name={"Bhaskar"} />
        </div>
        <div className="relative h-[100%] w-[100%] bg-gray-900">
          <TextArea />
        </div>
      </div>
    </div>
  )
}
