
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/share';

var observable = Observable.create((observer: any) => {
    try{
        observer.next('Hey guys!');
        observer.next('How are you?');
        observer.next('I am fine, thank you!');

        setInterval( () => {
            observer.next('I am good ever 2 seconds')
        }, 2000);
    }catch(err){
        err = 'this is an error';
        observer.error(err)
    }
});

var observer = observable.subscribe( 
    (x1:any) => addItem(x1),
    (error:any) => addItem(error),
    () => addItem('Completed!')
);

var observer2 = observable.subscribe( 
    (x:any) => addItem(x)
);

observer.add(observer2);

setTimeout( () => {
    observer.unsubscribe();
}, 6000);


function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


