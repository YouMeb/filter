filter
======

```javascript
var filter = require('YouMeb/filter');
var nums = [1, 2, 3, 4, 5];

nums = filter(nums, function (num) {
  return num % 2;
});

console.log(nums); // [1, 3, 5]
```
