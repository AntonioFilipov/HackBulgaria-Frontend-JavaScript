function MutablePoint(x,y,z){
    this.getX = function(){
        return x;
    }

    this.getY = function(){
        return y;
    }

    this.getZ = function(){
        return z;
    }

    this.move =function(dx,dy,dz){
        x += dx;
        y += dy;
        z += dz;
    }

}

function ImmutablePoint(x,y,z){
    this.getX = function(){
        return x;
    }

    this.getY = function(){
        return y;
    }

    this.getZ = function(){
        return z;
    }
}

ImmutablePoint.prototype.move = function(dx,dy,dz){

    return new ImmutablePoint(this.getX()+dx,this.getY()+dy,this.getZ()+dz);
}

ImmutablePoint.prototype.toString = function(){

    return "("+this.getX()+" "+this.getY()+" "+this.getZ()+")";
}

MutablePoint.prototype.toString = function(){

    return "("+this.getX()+" "+this.getY()+" "+this.getZ()+")";
}

var p1 = new MutablePoint(1,2,3);
var p2 = new ImmutablePoint(9,8,7);
console.log(p2.toString());
var result = p2.move(1,1,1);
console.log(result.toString());

