'use client';
import { Dispatch, RootState, store } from '@/src/store/store';
import { ContactStact } from '../../components/ContactStact';
import { TextArea } from '../../components/TextArea';
import { Provider, createStoreHook, useDispatch, useSelector } from 'react-redux';


function App() {
  return (<div className="bg-gradient-to-b from-green-800  absolute top-0 left-0 h-[100%] w-[100%]">
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
  </div>);
}


export default function Home() {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  )
}


