var soundex = require( '..' )
var assert = require( 'assert' )

describe( 'Soundex', function() {
  
  it( 'Soundex', function() {
    assert.equal( soundex( 'Soundex' ), 's532' )
  })
  
  it( 'Example', function() {
    assert.equal( soundex( 'Example' ), 'e251' )
  })
  
  it( 'Sownteks', function() {
    assert.equal( soundex( 'Sownteks' ), 's532' )
  })
  
  it( 'Ekzampul', function() {
    assert.equal( soundex( 'Ekzampul' ), 'e251' )
  })
  
  it( 'Euler', function() {
    assert.equal( soundex( 'Euler' ), 'e460' )
  })
  
  it( 'Gauss', function() {
    assert.equal( soundex( 'Gauss' ), 'g200' )
  })
  
  it( 'Hilbert', function() {
    assert.equal( soundex( 'Hilbert' ), 'h416' )
  })
  
  it( 'Knuth', function() {
    assert.equal( soundex( 'Knuth' ), 'k530' )
  })
  
  it( 'Lloyd', function() {
    assert.equal( soundex( 'Lloyd' ), 'l300' )
  })
  
  it( 'Lukasiewicz', function() {
    assert.equal( soundex( 'Lukasiewicz' ), 'l222' )
  })
  
  it( 'Ellery', function() {
    assert.equal( soundex( 'Ellery' ), 'e460' )
  })
  
  it( 'Ghosh', function() {
    assert.equal( soundex( 'Ghosh' ), 'g200' )
  })
  
  it( 'Heilbronn', function() {
    assert.equal( soundex( 'Heilbronn' ), 'h416' )
  })
  
  it( 'Kant', function() {
    assert.equal( soundex( 'Kant' ), 'k530' )
  })
  
  it( 'Ladd', function() {
    assert.equal( soundex( 'Ladd' ), 'l300' )
  })
  
  it( 'Lissajous', function() {
    assert.equal( soundex( 'Lissajous' ), 'l222' )
  })
  
  it( 'Wheaton', function() {
    assert.equal( soundex( 'Wheaton' ), 'w350' )
  })
  
  it( 'Ashcraft', function() {
    assert.equal( soundex( 'Ashcraft' ), 'a226' )
  })
  
  it( 'Burroughs', function() {
    assert.equal( soundex( 'Burroughs' ), 'b622' )
  })
  
  it( 'Burrows', function() {
    assert.equal( soundex( 'Burrows' ), 'b620' )
  })
  
  it( 'O\'Hara', function() {
    assert.equal( soundex( 'O\'Hara' ), 'o600' )
  })
  
})
