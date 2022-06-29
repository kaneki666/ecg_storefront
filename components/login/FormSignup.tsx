import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { API_BASE_URL } from "../../pages/api/hello";
import { signupAction, saveUserinfo1Action, saveVendorinfoAction } from "../../store/user/actions";
import { userSignupProps, vendorSignupProps } from "../../utils/types/reduxTypes";
import { SignupProps } from "../../utils/types/types";

const FormSignup = () => {
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit: SubmitHandler<SignupProps> = async (data) => {
      
      // if(data.organization_name){
      //   const request = await fetch(`${API_BASE_URL}/vendor-request/`, {
      //     method: "POST",
      //     body: JSON.stringify(data),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
    
      //   if (request.status === 201 ) {
      //     const response: vendorSignupProps = await request.json();
      //     dispatch(signupAction(true));
      //     dispatch(saveVendorinfoAction(response));
      //     toast("Signup Successful!", {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //     });
      //   } else {
      //     const response = await request.json();
      //     console.log(response)
    
      //    if(response.email){
      //     toast(`Signup Failed. ${response.email}`, {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //     });
      //    }

      //    if(response.organization_name){
      //     toast(`Signup Failed. ${response.organization_name}`, {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //     });
      //    }

      //   }
      // }
        
        const request = await fetch(`${API_BASE_URL}/register-user/`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (request.status === 200) {
          const response: userSignupProps = await request.json();
          dispatch(signupAction(true));
          dispatch(saveUserinfo1Action(response));
          toast("Signup Successful!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          const response = await request.json();
          try{
            toast(`Signup Failed. ${response.data.errors.email}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          catch(error){
            toast(`Signup Failed. ${response.data.message}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }
      

    
  };
 
  return (
    <div className="tab-pane" id="sign-up">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
        <label>Your email address *</label>
        <input
            type="text"
            className="form-control"
            id="email"
            required
            {...register("email", { required: true })}
        />
        </div>
        <div className="form-group mb-5">
        <label>Password *</label>
        <input
            type="password"
            className="form-control"
            id="password"
            required
            {...register("password", { required: true })}
        />
        </div>
        
        <div className="form-group mb-5">
            <label>First Name *</label>
            <input
            type="text"
            className="form-control"
            id="first-name"
            required
            {...register("first_name", { required: true })}
            />
        </div>
        <div className="form-group mb-5">
            <label>Last Name </label>
            <input
            type="text"
            className="form-control"
            id="last-name"
            required
            {...register("last_name", { required: true })}
            />
        </div>
        {/* <div className="checkbox-content login-vendor">
        <div className="form-group mb-5">
            <label>Organization Name *</label>
            <input
            type="text"
            className="form-control"
            id="organization_name"
            required
            {...register("organization_name", { required: false })}
            />
        </div> */}
        {/* <div className="form-group mb-5">
            <label>Trade License *</label>
            <input
            type="text"
            className="form-control"
            id="trade_license"
            required
            {...register("trade_license", { required: false })}
            />
        </div> */}
        {/* <div className="form-group mb-5">
        <label>Vendor Status *</label>
        <select className="form-control" id="vendor_status" {...register("vendor_status", { required: false })} >
          <option value="ORGANIZATION">Organization</option>
          <option value="INDIVIDUAL">Individual</option>
          
        </select>
        </div> */}
        
        {/* <div className="form-group mb-5">
            <label>Nid *</label>
            <input
            type="text"
            className="form-control"
            id="nid"
            required
            {...register("nid", { required: false })}
            />
        </div> */}
        {/* </div> */}
        {/* <div className="form-checkbox user-checkbox mt-0">
        <input
            type="checkbox"
            className="custom-checkbox checkbox-round active"
            id="check-customer"
            name="check-customer"   
        />
        <label className="check-customer mb-1">
            I am a customer
        </label>
        <br />
        <input
            type="checkbox"
            className="custom-checkbox checkbox-round"
            id="check-seller"
            name="check-seller"
            
        />
        <label className="check-seller">I am a vendor</label>
        </div> */}
        <p>
        Your personal data will be used to support your experience
        throughout this website, to manage access to your account,
        and for other purposes described in our{" "}
        <a href="#" className="text-primary">
            privacy policy
        </a>
      
        </p>
        <a href="#" className="d-block mb-5 text-primary">
        Signup as a vendor?
        </a>
        <div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
        <input
            type="checkbox"
            className="custom-checkbox"
            id="remember"
            name="remember"
            required
        />
        <label className="font-size-md">
            I agree to the{" "}
            <a href="#" className="text-primary font-size-md">
            privacy policy
            </a>
        </label>
        </div>
        <div className="d-flex justify-content-center">
          <input type="submit" className="btn btn-primary" />
        </div>
        </form>
    </div>
  );
};

export default FormSignup;
