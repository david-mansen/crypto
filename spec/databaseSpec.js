"use strict";

// the DIRECTORY has to be named 'spec' for jasmine to know it's a test directory **

// the FILE has to have 'Spec' in the file name for jasmine to to know it's a test file **

var database = require("../db/database");



describe("database", function () {
    it("should remove all vowels from lowercase strings", function () {
        expect(database("this is lowercase")).toEqual("ths s lwcs");
    });
    it("should remove all vowels from upcase strings", function () {
        expect(database("THIS IS UPCASE")).toEqual("THS S PCS");
    });
    it("should remove all vowels from mixed strings", function () {
        expect(database("this IS mixed")).toEqual("this S mxd");
    });
    it("should ignore numbers in input strings", function () {
        expect(database("this IS mixed and has 2 NUMBERS 92")).toEqual("this S mxd hs 2 NMBRS 92");
    });
    it("should cast numbers to strings", function () {
        expect(database(10971)).toEqual("10971");
    });

});

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



