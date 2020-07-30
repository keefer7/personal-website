import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alex Keefer\'s Personal Portfolio';
  myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
 
    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
 
    this.myParams = {
            particles: {
                number: {
                    value: 100,
                },
                color: {
                    value: '#BB0000'
                },
                shape: {
                    type: 'edge',
                },
                size: {
                  "value": 5,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 50,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                line_linked: {
                  "enable": true,
                  "distance": 150,
                  "color": "#BB0000",
                  "opacity": 0.4,
                  "width": 1
                },
                move: {
                  "enable": true,
                  "speed": 20,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
            }
      };
    }
}
