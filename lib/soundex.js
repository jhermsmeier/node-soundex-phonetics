/**
 * Soundex
 * @param  {String} s
 * @return {String} code
 */
function soundex( s ) {
  
  var a = ( s + '' ).toLowerCase()
  var f = a[0] || ''
  
  var r = ''
  var code = null
  var length = a.length
  
  for( var i = 1; i < length; i++ ) {
    if( ( code = soundex.codes[ a[i] ] ) == null )
      continue
    else if( i === 1 && code === soundex.codes[f] )
      continue
    else if( code === soundex.codes[ a[ i - 1 ] ] )
      continue
    r += code
  }
  
  return ( f + r + '000' )
    .substring( 0, 4 )
  
}

/**
 * Soundex code values
 * @type {Object}
 */
soundex.codes = {
  a: '', e: '', i: '', o: '', u: '',
  b: '1', f: '1', p: '1', v: '1',
  c: '2', g: '2', j: '2', k: '2', q: '2', s: '2', x: '2', z: '2',
  d: '3', t: '3',
  l: '4',
  m: '5', n: '5',
  r: '6'
}

// Exports
module.exports = soundex
