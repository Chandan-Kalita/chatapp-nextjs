import { FaceSmileIcon, PaperAirplaneIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Message } from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from '../store/store';

export function TextArea() {
  const countState = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch<Dispatch>();
  function handleClick(){
    dispatch.count.increment(1);
  }
  return (
    <div className="absolute top-0 left-0 h-full w-full ">
      <div className=" h-[calc(100%-60px)] w-full" style={{ backgroundImage: "url(./bg.png)", }}>
        <Message text={"Hello"} sender={"me"} />
        <Message text={countState.toString()} sender={"other"} />
      </div>
      <div className=" bg-green-600 h-[60px] w-full flex">
        <div className="w-[60px] flex justify-center items-center">
          <PlusIcon className=' w-[30px] text-white' onClick={handleClick}/>
        </div>
        <div className="flex-grow-[1] p-2">
          <div className="bg-white flex h-full p-2">
            <FaceSmileIcon className='w-[30px] text-gray-800 ' />
            <input type="text" className='w-[100%] h-full outline-none p-1' placeholder='Type a messege...' />
          </div>
        </div>
        <div className=" flex justify-center items-center w-[60px]">
          <PaperAirplaneIcon className='w-[30px] text-white' />
        </div>
      </div>
    </div>
  );
}
