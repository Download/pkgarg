var pkgarg = require('../pkgarg');
var expect = require('chai').expect;

describe('pkgarg', function(){
	it('is a function', function(){
		expect(pkgarg).to.be.a('function');
	});
	it('returns an object', function(){
		expect(pkgarg()).to.be.an('object');
	});
	it('accepts a string or array of strings as parameter', function(){
		expect(pkgarg('test')).to.be.an('object');
		expect(pkgarg(['test'])).to.be.an('object');
	});
	it('returns an object representation of package.json when given no arguments', function(){
		var pkg = pkgarg();
		expect(pkg).to.have.a.property('name');
		expect(pkg.name).to.equal('pkgarg');
		expect(pkg).to.have.a.property('version');
		expect(pkg).to.have.a.property('description');
		expect(pkg).to.have.a.property('test');
		expect(pkg.test).to.have.a.property('data');
		expect(pkg.test.data).to.have.a.property('array');
		expect(pkg.test.data.array).to.be.an('array');
	});
	it('returns a subtree from package.json when given an argument', function(){
		var test = pkgarg('test');
		expect(test).to.have.a.property('data');
		expect(test.data).to.have.a.property('array');
		expect(test.data.array).to.be.an('array');
	});
/*
	it('resolves references of the form `@pkg.object.path`', function(){
		var pkg = pkgarg();
		expect(pkg.test.primitive).to.equal(pkg.name);
	});
*/
});