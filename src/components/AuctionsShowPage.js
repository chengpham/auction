import { Auction } from '../requests';
import { useState, useEffect } from 'react';
import { Bid } from '../requests';

export default function AuctionShowPage(props) {
    const [auction, setAuction] = useState([])
    useEffect(()=>{
      showAuction()
    }, [])

    function showAuction(){
      Auction.show(props.match.params.id)
      .then(auction => {
        setAuction(auction)
      })
    }

    function onSubmit(event){
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const formValues={ amount: formData.get('amount') }
      Bid.create(auction.id, formValues).then(()=>{
        return showAuction()
      })
    }

    function handlePublish(event){
      event.preventDefault();
      Auction.publish(props.match.params.id)
      .then(res=>{
        console.log(res)
      })
    }
    return (
      <>
      {auction ? 
      <div className='container pt-4'>
        <h1>{auction.title}</h1>
        <div className="container-fluid row justify-content-between">
          <div className="col-6">
            <p>{auction.description}</p>
            <form onSubmit={onSubmit}>
            <p className="form-group d-flex">
                <input type="number" name="amount" id="amount" placeholder="475" className="form-control" />
                <input type="submit" value="Bid" className="btn btn-secondary ml-2" />
            </p>
            </form>
              <form onSubmit={handlePublish}>
                <p className="form-group d-flex">
                    <input type="submit" value="Publish" className="btn btn-secondary ml-2 form-control" />
                </p>
              </form>
            
            <p><u>Previous Bids</u></p>
            {auction.bids? auction.bids.map((i, key)=>{
              return (
                <p key={key}>
                  {i.amount} on {new Date(i.created_at).toDateString()}
                </p>
              )
            }) : null}
          </div>

          <div className="col-6">
            <p>Current Bid: ${auction.active_bid ? auction.active_bid : 0}</p>
            <p>Ends At: {new Date(auction.end_date).toDateString()}</p>
            <p>{auction.active_bid < auction.reserve_bid ? "Reserved Price Met" : "Reserved Price Not Met"}</p>
          </div>
          
        </div>
      </div>
      :''}
      </>
    )
  }
  