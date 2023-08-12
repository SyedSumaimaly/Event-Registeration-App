import React, { useState } from 'react'
import './Form.css'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import swal from 'sweetalert'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIGwnZ4x0mek-BVGUOGonrnEX18mGb4VY",
    authDomain: "practice-sumaim.firebaseapp.com",
    projectId: "practice-sumaim",
    storageBucket: "practice-sumaim.appspot.com",
    messagingSenderId: "300999668189",
    appId: "1:300999668189:web:44229d73fb6e468b408634"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function Form() {

    const [data, setdata] = useState();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            try {
                const docRef = addDoc(collection(db, "Events"), {
                    values
                });
                swal("Good job!", "You clicked the button!", "success");
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        },



    });


    // const formik = useFormik({
    //     initialValues: {
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         specialNote: '',
    //     },


    //     validationSchema: Yup.object({
    //         firstName: Yup.string()
    //             .required('Required'),
    //         eventName: Yup.string()
    //             .required('Required'),
    //         email: Yup.string().email('Invalid email address').required('Required'),
    //     }),


    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2));
    //     },

    // onSubmit: values => {
    //     alert(JSON.stringify(values, null, 2))
    // try {
    //     const docRef = addDoc(collection(db, "Events"), {
    //         values
    //     });
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }

    // },
    // });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='sub_div'>
                <h1 className='head'>Event Registeration Form</h1>
                <div>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                    </div>
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div>{formik.errors.firstName}</div>
                    ) : null}

                </div>
                <div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                    </div>
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                    ) : null}

                </div>

                <div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div>
                    <div>
                        <label htmlFor="specialNote">Special Note</label>
                    </div>
                    <div>
                        <textarea
                            id="specialNote"
                            name="specialNote"
                            rows="7" cols="50"
                            onChange={formik.handleChange}
                            value={formik.values.specialNote}
                        />
                    </div>
                </div>

                <button type="submit">Submit</button>
            </div>
        </form>


        // <div>
        //     <form onSubmit={formik.handleSubmit}>
        //         <div className='sub_div'>
        //             <h1 className='head'>Event Registeration Form</h1>
        //             <div>
        //                 <div>
        //                     <label htmlFor="firstName">First Name</label>
        //                 </div>
        //                 <div>
        //                     <input
        //                         id="firstName"
        //                         name="firstName"
        //                         type="text"
        //                         onChange={formik.handleChange}
        //                         value={formik.values.firstName}
        //                     />
        //                 </div>
        //             </div>

        //             <div>
        //                 <div>
        //                     <label htmlFor="lastName">Last Name</label>
        //                 </div>
        //                 <div>
        //                     <input
        //                         id="lastName"
        //                         name="lastName"
        //                         type="text"
        //                         onChange={formik.handleChange}
        //                         value={formik.values.lastName}
        //                     />
        //                 </div>
        //             </div>

        //             <div>
        //                 <div>
        //                     <label htmlFor="email">Email Address</label>
        //                 </div>
        //                 <div>
        //                     <input
        //                         id="email"
        //                         name="email"
        //                         type="email"
        //                         onChange={formik.handleChange}
        //                         value={formik.values.email}
        //                     />
        //                 </div>
        //             </div>

        //             <div>
        //                 <div>
        //                     <label htmlFor="specialNote">Special Note</label>
        //                 </div>
        //                 <div>
        //                     <textarea
        //                         id="specialNote"
        //                         name="specialNote"
        //                         rows="7" cols="50"
        //                         onChange={formik.handleChange}
        //                         value={formik.values.specialNote}
        //                     />
        //                 </div>
        //             </div>


        //             <button type="submit">Submit</button>

        //         </div>
        //     </form>
        // </div>
    );
}

export default Form
