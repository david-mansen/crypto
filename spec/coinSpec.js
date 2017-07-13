"use strict";

// the DIRECTORY has to be named 'spec' for jasmine to know it's a test directory **

// the FILE has to have 'Spec' in the file name for jasmine to to know it's a test file **


var multiply = function (x, y) {
    if (typeof x !== "number" || typeof y !== "number"){
        throw new Error("x or y is not a number");
    }
    else return x * y

};

discribe("Multiply", function () {
    it("should multiply properly when passed numbers", function () {
        expect(multiply(2, 4)).toEqual(8);
        expect(multiply(2, 3)).toEqual(6);
    });

    it("should throw when not passed numbers", function () {
        expect(function () {
            multiply(2, "4");
        }).toThrowError("x or y is not a number.");

        expect(function () {
            multiply(2, true);
        }).toThrowError("x or y is not a number.");
    });
});
