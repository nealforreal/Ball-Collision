function Box(width, height, color){

                if(width == undefined) width = 50;

                if(height == undefined) height = 50;

                if(color == undefined) color = 'hsla(200, 100%, 50%, 1)';

                this.x = 0;

                this.y = 0;

                this.vx = 0;

                this.vy = 0;

                this.width = width

                this.height = height;

                this.color = color;

                this.rotation = 0;

                this.scaleX = 1;

                this.scaleY = 1;

                this.lineWidth = 1;

}

Box.prototype.draw = function(context){

                context.save();

                context.translate(this.x, this.y);

                context.rotate(this.rotation);

                context.lineWidth = this.lineWidth;

                context.fillStyle = this.color;

                context.scale(this.scaleX, this.scaleY);

                context.beginPath();

                context.rect(0, 0, this.width, this.height);

                context.closePath();

                context.fill();

                if(this.lineWidth>0) context.stroke();

                context.restore();

}

