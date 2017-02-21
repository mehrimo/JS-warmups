function Bikeshed(outerName, outerCapacity) {
  let color = 'bare drywall'
  let capacity = outerCapacity
  let name = outerName
  let bikesInShed = 0

this.setColor = function(value) {
  color = 
}


this.hangBike = function(){
  bikesInShed++
}

this.report = function () {
  return `${name}: ${capacity - bikesInShed} slots left`
 }
}


let small = new Bikeshed('small', 3)
let large = new Bikeshed('large', 10)

small.hangBike()

small.setColor('green')
small.capacity = -5
large.capacity = 10


console.log(Object.keys);
console.log(small.report());
