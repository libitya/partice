/*var car;
car = {
    color: "white",
    weight: 800 + "kg",
    model: 500,
    name: function () {
        return this.color + "" + this.model;
    }
}
var c = 5;
d = c += 16;
document.write(d);

function login(name, job) {
    alert("Welcome" + name + ", the" + job);
}

function get() {
    document.getElementById("wenzi").innerHTML = car.name();
}

function panduan() {
    var a = document.getElementById("shuzi").value;

    if (a > 10) {
        if (a < 15) {
            alert("成功")
        } else {
            alert("失败")
        }
    } else {
        alert("失败")
    }
}

setTimeout("get()", 0);*/

/*window.onbeforeunload = function (e) {
    return (e || window.event).returnValue = '有信息未保存，确认离开？！';
}

setTimeout("e()", 10);*/

/*var x = 2;　　
function test() {　　　　
    this.x = 1;　　
}　　
var o = new test();　　
alert(o.x);*/

/*function Test1(str) {
    this.a = str;
}
var myTest = new Test1("test1");
alert(myTest.a);*/

/*var b = 2;
var a = b--;
console.log(a);
console.log(b);
document.write(a);
document.write(b);*/

/*var i = 1;
a = i++;
console.log(i);
console.log(a);*/

/*function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var rand = new Person('Rand McNally', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);

document.write(car2.owner.name);*/

/*var character = "You did not enter a response to the last " +"question.\n\nSubmit form anyway?";
alert(character);*/

/*function countInstances(mainStr, subStr) {
    var mainStr = "abcdabcd";
    var subStr = "a";
    var count = 0;
    var offset = 0;
    do {
        offset = mainStr.indexOf(subStr,offset);
        if (offset != -1) {
            count++;
            offset += subStr.length;
            console.log(offset);
        }
        
    } while (offset != -1)
    console.log(count);
    
}*/

/*var x = Array;
x = [1,2,3,4,5];
for (var a in x) {
    if (x.hasOwnProperty(a)) {
        var z = x[a];

    }
    alert(z);
}*/

/*var s = new String("Sample");
document.write(s.hasOwnProperty("split"));
document.write("<br/>");
document.write(String.prototype.hasOwnProperty("split"));*/

/*var x = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
}
document.write(x.hasOwnProperty("id"));*/ //hasOwnProperty测试

/*var Person = function () {
    this.canTalk = true;
    this.greet = function () {
        if (this.canTalk) {
            console.log('Hi, I\'m ' + this.name);
        }
    };
};

var Employee = function (name, title) {
    this.name = name;
    this.title = title;
    this.greet = function () {
        if (this.canTalk) {
            console.log("Hi, I'm " + this.name + ", the " + this.title);
        }
    };
};
Employee.prototype = new Person();

var Customer = function (name) {
    this.name = name;
};
Customer.prototype = new Person();

var Mime = function (name) {
    this.name = name;
    this.canTalk = false;
};
Mime.prototype = new Person();

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');
bob.greet();
joe.greet();
rg.greet();
mike.greet();
mime.greet();*/ //Object.prototype,创造用于类似于对象的函数的“基类”对象。

/*function Fee() {
    // . . .
}
function Fi() {
    // . . .
}
Fi.prototype = new Fee();
function Fo() {
    // . . .
}
Fo.prototype = new Fi();
function Fum() {
    // . . .
}
Fum.prototype = new Fo();
var fum = new Fum();
document.write(Fi.prototype.isPrototypeOf(fum)) ;*/ //测试Fi对象是否在fum的原型链上；

/*var i = 0;
function fn() {
        alert(Math.ceil(Math.random() * 10));
    }
do {
    i++;
    fn();
} while (alert(3));*/ //随机数弹框1-10，到3停止

/*function search() {
    var str = document.getElementById("wenzi").innerHTML;
    var n = str.search("3"); //搜索"3"字符串，返回目标字符串开始的位置;
    var m = str.replace("2", "4"); //搜索"2"字符串并把该字符换成"4";
    document.write(n + "</br>");
    document.write(m);
}
setTimeout("search(),0");*/ //延时操作

/*function filterAge(age) {
    if (age > 200 || age < 0) {
        throw {
            "message": "请输入合法年龄"
        };
    }
}

function filterWages(wages) {
    if (wages < 10000) {
        throw {
            "message": "不合理的wages"
        };
    }
}
try {
    debugger;
    filterWages(100);
    debugger;
    filterAge(201);
} 
catch (err) {
    document.write(err.message);
}*/

/*try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
    return;
  }
}
catch (ex) {
  console.error("outer", ex.message);
}*/

/*function f() {
    "use strict";
    return !this;
};
console.log(f());*/

/*var a = 5;
function A() {
    alert(a);
    var a = 10;     //声明变量a被提前，赋值a=10没有被提前，返回第一个undefined
    alert(this.a);  //new A()创造一个,此时this.a指向函数A()中的a，而var a = 10创建全局变量，所以返回第二个undefined.
    alert(a);       //返回全局变量a = 10;
}
new A();    */

/*function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m - arg2 * m) / m
}
Number.prototype.add = function (arg) {
    return accAdd(this, arg);
}

alert(2.22.add(0.1));

function accMul(arg1, arg2) {
    var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length
    } catch (e) {}
    try {
        m += s2.split(".")[1].length
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
Number.prototype.mul = function (arg) {
    return accMul(arg, this);
}
alert(2.3.mul(2.5));

function accDiv(arg1, arg2) {
    var t1 = 0,
        t2 = 0,
        r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length
    } catch (e) {}
    try {
        t2 = arg2.toString().split(".")[1].length
    } catch (e) {}
    
        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))
        return (r1 / r2) * Math.pow(10, t2 - t1);
    
}
//给Number类型增加一个div方法，调用起来更加方便。 
Number.prototype.div = function (arg) {
    return accDiv(this, arg);
}

alert(4.5.div(0.9));*/

function myFunction() {
    var txt = "";
    var inpObj = document.getElementById("id1");
    if (!isNumeric(inpObj.value)) {
        txt = "你输入的不是数字";
    } else if (inpObj.validity.rangeUnderflow) {
        txt = "你输入的值太小";
    } else if (inpObj.validity.rangeOverflow) {
        txt = "你输入的值太大";
    } else {
        txt = "输入正确";
    }
    document.getElementById("demo").innerHTML = txt;
}

// 判断输入是否为数字
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
//parseFloat() 函数可解析一个字符串，并返回一个浮点数。
//isFinite() 函数用于检查其参数是否是无穷大。

console.log(test);

function test() {
    var test = function () {} //提升的
    var test = 234;
    console.log(test);


}
test();
var test = 123;