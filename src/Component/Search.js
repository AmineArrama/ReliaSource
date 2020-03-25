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
    <div class="col-sm-1">
      
    </div>
    <div class="col-sm-10">

    <div class="card section-bg">
        <div class="card-body">
{/* 
<a className="comment-search">
          words to search with : C++ C# C Java React Angular Excel Word  
</a>defaultValue="react"
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
    <div class="col-md-3">
      <img  src={"img/profil/"+tech.ProfilPic+".jpg"}  className="img-profil" alt="" />


    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h5 class="card-title">{tech.FullName}</h5>
        <p class="card-text">Description: {tech.description}</p>
        <p class="card-text">Joined {tech.Joined}</p>
        <p class="card-text">Location: {tech.location}</p>
        <p class="card-text">Phone: {tech.Phone}</p>
        <p class="card-text">Email: {tech.Email}</p>
        <div class="row">
    <div class="col-md-10">
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
    <div class="col-md-2">
    <button class="btn btn-success" > Hire </button>

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
    <div class="col-sm-1">
      
    </div>
  </div>
</div>

  
      </div>
    );
  }
}

export default Search;
