const BASE_URL = 'https://chengs-auction.herokuapp.com/api/v1';

export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      headers: { 'Content-Type':'application/json' },
      credentials: 'include', 
      method: 'POST',
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json();
    })
  },
  currentUser(){
    return fetch(`${BASE_URL}/current_user`,{
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
      method: 'GET',
    }).then((res)=> {
      return res.json()
    })
  },
  destroy(){
    return fetch(`${BASE_URL}/session`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(res => res.json())
  }
}
export const User={
  create(params){
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user:params})
      }
    ).then(res => res.json());
  }
}

export const Auction = {
  index() {
    return fetch(`${BASE_URL}/auctions`)
      .then(res => {
        return res.json();
      })
  },
  create(params) {
    return fetch(`${BASE_URL}/auctions`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    }).then(res => res.json())
  },
  show(id) {
    return fetch(`${BASE_URL}/auctions/${id}`)
      .then(res => res.json())
  },
  update(id,params){
    return fetch(`${BASE_URL}/auctions/${id}`,{
      method: "PATCH",
      credentials: "include",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(params)
    }).then(res=> res.json());
  },
  publish(id){
    return fetch(`${BASE_URL}/auctions/${id}`,{
      method: "PATCH",
      credentials: "include",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({published: true})
    }).then(res=> res.json());
  }
}

export const Bid = {
  create(id, params) {
    return fetch(`${BASE_URL}/auctions/${id}/bids`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }
}