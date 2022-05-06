import { Auction } from '../requests';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AuctionIndexPage({ current_user }) {
  const [auctions, setAuction] = useState([])
  useEffect(()=>{
    Auction.index()
      .then(auctions => {
        setAuction(auctions)
      })
  }, [])

  return (
    <>
      <div style={{ backgroundColor: "#FFF6E8", textAlign: "center"}}><h1><strong>Auctions</strong></h1></div>
        {auctions.map(i=>{
            return (
              <div key={i.id}>
              <Link to={`/auctions/${i.id}`} key={i.id}>
              <p>{i.title}</p>
              </Link>
              <p>Posted on {new Date(i.created_at).toDateString()}</p>
              </div>
            )
        }) }
    </>
  )
}
