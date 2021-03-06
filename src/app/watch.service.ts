import { Injectable } from "@angular/core";

@Injectable()

export class WatchService{
    pageTitle:string="Stopwatch"
    hour:number=0
    min:number=0
    sec:number=0
    flag: boolean=true
    st:boolean=true
    rec:any[]=[]
    interval:any;


    start():void{
        if (this.st) 
        {
            this.st=false
            this.interval=setInterval(()=>
            {
                if (this.sec<60) 
                {
                    this.sec++
                    if (this.sec==60) 
                    {
                        this.sec=0
                        this.min++
                        if (this.min==60) 
                        {
                            this.min=0
                            this.hour++
                            
                        }
                        
                    }
                
                } 
            },1000)
        }
         
        }

    
    pause(){
        
        clearInterval(this.interval)
        this.st=true
    
    }

    record():void{
        this.rec.push("The elapsed time is : ".concat(this.hour.toString()," : ",this.min.toString()," : ",this.sec.toString()))

    }

    reset():void{
        this.sec=0
        this.min=0
        this.hour=0
        this.rec=[]
        clearInterval(this.interval)
        this.st=true

    }

}