import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  msg:any

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.info(this.route.url)
    let s=""
    this.route.url.forEach((v)=>{
        v.forEach(u=>{
          s+="/"+u.path
        })
    })
    this.msg=s
  }

}
