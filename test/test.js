/**
 *
 * Created by uur on 12/10/14.
 */


var EscapeTurkish = require("..");
var expect = require("chai").expect;

describe("Escape Turkish Characters", function () {

    it(" -> check null", function() {
        expect(EscapeTurkish("")).to.equal("");
        expect(EscapeTurkish(null)).to.be.null;
    });

    it(" -> should match with equivalent of english characters", function() {
        expect(EscapeTurkish("Ğ")).to.equal("G");
        expect(EscapeTurkish("ğ")).to.equal("g");
        expect(EscapeTurkish("İ")).to.equal("I");
        expect(EscapeTurkish("ı")).to.equal("i");
        expect(EscapeTurkish("Ç")).to.equal("C");
        expect(EscapeTurkish("ç")).to.equal("c");
        expect(EscapeTurkish("Ö")).to.equal("O");
        expect(EscapeTurkish("ö")).to.equal("o");
        expect(EscapeTurkish("Ü")).to.equal("U");
        expect(EscapeTurkish("ü")).to.equal("u");
    });

    it(" -> should match with equivalent of english string", function() {
        expect(EscapeTurkish("Şşşşh")).to.equal("Ssssh");
        expect(EscapeTurkish("Türkçe İngilizce çeviri")).to.equal("Turkce Ingilizce ceviri");
    });
});