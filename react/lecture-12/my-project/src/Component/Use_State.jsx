import React from 'react'
import { useState } from 'react'

// const initialState = 10
// const Use_State = () => {

//     const[Age , setAge] = useState(initialState)

//     function incrementAge(){
//         setAge( Age => Age + 4)
//         // setAge( Age => Age + 1)
//     }
//   return (
//     <div>
//       <div className="btn w-52 mt-2">{Age}</div>
//       <button className='btn mt-2' onClick={incrementAge}>add age</button>
//     </div>
//   )
// }
// export default Use_State

// -------------------------------------------------------------------------------

//  function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge(a => a + 1);
//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <button  className='btn' onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <button className='btn' onClick={() => {
//         increment();
//       }}>+1</button>
//     </>
//   );
// }

//  export default  Counter


// -----------------------------------------------------------

// export default function Counter2() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge(age + 1);
//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <button className='btn' onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <button  className='btn'onClick={() => {
//         increment();
//       }}>+1</button>
//     </>
//   );
// }

// ---------------------------------------------------------

// function form() {
//   const [form, setform] = useState({
//     firsname: 'jasmi',
//     lastname: 'mulani',
//     email: 'jasmi@gmail.com',
//   });

//   return (
//     <>
//       <label>
//         first name:
//         <input value={form.firsname} onChange={e => {
//           setform({
//             ...form,
//             firsname: e.target.value
//           });
//         }}
//         />
//       </label><br />
//       <label><br />
//         last name:
//         <input value={form.lastname} onChange={e => {
//           setform({
//             ...form,
//             lastname: e.target.value
//           });
//         }}
//         />
//       </label><br />
//       <label><br />
//         email:
//         <input value={form.email} onChange={e => {
//           setform({
//             ...form,
//             email: e.target.value
//           });
//         }}
//         />
//       </label><br />
//       <br />
//       <p>
//         {form.firsname}{''}
//         {form.lastname}{''}
//         ({form.email})
//       </p>
//     </>
//   );
// }

// export default form

// ---------------------------------------------------------------
// function form2() {
//   const [person, setperson] = useState({
//     name: 'jasmi mulani',
//     artwork: {
//       title: 'web-site',
//       city: 'surat',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcvYBwxIxe_I1kcvoFdBnKHZ9Ya_4r-oSzQ&s'
//     }
//   });
//   function changename(e) {
//     setperson({
//       ...person,
//       name: e.target, value
//     });
//   }
//   function changetitle(e) {
//     setperson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }
//   function changecity(e) {
//     setperson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }
//   function changeimage(e) {
//     setperson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }
//   return (
//     <>
//       <label>
//         name:
//         <input value={person.name} onChange={changename} />
//       </label><br/>
//       <label><br />
//         title:
//         <input value={person.artwork.title} onChange={changetitle} />
//       </label><br/>
//       <label><br />
//         city:
//         <input value={person.artwork.city} onChange={changecity} />
//       </label><br/>
//       <label><br />
//         image:
//         <input value={person.artwork.image} onChange={changeimage} />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {'by'}<br />
//         {person.name}
//         <br />
//         (locaterd in {person.artwork.city})
//       </p>
//       <img src={person.artwork.image}
//         alt={person.artwork.title}
//       />
//     </>
//   );
// }

// export default form2

// ----------------------------------------------------


// ====================== home task ===========




