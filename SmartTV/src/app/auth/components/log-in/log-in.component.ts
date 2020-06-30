import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LogInComponent implements OnInit {


  ngOnInit(): void {
  }
}
