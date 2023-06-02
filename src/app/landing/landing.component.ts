import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    typeWriter()
  }

}

const messageList = ["Developer","Designer", "Entrepreneur"]

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
let shouldContinue = true;

async function typeWriter() {
  let el = document!.getElementById("typewriter-input-box")

  if(el!.innerText == null){
    return
  }
  console.log("Made it to here")
  while (shouldContinue){
    for(let message in messageList){
    await typeWriterPrtMessage(el!, messageList[message], 30)
    await sleep(3000);
    await typeWriterDelMessage(el!, messageList[message], 30)
    await sleep(1000);
    }
  }

}

async function typeWriterPrtMessage(el: HTMLElement, message:String, ms:number){
  console.log("Printing Message");

  for(let i = 0; i <= message.length; i++){
    await sleep(ms);
    el!.innerHTML = message.substring(0,i);
  }
}

async function typeWriterDelMessage(el: HTMLElement, message:String, ms:number){
  console.log("deleting message")
  for(let i = message.length; i >= 0; i--){
    await sleep(ms);
    el!.innerText= el!.innerText.slice(0,i);
  }

}