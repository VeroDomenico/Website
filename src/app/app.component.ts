import { Component, Renderer2, OnInit } from '@angular/core';

import {ConsoleLogger} from "@angular/compiler-cli";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})



//Class scope
export class AppComponent {
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'overflow-x', 'hidden');
  }
  title = 'Dominic Portolfio';

  scroll(id: string){
    let webElem = document.getElementById(id);
    if (webElem === null){
      console.log("Webelem found to be null")
      return
    }
    webElem!.scrollIntoView({behavior:"smooth"});
  }

  closeBanner(){
    let banner = document.getElementById("banner")
    banner!.hidden = true;
  }

}

// On Dom Load
//Wait until the content of the page has been loaded prior to handling thi
document.addEventListener("DOMContentLoaded", function() {
  let navbar = document.getElementById("NavigationBar");
  let banner = document.getElementById("banner");



  // onscroll functionality
  window.onscroll = function () {
    stickyNav()
    stickyBanner()
  };


  // !. is sure the value we want to access is not null
  // ?. allows for null access and checking
  function stickyNav(){
    //Null check
  if (navbar?.offsetHeight == null){
    console.log("Offset found to be null")
    return
  }
  if (window.scrollY >= navbar!.offsetTop+200){
    navbar!.classList.add("stickyNav")
    }else {
      navbar!.classList.remove("stickyNav")
    }
  }

  function stickyBanner(){
    if(banner?.offsetHeight == null){
      console.log("offset of banner cannot be found")
      return
    }
    if (window.scrollY > banner!.offsetTop+200){
      banner!.classList.add("stickyBanner")
    } else{
      banner!.classList.remove("stickyBanner")
    }
  }


})

// Basic Functionality

