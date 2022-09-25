import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

function InvoiceModal({ open, setOpen }) {
  return (
    <Modal
      closeIcon
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <div>
        <div className='p-3 mx-auto my-8 mt-8 lg:w-full md:w-2/3 md:p-8'>
          <h3 className='mb-4 text-xl font-bold text-center'>
            Create an invoice
          </h3>
          <form className='flex flex-col w-full mx-auto'>
            <label htmlFor='customerName' className='text-sm'>
              Customer's Name
            </label>
            <input
              type='text'
              required
              name='customerName'
              className='w-full px-4 py-2 mb-6 bg-gray-100'
            />

            <div className='flex items-end space-x-3'>
              <div className='flex flex-col w-1/2'>
                <label htmlFor='customerAddress' className='text-sm'>
                  Customer's Address
                </label>
                <input
                  type='text'
                  required
                  name='customerAddress'
                  className='w-full px-4 py-2 mb-6 bg-gray-100'
                />
              </div>

              <div className='flex flex-col w-1/2'>
                <label htmlFor='customerCity' className='text-sm'>
                  Customer's LGA / Country
                </label>
                <input
                  type='text'
                  required
                  name='customerCity'
                  className='w-full px-4 py-2 mb-6 bg-gray-100'
                />
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='flex flex-col w-2/3'>
                <label htmlFor='customerEmail' className='text-sm'>
                  Customer's Email
                </label>
                <input
                  type='email'
                  required
                  name='customerEmail'
                  className='w-full px-4 py-2 mb-6 bg-gray-100'
                />
              </div>

              <div className='flex flex-col w-1/3'>
                <label htmlFor='currency' className='text-sm'>
                  Currency
                </label>
                <input
                  type='text'
                  required
                  maxLength={3}
                  minLength={3}
                  name='currency'
                  className='w-full px-4 py-2 mb-6 bg-gray-100'
                />
              </div>
            </div>
            <label htmlFor='customerName' className='text-sm'>
              Add a note to the invoice.
            </label>
            <textarea
              type='text'
              required
              name='customerName'
              className='w-full px-4 py-2 mb-6 bg-gray-100'
            />

            <div className='flex flex-col justify-between w-full'>
              <h3 className='my-4 font-bold '>Items List</h3>

              <div className='flex space-x-3'>
                <div className='flex flex-col w-1/4'>
                  <label htmlFor='itemName' className='text-sm'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='itemName'
                    placeholder='Name'
                    className='px-4 py-2 mb-6 bg-gray-100'
                  />
                </div>

                <div className='flex flex-col w-1/4'>
                  <label htmlFor='itemCost' className='text-sm'>
                    Cost
                  </label>
                  <input
                    type='number'
                    name='itemCost'
                    placeholder='Cost'
                    className='px-4 py-2 mb-6 bg-gray-100'
                  />
                </div>

                <div className='flex flex-col justify-center w-1/4'>
                  <label htmlFor='itemQuantity' className='text-sm'>
                    Quantity
                  </label>
                  <input
                    type='number'
                    name='itemQuantity'
                    placeholder='Quantity'
                    className='px-4 py-2 mb-6 bg-gray-100'
                  />
                </div>
                <div className='flex flex-col justify-center w-1/4'>
                  <label htmlFor='itemQuantity' className='text-sm'>
                    Price
                  </label>
                  <input
                    type='number'
                    name='itemPrice'
                    placeholder='Price'
                    className='px-4 py-2 mb-6 bg-gray-100'
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-between '>
              <button className='bg-blue-500 text-gray-100 w-[150px] p-3 rounded my-2'>
                Add Item
              </button>
              <button
                className='bg-blue-500 text-gray-100 w-[150px] p-3 rounded my-2'
                type='submit'
              >
                Save Invoice
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Delete
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Create Invoice
        </Button>
        <Button primary onClick={() => setOpen(false)}>
          <Icon name=' cloud download' /> Download Invoice
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default InvoiceModal;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import CreateInvoiceTable from '../components/CreateInvoiceTable';
// import { useDispatch, useSelector } from 'react-redux';
// import { setInvoice } from '../redux/invoice';
// import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
// import db from '../firebase';
// import Nav from '../components/Nav';
// import { showToast } from '../utils/functions';
// import Loading from '../components/Loading';

// const CreateInvoice = () => {
//   const [customerName, setCustomerName] = useState('');
//   const [customerAddress, setCustomerAddress] = useState('');
//   const [customerCity, setCustomerCity] = useState('');
//   const [customerEmail, setCustomerEmail] = useState('');
//   const [itemName, setItemName] = useState('');
//   const [currency, setCurrency] = useState('');
//   const [itemCost, setItemCost] = useState(0);
//   const [itemQuantity, setItemQuantity] = useState(1);
//   const [itemList, setItemList] = useState([]);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user.user);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user.id) return navigate('/login');
//     setLoading(false);
//   }, [navigate, user.id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (itemName.trim() && itemCost > 0 && itemQuantity >= 1) {
//       setItemList([
//         ...itemList,
//         {
//           itemName,
//           itemCost,
//           itemQuantity,
//         },
//       ]);
//     }

//     setItemName('');
//     setItemCost('');
//     setItemQuantity('');
//   };

//   const saveInvoice = async (e) => {
//     e.preventDefault();
//     dispatch(
//       setInvoice({
//         customerName,
//         customerAddress,
//         customerCity,
//         customerEmail,
//         itemList,
//         currency,
//       })
//     );

//     await addDoc(collection(db, 'invoices'), {
//       user_id: user.id,
//       customerName,
//       customerAddress,
//       customerCity,
//       customerEmail,
//       currency,
//       itemList,
//       timestamp: serverTimestamp(),
//     })
//       .then(() => {
//         showToast('success', 'Invoice created!📜');
//       })
//       .then(() => navigate('/dashboard'))
//       .catch((err) => {
//         showToast('error', 'Try again! Invoice not created!😭');
//       });
//   };
//   return (
//     <>
//       {loading ? (
//         <Loading />
//       ) : (
//         <div>
//           <Nav />
//           <div className="w-full p-3 mx-auto my-8 mt-8 rounded shadow-xl md:w-2/3 md:p-8">
//             <h3 className="mb-4 text-xl font-bold text-center">
//               Create an invoice
//             </h3>

//             <form
//               className="flex flex-col w-full mx-auto"
//               onSubmit={saveInvoice}
//             >
//               <label htmlFor="customerName" className="text-sm">
//                 Customer's Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 name="customerName"
//                 className="w-full px-4 py-2 mb-6 bg-gray-100"
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//               />

//               <div className="flex items-end space-x-3">
//                 <div className="flex flex-col w-1/2">
//                   <label htmlFor="customerAddress" className="text-sm">
//                     Customer's Address
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     name="customerAddress"
//                     className="w-full px-4 py-2 mb-6 bg-gray-100"
//                     value={customerAddress}
//                     onChange={(e) => setCustomerAddress(e.target.value)}
//                   />
//                 </div>

//                 <div className="flex flex-col w-1/2">
//                   <label htmlFor="customerCity" className="text-sm">
//                     Customer's LGA / Country
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     name="customerCity"
//                     className="w-full px-4 py-2 mb-6 bg-gray-100"
//                     value={customerCity}
//                     onChange={(e) => setCustomerCity(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="flex flex-col w-2/3">
//                   <label htmlFor="customerEmail" className="text-sm">
//                     Customer's Email
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     name="customerEmail"
//                     className="w-full px-4 py-2 mb-6 bg-gray-100"
//                     value={customerEmail}
//                     onChange={(e) => setCustomerEmail(e.target.value)}
//                   />
//                 </div>

//                 <div className="flex flex-col w-1/3">
//                   <label htmlFor="currency" className="text-sm">
//                     Currency
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     maxLength={3}
//                     minLength={3}
//                     name="currency"
//                     className="w-full px-4 py-2 mb-6 bg-gray-100"
//                     value={currency}
//                     onChange={(e) => setCurrency(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col justify-between w-full">
//                 <h3 className="my-4 font-bold ">Items List</h3>

//                 <div className="flex space-x-3">
//                   <div className="flex flex-col w-1/4">
//                     <label htmlFor="itemName" className="text-sm">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="itemName"
//                       placeholder="Name"
//                       className="px-4 py-2 mb-6 bg-gray-100"
//                       value={itemName}
//                       onChange={(e) => setItemName(e.target.value)}
//                     />
//                   </div>

//                   <div className="flex flex-col w-1/4">
//                     <label htmlFor="itemCost" className="text-sm">
//                       Cost
//                     </label>
//                     <input
//                       type="number"
//                       name="itemCost"
//                       placeholder="Cost"
//                       className="px-4 py-2 mb-6 bg-gray-100"
//                       value={itemCost}
//                       onChange={(e) => setItemCost(e.target.value)}
//                     />
//                   </div>

//                   <div className="flex flex-col justify-center w-1/4">
//                     <label htmlFor="itemQuantity" className="text-sm">
//                       Quantity
//                     </label>
//                     <input
//                       type="number"
//                       name="itemQuantity"
//                       placeholder="Quantity"
//                       className="px-4 py-2 mb-6 bg-gray-100"
//                       value={itemQuantity}
//                       onChange={(e) => setItemQuantity(e.target.value)}
//                     />
//                   </div>

//                   <div className="flex flex-col justify-center w-1/4">
//                     <p className="text-sm">Price</p>
//                     <p className="px-4 py-2 mb-6 bg-gray-100">
//                       {Number(itemCost * itemQuantity).toLocaleString('en-US')}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   className="bg-blue-500 text-gray-100 w-[150px] p-3 rounded my-2"
//                   onClick={handleSubmit}
//                 >
//                   Add Item
//                 </button>
//               </div>

//               {itemList[0] && <CreateInvoiceTable itemList={itemList} />}

//               <button
//                 className="w-full p-5 my-6 text-gray-100 bg-blue-800 rounded"
//                 type="submit"
//               >
//                 SAVE INVOICE
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CreateInvoice;
