import { useState } from "react";
import ModalDialog from "./ModalDialog";
import Button from 'react-bootstrap/Button';



export default function Test(){

  const [show, setShow] = useState(false);

  
  const handleShow = () => setShow(true);

    return(
      <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <ModalDialog show={show} setShow = {setShow}/>
      
      </>
    );
 
}
// let tcount = {
//   c_count : 0,
//   p_count : 0
//  }
//   const [count, setCount] = useState(tcount);
//   const items = ['apple','mango','apple','mango','mango'];
//   function addbtn(){
//     //console.log(count.completed_count);
//     // const n_count = count
//     items.map((item) => {
//         console.log(item);
//         if(item === 'apple'){
//           setCount((count)=>({...count, c_count:count.c_count+1}));
//         }
//         else{
//           setCount((count)=>({...count, p_count:count.p_count+1}));
//         } 
//         console.log(count)
//     });
//   //   setCount((count) => ({
//   //     ...count,
//   //     c_count: count.c_count+1,
//   // }));
//   }
//   console.log(count);
//   return(
//     <>
//       <button onClick={addbtn}>Add</button>
//     </>
//   );
    





// const [modal, setModal] = useState(false);
//     const toggleModal = () => {
//       setModal(true);
//     };
//     console.log(modal)
//     return(
//       <>
//         <button onClick={toggleModal} className="btn-modal">
//         Open
//         </button>
//         {modal && (
//         <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             test
//             <div className="modal-body" id="todo_modal_body">
//               test
//             </div>
//             <div className="modal-footer text-center">
//                 <button type="button" className="btn btn-primary update_status_btn">Yes</button>
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
//             </div>
//           </div>
//         </div>
//       </div>
//         )}
//       </>
//     );