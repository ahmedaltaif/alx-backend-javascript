// Import required modules
const request = require("request");
const { describe, it } = require("mocha");
const expect = require("chai").expect;

// Test suite for the index page
describe("Index page", function() {
    const options = {
        url: "http://localhost:7865/",
        method: "GET"
    };

    // Test for checking the correct status code
    it("check correct status code", function(done) {
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    // Test for checking the correct response content
    it("check correct content", function(done) {
        request(options, function(err, res, body) {
            expect(body).to.equal("Welcome to the payment system");
            done();
        });
    });
});

// Test suite for the cart page
describe("Cart page", function() {
    
    // Test for correct status code when cart ID is valid
    it("check correct status code for correct url", function(done) {
        request.get("http://localhost:7865/cart/12", function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    // Test for correct content when cart ID is valid
    it("check correct content for correct url", function(done) {
        request.get("http://localhost:7865/cart/12", function(err, res, body) {
            expect(body).to.equal("Payment methods for cart 12");
            done();
        });
    });

    // Test for correct status code when cart ID is invalid (non-numeric)
    it("check correct status code for incorrect url", function(done) {
        request.get("http://localhost:7865/cart/kim", function(err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});

// Test suite for the available payments page
describe("Available_payments page", function() {
    
    // Test for correct status code for the available payments URL
    it("check correct status for correct url", function() {
        request.get("http://localhost:7865/available_payments", (err, res, body) => {
            if (err) {
                expect(res.statusCode).to.not.equal(200);
            } else {
                expect(res.statusCode).to.equal(200);
            }
        });
    });

    // Test for correct body content for available payments
    it("check correct body content for correct url", function() {
        const option = { json: true };  // Parse response as JSON
        const payLoad = {
            payment_methods: {
                credit_cards: true,
                paypal: false
            }
        };
        request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
            if (err) {
                expect(res.statusCode).to.not.equal(200);
            } else {
                expect(body).to.deep.equal(payLoad);
            }
        });
    });
});

// Test suite for the login page
describe("Login", function() {
    
    // Test for correct status code when a valid login request is sent
    it("check correct status code for request that's sent properly", function(done) {
        const opt = {
            url: "http://localhost:7865/login",
            json: true,  // Send body as JSON
            body: {
                userName: 'JOE'
            }
        };
        request.post(opt, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    // Test for correct content when a valid login request is sent
    it("check correct content for request that's sent properly", function(done) {
        const opts = {
            url: "http://localhost:7865/login",
            json: true,  // Send body as JSON
            body: {
                userName: 'JOE'
            }
        };
        request.post(opts, function(err, res, body) {
            if (err) {
                expect(res.statusCode).to.not.equal(200);
            } else {
                expect(body).to.contain('Welcome JOE');
            }
            done();
        });
    });

    // Test for correct status code when an invalid login request is sent (wrong field)
    it("check correct status code for request that's not sent properly", function(done) {
        const op = {
            url: "http://localhost:7865/login",
            json: true,  // Send body as JSON
            body: {
                usame: 'JOE'  // Incorrect field name
            }
        };
        request.post(op, function(err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
