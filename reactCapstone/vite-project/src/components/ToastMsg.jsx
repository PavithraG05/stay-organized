import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function ToastMsg({msg}) {

    useEffect(()=>{showToastMessage()},[msg]);
    const showToastMessage = () => {
      console.log("Toast msg");
      toast.success({msg});
    };
  
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
  
  export default ToastMsg;