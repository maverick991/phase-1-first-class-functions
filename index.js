function receivesAFunction(Spy){
    return Spy();
}

function returnsAnAnonymousFunction () {
    return function (number) {
        console.log(`69 is better than ${number}.`);
      }

}
function returnsANamedFunction(){
    return function greeting(){
        console.log("Hi.")
    }
}
