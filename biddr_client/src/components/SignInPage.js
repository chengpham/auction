import React from 'react';

const SignInPage =({handleSubmit, history})=>{
    function onSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData = new FormData(currentTarget);
        const formValues={
            email: formData.get('email'),
            password: formData.get('password')
        }
        handleSubmit(formValues)
        history.push('/auctions')
    }
    return(
        <main className="container d-flex justify-content-center pt-4">
            <form onSubmit={onSubmit}>
                <div className="d-flex flex-column">
                    <label htmlFor='email'>Email*</label>
                    <input id='email' type='email' name='email' className="form-control" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor='password'>Password*</label>
                    <input id='password' type='password' name='password' className="form-control" />
                </div>
                <input type='submit' value='Sign In'  className="form-control btn btn-secondary mt-2"/>
            </form>
        </main>
    )
}
export default SignInPage;