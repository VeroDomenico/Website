import { Component } from '@angular/core';
import {ConsoleLogger} from "@angular/compiler-cli";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
}

// On Dom Load
//Wait until the content of the page has been loaded prior to handling thi
document.addEventListener("DOMContentLoaded", function() {
  let navbar = document.getElementById("NavigationBar");
  window.onscroll = function () {
    stickyNav()
  };

  // !. is sure the value we want to access is not null
  // ?. allows for null access and checking
  function stickyNav(){
    //Null check
  if (navbar?.offsetHeight === null){
    console.log("Offset found to be null")
    return
  }
  if (window.scrollY >= navbar!.offsetTop){
    navbar!.classList.add("stickyNav")
    }else {
      navbar!.classList.remove("stickyNav")
    }
  }
})

// Basic Functionality
