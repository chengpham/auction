import { useState } from 'react';
import { Auction} from '../requests';
import FormErrors from './FormErrors'

const AuctionNewPage = (props)=>{
    const [errors,setErrors]=useState({});
    const [title,setTitle]=useState('');
    const [description,setdescription]=useState('');
    const [endDate,setEndDate]=useState('');
    const [reserveBid,setReserveBid]=useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const params={
            title: formData.get('title'),
            description: formData.get('description'),
            end_date: formData.get('end_date'),
            reserve_bid: formData.get('reserve_bid')
        }
        createAuction(params);
        event.currentTarget.reset();
    }
    function createAuction(params){
        Auction.create(params)
        .then((question)=>{
            if(question.errors){
                setErrors(question.errors)
            }
            if(question.id){
                const id = question.id;
                props.history.push(`/auctions/${id}`)
            }
        })
    }

    return(
        <>
            <div style={{ backgroundColor: "#FFF6E8", textAlign: "center"}}><h1><strong>Create An Auction</strong></h1></div>
            <form onSubmit={event=>handleSubmit(event)}>
                <div className='container col-8'>
                    <div className="form-group d-flex">
                        <label htmlFor='title'>Title*: </label>
                        <input name='title' id='title' value={title} onChange={e=>setTitle(e.target.value)} className="form-control ml-3" />
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor='description'>Description*: </label>
                        <textarea name='description' id='description'  value={description} onChange={e=>setdescription(e.target.value)} className="form-control ml-3"/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor='end_date'>EndsAt*: </label>
                        <input type="date" min={Date.now()}name='end_date' id='end_date' value={endDate} onChange={e=>setEndDate(e.target.value)} className="form-control ml-3" />
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor='reserve_bid'>ReservePrice*: </label>
                        <input type="number" min={1} name='reserve_bid' id='reserve_bid' value={reserveBid} onChange={e=>setReserveBid(e.target.value)} className="form-control ml-3" />
                    </div>
                    
                    <FormErrors errors={errors} forField='title'/>
                    <FormErrors errors={errors} forField='description' />
                    <FormErrors errors={errors} forField='end_date' />
                    <FormErrors errors={errors} forField='reserve_bid' />
                    <input type='submit' value='Submit'/>
                </div>
            </form>
        </>
    )
}
export default AuctionNewPage;