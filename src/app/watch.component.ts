import { Component } from "@angular/core";
import { WatchService } from "./watch.service";

@Component({
    selector :"sw-timer",
    templateUrl:"./watch.component.html"


})

export class watchComponent{
    hour=this.wt.hour
    min=this.wt.min
    sec=this.wt.sec
    rec:any[]=[]
    pageTitle=this.wt.pageTitle

    st:boolean=false
    ps:boolean=true
    recd=true
    res=true
    interval:any;

    constructor(public wt:WatchService) {}
   
    

    start(){
      this.wt.start()
      
      this.st=true
      this.res=true
      this.ps=false
      this.recd=false
      
      this.interval=setInterval(()=>{
        this.hour=this.wt.hour
        this.min=this.wt.min
        this.sec=this.wt.sec
      },0)
  
    }
  
    pause(){
      this.wt.pause()
      //clearInterval(this.interval)
      //this.recd=!this.recd
      this.res=false
      this.st=false
      this.ps=true
    }
  
    record(){
      this.wt.record()
      this.rec=this.wt.rec
    }
  
    reset(){
      this.wt.reset()
      this.rec=[]
      this.recd=true
      this.res=true
      this.ps=true
      this.st=false


    
      
    }

}
