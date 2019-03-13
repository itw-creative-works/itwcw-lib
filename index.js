var ITWCWLib = (function() {

  /* start functions */
  function _getPlural(n) {
   return (n == 1) ? '' : 's';
  }

  function _replaceAll(s, r1, r2) {
   return s.replace(/r1/g, r2)
  }

  function _objectLength( object ) {
   var length = 0;
   for( var key in object ) {
       if( object.hasOwnProperty(key) ) {
           ++length;
       }
   }
   return length;
  };

  function _numDaysBetween (d1, d2) {
   var diff = Math.abs(d1.getTime() - d2.getTime());
   return diff / (1000 * 60 * 60 * 24);
  };

  function _numHoursBetween (d1, d2) {
   return Math.abs(d1 - d2) / 36e5; // 36e5 = 60*60*1000
  };

  function _hashCode(string) {
   var hash = 0, i, chr;
   if (string.length === 0) return hash;
   for (i = 0; i < string.length; i++) {
     chr   = string.charCodeAt(i);
     hash  = ((hash << 5) - hash) + chr;
     hash |= 0; // Convert to 32bit integer
   }
   return hash;
  };



  /* end functions */

  return {
   getPlural: _getPlural,
   replaceAll: _replaceAll,
   objectLength: _objectLength,
   numDaysBetween: _numDaysBetween,
   numHoursBetween: _numHoursBetween,
   hashCode: _hashCode

  };


})();

module.exports = ITWCWLib;
