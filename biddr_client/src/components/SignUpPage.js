import React from 'react';

const SignUpPage =({handleSubmit, history})=>{
    function onSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData = new FormData(currentTarget);
        const formValues={
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        handleSubmit(formValues)
        history.push('/auctions')
    }
    return(
        <main className="container d-flex justify-content-center pt-4">
            <form onSubmit={onSubmit}>
                <div className="d-flex flex-column">
                    <label htmlFor='first_name'>First Name*</label>
                    <input id='first_name' type='text' name='first_name' className="form-control" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor='last_name'>Last Name*</label>
                    <input id='last_name' type='text' name='last_name' className="form-control" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor='email'>Email*</label>
                    <input id='email' type='email' name='email' className="form-control" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor='password'>Password*</label>
                    <input id='password' type='password' name='password' className="form-control" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor='password_confirmation'>Password*</label>
                    <input id='password_confirmation' type='password' name='password_confirmation' className="form-control" />
                </div>
                <input type='submit' value='Sign In'  className="form-control btn btn-secondary mt-2"/>
            </form>
        </main>
    )
}
export default SignUpPage;