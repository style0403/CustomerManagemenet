import React, { Component } from 'react';
import Customer from './components/customer';
import './App.css';


const customer = [
  {'id': 1,
  'img': 'https://placeimg.com/64/64/1',
  'name': 'Joshua',
  'DOB': '970403',
  'gender': 'Male',
  'job': 'student'
  },
{
  'id': 2,
  'img': 'https://placeimg.com/64/64/2',
  'name': 'Tamin',
  'DOB': '961001',
  'gender': 'Male',
  'job': 'archi'

},
{
  'id': 3,
  'img': 'https://placeimg.com/64/64/3',
  'name': 'Daniel',
  'DOB': '960127',
  'gender': 'Male',
  'job': 'builder'

}
]


function App() {
  return (
    <div>
      {
        customer.map(c=>{

          return(
            <Customer 
              key = {c.id}
              id= {c.id}
              img = {c.img}
              name = {c.name}
              DOB = {c.DOB}
              gender = {c.gender}
              job = {c.job}
              />
          );
        })
      }
    </div>

    );
}

export default App;
