import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import ArticleIcon from '@mui/icons-material/Article';

const UpdateUser = () => {
    const [update, setUpdate] = useState({});
    const {id} = useParams();

    // single data load by id
    useEffect(()=>{
        fetch(`http://localhost:5000/users/profile/${id}`)
        .then(res => res.json())
        .then( data => {
            setUpdate(data)
            // console.log(data)
        })
    }, [])

    // update name
    const handleNameChange = event =>{
        const updatedName = event.target.value;
        const updateUser = {name:updatedName, phone: update.phone,
             email: update.email, address: update.address}; 
        setUpdate(updateUser);
    }

    // update phone
    const handlePhoneChange = event =>{
        const updatedPhone = event.target.value;
        const updateUser = {name: update.name, phone: updatedPhone,
            email: update.email, address: update.address}; 
        setUpdate(updateUser);
    }

    // update email
    const handleEmailChange = event =>{
        const updatedEmail = event.target.value;
        const updateUser = {name: update.name, phone: update.phone,
            email: updatedEmail, address: update.address}; 
        setUpdate(updateUser);
    }

    // update address
    const handleAddressChange = event =>{
        const updatedAddress = event.target.value;
        const updateUser = {name: update.name, phone: update.phone,
            email: update.email, address: updatedAddress}; 
        setUpdate(updateUser);
    }

    // update function
    const handleUpdate = (event) =>{
      event.preventDefault(); 
      const url = `http://localhost:5000/users/profile/${id}`;
      
      fetch( url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        }  )
        .then( res => res.json() )
        .then( data => {
            if(data.modifiedCount > 0 ){
                // swal
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Updated!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                setUpdate({})
                event.target.reset()
            }
        })
    }


    return (
        <div className="container-fluid px-0 mt-4">
            <form onSubmit={handleUpdate} >
                <div
                    className="card"
                    style={{
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                    borderBottom: "1px solid rgba(240, 240, 240, 1)",
                    }}
                >
                    {/* <div className="card-header bg-primary text-white">
                    <h5 className="text-white">Profile Details</h5>
                    </div> */}
                    <div className="card-body">
                    <div className="row">
                        {/* <div className="col-md-3">
                        <img
                            src="http://placehold.it/200x200"
                            alt="Profile Image"
                            className="img-fluid rounded-circle mb-3"
                        />
                        </div> */}
                        <div className="col-md-12">
                            {/* name */}
                        <div className="form-group mb-2">
                            <label htmlFor="inputName">Name:</label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            defaultValue={update?.name || ''} 
                            onChange={handleNameChange}
                            />
                        </div>
                        {/* phone number */}
                        <div className="form-group mb-2">
                            <label htmlFor="inputNumber">Number:</label>
                            <input
                            type="tel"
                            className="form-control"
                            id="inputNumber"
                            defaultValue={update?.phone || ''} 
                            onChange={handlePhoneChange}
                            />
                        </div>
                        {/* email */}
                        <div className="form-group mb-2">
                            <label htmlFor="inputEmail">Email:</label>
                            <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            value={update?.email || ''} 
                            onChange={handleEmailChange}
                            readOnly
                            />
                        </div>
                        {/* address */}
                        <div className="form-group mb-2">
                            <label htmlFor="inputAddress">Address:</label>
                            <textarea
                            className="form-control"
                            id="inputAddress"
                            rows="3"
                            defaultValue={update?.address || ''} 
                            onChange={handleAddressChange}
                            ></textarea>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* submit button */}
                <br />
                <button variant="contained" className="px-3 text-white btn btn-outline-primary active" >
                    <small className="d-flex"> <ArticleIcon /> Update </small> 
                </button>

            </form>
            
        <br />

        
        
        </div>
    );
};

export default UpdateUser;