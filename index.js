var ITWCWLib = (function() {

  /* start functions */
  function _addPlural(word, n) {
    return (n == 1) ? word + '' : word + 's';
  }

  function _addArticle(phrase) {
    // adapted from https://github.com/rigoneri/indefinite-article.js/blob/master/indefinite-article.js
    // Getting the first word
    var match = /\w+/.exec(phrase);
    if (match) {
      var word = match[0];
    } else {
      return "an " + phrase;
    }

    var l_word = word.toLowerCase();
    // Specific start of words that should be preceeded by 'an'
    var alt_cases = ["honest", "hour", "hono"];
    for (var i in alt_cases) {
      if (l_word.indexOf(alt_cases[i]) == 0) {
        return "an " + phrase;
      }
    }

    // Single letter word which should be preceeded by 'an'
    if (l_word.length == 1) {
      if ("aedhilmnorsx".indexOf(l_word) >= 0) {
        return "an " + phrase;
      } else {
        return "a " + phrase;
      }
    }

    // Capital words which should likely be preceeded by 'an'
    if (word.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/)) {
      return "an " + phrase;
    }

    // Special cases where a word that begins with a vowel should be preceeded by 'a'
    regexes = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/]
    for (var i in regexes) {
      if (l_word.match(regexes[i])) {
        return "a " + phrase;
      }
    }

    // Special capital words (UK, UN)
    if (word.match(/^U[NK][AIEO]/)) {
        return "a";
    } else if (word == word.toUpperCase()) {
        if ("aedhilmnorsx".indexOf(l_word[0]) >= 0) {
          return "an " + phrase;
        } else {
            return "a " + phrase;
        }
    }

    // Basic method of words that begin with a vowel being preceeded by 'an'
    if ("aeiou".indexOf(l_word[0]) >= 0) {
      return "an " + phrase;
    }

    // Instances where y follwed by specific letters is preceeded by 'an'
    if (l_word.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)) {
      return "an " + phrase;
    }

    return "a " + phrase;
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

  // TODO:
  // https://davidwalsh.name/essential-javascript-functions



  /* end functions */

  return {
    addPlural: _addPlural,
    addArticle: _addArticle,
    replaceAll: _replaceAll,
    objectLength: _objectLength,
    numDaysBetween: _numDaysBetween,
    numHoursBetween: _numHoursBetween,
    hashCode: _hashCode
  };


})();

module.exports = ITWCWLib;
