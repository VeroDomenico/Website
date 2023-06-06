import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumePopupComponent } from '../resume-popup/resume-popup.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {Firestore, collection, setDoc, doc, getDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  messageList = ["Developer", "Designer", "Entrepreneur"];
  currentMessage = '';
  shouldContinue = true;
  col:any;

  constructor(private dialog: MatDialog, db : Firestore) {
  this.col = collection(db,'test');


  }





  ngOnInit(): void {

    this.startTypewriter();

    this.pullData()
  }
  pullData(){
    let docRef = doc(this.col,'test')
    let docSnap = getDoc(docRef);

    console.log("Document data:", docSnap);

  }

  openResumeDialog() {
    const dialogRef = this.dialog.open(ResumePopupComponent,{
      panelClass: 'no-scroll-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async startTypewriter() {
    while (this.shouldContinue) {
      for (let i = 0; i < this.messageList.length; i++) {
        await this.typeWriterPrtMessage(this.messageList[i], 30);
        await this.sleep(3000);
        await this.typeWriterDelMessage(this.messageList[i], 30);
        await this.sleep(1000);
      }
    }
  }

  async typeWriterPrtMessage(message: string, ms: number) {
    for (let i = 0; i <= message.length; i++) {
      await this.sleep(ms);
      this.currentMessage = message.substring(0, i);
    }
  }

  async typeWriterDelMessage(message: string, ms: number) {
    for (let i = message.length; i >= 0; i--) {
      await this.sleep(ms);
      this.currentMessage = message.substring(0, i);
    }
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
