import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';
import { ActivatedRoute,Router } from  '@angular/router';
import { throwError, Observable , interval } from 'rxjs';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  data = [];
  clike = false;
  dclike = false;
  constructor( private route: ActivatedRoute,private router: Router,private authService: AuthService) { }

  ngOnInit() {
   
    this.authService.getblog().subscribe((res:any) => this.onSuccess(res));

    
  }


  

  like(param){
    // document.getElementById('demo').disabled = true;
    this.clike = true;
    this.dclike = false;
    var data = {
      "like":param,
      "dlike":0
    }
    console.log("like",data)
    this.authService.postlike(data).subscribe((res:any) => this.onSuccess(res));
    
  }
  

  dlike(param){
    this.clike = false;
    this.dclike = true;
    var d_data = {
      "like":0,
      "dlike":param

    }
    console.log("dlike",d_data)
    this.authService.postdlike(d_data).subscribe((res:any) => this.onSuccess(res));

  }

  onSuccess(res){
    console.log(res['data'])
    this.data = []
    if(res != undefined){
      res['data'].forEach(element => {
        this.data.push(element) 
      });
    }
  }

  
  

}
