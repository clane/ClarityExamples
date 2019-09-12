import { Component, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-live-region',
  templateUrl: './live-region.component.html',
  styleUrls: ['./live-region.component.css']
})
export class LiveRegionComponent implements OnInit {

  constructor() { }

  liveRegionText: string = "This is a live region, the alert text will appear here dynamically";
  intervalId: any; 
  liveRegionOn: boolean = true;

  stopLiveRegionUpdates() {
     
     this.liveRegionOn = false;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

      let cnt = 0;
      this.intervalId =  setInterval(()=>{
          console.log(cnt);
          this.liveRegionText = "message " + cnt;
          cnt = cnt + 1;
          if(this.liveRegionOn === false){ clearInterval(this.intervalId); }
      }, 1000);

      

  }

  ngOnDestroy(){
    clearInterval(this.intervalId);
  }

}
