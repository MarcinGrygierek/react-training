class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    show(){
        console.log('Point', this.x, this.y);
    }
}

const point = new Point(10, 20);
point.show();

class Point3D extends Point {
    constructor(x, y, z){
        super(x, y);
        this.z = z;
    }

    show(){
        console.log('Point3D', this.x, this.y, this.z);
    }
}

const point3d = new Point3D(1, 2, 3);
point3d.show();