import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"]
})
export class ChatPage implements OnInit {
  text: string;
  chatRef: any;
  uid: string;

  constructor() {}

  send() {
    console.log("Blep");
  }

  ngOnInit() {}
}
