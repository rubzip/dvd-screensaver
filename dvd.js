function randomColor() {
    color = "";
    for(var i=0; i<3; i++) {
        color += Math.round(Math.random()*256).toString(16);
    }
    return color
}


class Ball {
    constructor(h, w, x, y, vx, vy) {
        this.h = h;
        this.w = w;
        
        this.x = x;
        this.y = y;

        this.vx = vx;
        this.vy = vy;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

        if(
            ((this.x==w/2)&&(this.y==h/2)) ||
            ((this.x==w/2)&&((this.y+h/2)==window_height)) ||
            ((this.y==h/2)&&((this.x+w/2)==window_width)) ||
            (((this.x+w/2)==window_width)&&((this.y+h/2)==window_height))
        ) {
            // WIN
        } else if((this.x <= this.w/2)||((this.x + this.w/2) >= window_width)) {
            this.vx *= -1
        } else if((this.y <= this.h/2)||((this.y + this.h/2) >= window_height)) {
            this.vy *= -1
        }
    }
    
    
    
    colision(window_width, window_height) {
        if(this.x <= this.w/2) {
            return 1;
        } else if {
            return 2;
        } else if(this.y <= this.h/2) {
            return 3;
        } else if((this.y + this.h/2) >= window_height) {
            return 4;
        } else {
            return 0;
        }
    }

    print() {
        console.log('(' + this.x+', '+ this.y + ')');
    }
}

var bola = new Ball();
bola.print();