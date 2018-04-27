// main js file for project
function props(obj) {
  var p = [];
  for (; obj != null; obj = Object.getPrototypeOf(obj)) {
      var op = Object.getOwnPropertyNames(obj);
      for (var i=0; i<op.length; i++)
          if (p.indexOf(op[i]) == -1)
               p.push(op[i]);
  }
  return p;
}
//export default props;

module.exports.props = props;
