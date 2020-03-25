import React, { Component } from 'react';


import TechData from '../data/tech.json'
import swal from 'sweetalert';

class Search extends Component {


  constructor(props) {
    super(props);
    this.state = {
      messageToShow: "",
      techToshow: []
    };

    this.searchCall = this.searchCall.bind(this);
  }

  toBeAdded(){
    
    swal("Function to be added")
    
  }

  searchCall(){



    var stringSearch = document.getElementById("inputSearch").value;

    if(stringSearch===""){
      swal("input search must be filled")
    }else{

      this.setState({
        messageToShow: "Start Fetching"
      })
      this.setState({techToshow: []});
          TechData.map((tech)=>{
            tech.tags.map((tag)=>{
              let varTag = tag;
              let varStringSearch = stringSearch;
              if(varTag.toLowerCase()===varStringSearch.toLowerCase() ){

                this.setState(prevState => ({
                  techToshow: [...prevState.techToshow, tech]
                }))
                
              }
            })
        })
            if(this.state.techToshow.length === 0){
              this.setState({
                messageToShow: "Fetched"
              })
            }else{
              this.setState({
                messageToShow: "Fetched"
              })
        
            }
    }

}
  render() {
    return (
      <div className="Search">




<div class="container">
<br/>
<br/>
<br/>

<br/>
<br/>
<div id="about">




        <div class="sub-title">
          Search for your technician 
        </div>
</div>
  <div class="row ">
    <div class="col-0 	col-sm-0 	col-md-0 	col-lg-1 	col-xl-1">
      
    </div>
    <div class="col-12 	col-sm-12 	col-md-12 	col-lg-10 	col-xl-10">

    <div class="card section-bg">
        <div class="card-body">
{/* 
<a className="comment-search">
          words to search with : C++ C# C Java React Angular Excel Word  
</a> defaultValue="react"
*/}
        <div class="input-group -mb3">
  <input type="text" class="form-control"  placeholder="Search technician" id="inputSearch" /> 
  <div class="input-group-append">
    <button class="btn btn-primary" type="submit"  onClick={this.searchCall}>Search</button>
  </div>
</div>

{
this.state.techToshow==null ? "" :
<div>



{this.state.techToshow.map((tech)=>{
  return (<div>
<br />

<div class="card" >
  <div class="row no-gutters">
    <div class="col-md-3 d-flex align-items-center justify-content-center">
      <img  src={"img/profil/"+tech.profilPic+".jpg"}  className=" rounded-circle img-thumbnail img-profil" alt="" />


    </div>
    <div class="col-md-9">
      <div class="card-body">


        <h5 class="card-title">{tech.fullName}</h5>
        <div class="row prof-line">
  <div class="col-3 prof-first-case">description</div>
  <div class="col-9 prof-second-case">{tech.description}</div>
</div>

<div class="row prof-line">
  <div class="col-3 prof-first-case">location</div>
  <div class="col-9 prof-second-case">{tech.location}</div>
</div>

<div class="row prof-line">
  <div class="col-3 prof-first-case">rate</div>
  <div class="col-9 prof-second-case">{tech.rate}/10</div>
</div>

<div class="row prof-line">
  <div class="col-3 prof-first-case">rate</div>
  <div class="col-9 prof-second-case">{tech.rate}/10</div>
</div>

<div class="row prof-line">
  <div class="col-3 prof-first-case">prix</div>
  <div class="col-9 prof-second-case">${tech.prix} USD / hour </div>
</div>

<div class="row prof-line">
  <div class="col-3 prof-first-case">phone</div>
  <div class="col-9 prof-second-case">{tech.phone}</div>
</div>

<div class="row prof-line">
  <div class="col-3 prof-first-case">sector</div>
  <div class="col-9 prof-second-case">{tech.sector}</div>
</div>
<div class="row prof-line">
  <div class="col-3 prof-first-case">email</div>
  <div class="col-9 prof-second-case">{tech.email}</div>
</div>


      <div class="row">
              <div class="col-lg-12 col-sm-12 col-12">
                  <a href="#"><i class="fa fa-facebook social-botton"    aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-linkedin social-botton" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-twitter social-botton"   aria-hidden="true"></i></a>
              </div>
      </div>

      


        <div class="row">
    <div class="col-md-7">
    <p class="card-text">
          <small class="text-muted">
          {
          tech.tags.map((tag)=>{
            return(
              <a>{tag} </a>
            )
          })
        }
            </small></p>
    </div>
    <div class="col-md-5 d-flex justify-content-end">


    <button  class="button hire" onClick={this.toBeAdded}>Hire <i class="fa fa-handshake-o" aria-hidden="true"></i> </button>
    <button class="button calll" onClick={this.toBeAdded}>Call <i class="fa fa-phone" aria-hidden="true"></i></button>



    </div>

    </div>

 
      </div>
    </div>
  </div>
</div>
{/* 
<div class="card bounceInUp">
  <div class="card-header">
    {tech.FullName}
  </div>
  <div class="card-body ">
    <blockquote class="blockquote mb-0">
      <p>Description: {tech.description}</p>
      <footer class="blockquote-footer">
        {
          tech.tags.map((tag)=>{
            return(
              <a>{tag} </a>
            )
          })
        }
      </footer>
    </blockquote>
  </div>
</div>
*/}
</div>
  )

})}

{this.state.messageToShow}
</div>


}


     </div>
      </div>   

    </div>
    <div class="col-0 col-sm-0 	col-md-0 	col-lg-1 	col-xl-1">
      
    </div>
  </div>
</div>

  
      </div>
    );
  }
}

export default Search;
