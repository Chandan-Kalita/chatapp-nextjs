export function ContactStact(props: { name: String; }) {
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
