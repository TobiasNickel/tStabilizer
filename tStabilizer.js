/**
 *@autor: Tobias Nickel
 *@license: MIT
 *@description: helps you stabilize data.
 * if you have a lot of event data, like the rotation of a mobile device values of other sensors,
 * it can be helpfull to stabilize the values, to display a stable output.
 * I wrote this small lib, to stabilize the display of an upload speed in kb
 */

/**
 *@class
 *@description: provides the nessasary methods.
 * you can push data, and read the max, min and avarage values. 
 */
var tStabilizer = function(length) {
    this.length = length || Infinity;
    // values as a queue, new values get pushed, old values removed my shift
    this.values = [];

    /**
     *@param value {number} the new value
     */
    this.push = function(value) {
        this.values.push(value);
        var start = this.values.length - this.length
        if (start > 0)
            this.values = this.values.slice(this.values.length - this.length);
    };
    /**
     *@return the avarave from the current values
     */
    this.getAvarage = function() {
        var sum = this.getSum();
        return sum / this.values.length;
    };
    /**
     *@return the highest of the current values
     */
    this.getMax = function() {
        var v = -Infinity;
        var i = this.values.length;
        while (i--) {
            v = v < this.values[i] ? this.values[i] : v;
        }
        return v;
    };
    /**
     *@return the lowest of the current values
     */
    this.getMin = function() {
        var v = Infinity;
        var i = this.values.length;
        while (i--) {
            v = v > this.values[i] ? this.values[i] : v;
        }
        return v;
    };
    /**
     *return the sum of the current values
     */
    this.getSum = function() {
        return this.values.reduce(function(l, c) { return l + c; }, 0);
    };
};
if ('object' !== typeof window) { module.exports = tStabilizer; }