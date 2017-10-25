//import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data'

     class App extends Component {
       render() {
         console.log(data);

       const messagesReadorUnread = (m) => {
         const cls = ['row', 'message']
       if (m.read) {
           cls.push('read') } else {cls.push('unread') }
         if (m.selected){
           cls.push('selected')
         }
           return cls.join(' ')
       }

       const starred = (n) => {
         const stars = ['start', 'fa']
         if (n.starred){
           stars.push('fa-star') } else { stars.push('fa-star-o') }
           return stars.join(' ')
       }
     const check = (o) => {
         if (o.selected) {
            return (true) } else
           { return (false) }
       }
       const starClick = data => {
         if(data.starred){
           data.starred=false
         } else {
           data.starred=true
         }
         this.setState(data)
         }

         const selectClick = data => {
           if (data.selected){
             data.selected=false
           } else {
           data.selected=true
           }
           this.setState(data)
         }

     var emails = data.map(function(data){
         return <div key={data.id} className={messagesReadorUnread(data)}>
                <div className="col-xs-1">
                  <div className="row">
                    <div className="col-xs-2">
                      <input type="checkbox" onClick={selectClick.bind(this, data)} checked={!!check(data)}/>
                    </div>
                    <div className="col-xs-2">
                      <i onClick={starClick.bind(this, data)} className={starred(data)}></i>
                    </div>
                  </div>
                </div>
                <div className="col-xs-11">
                {(data.labels[0]) && <span className="label label-warning">{data.labels[0]}</span>}
                {(data.labels[1]) && <span className="label label-warning">{data.labels[1]}</span>}
                  <a href="#">
                    {data.subject}
                  </a>
                </div>
              </div>;

      });


         return (
         <div>
           {emails}
           </div>
             )
       }
     }


 export default App;
