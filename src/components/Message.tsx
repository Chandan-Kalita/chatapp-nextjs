export function Message(props: { text: String; sender: String; }) {
  return (<div className={`w-full flex p-2 ${props.sender == "other" ? "" : 'justify-end'}`}>
    <span className={`p-3 ${props.sender == "other" ? "bg-white" : 'bg-[#d9fdd3]'}`}>
      {props.text}
    </span>
  </div>);
}
