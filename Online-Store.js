describe("Online Store Tests", function() {
    
    describe("isProductAvailable", function() {
        it("should return 'out of stock' message when stockQuantity is 0 or less", function() {
            expect(onlineStore.isProductAvailable("Laptop", 0)).to.equal("Sorry, Laptop is currently out of stock.");
            expect(onlineStore.isProductAvailable("Phone", -1)).to.equal("Sorry, Phone is currently out of stock.");
        });

        it("should return 'available for purchase' message when stockQuantity is greater than 0", function() {
            expect(onlineStore.isProductAvailable("Laptop", 10)).to.equal("Great! Laptop is available for purchase.");
        });

        it("should throw an error if product is not a string or stockQuantity is not a number", function() {
            expect(() => onlineStore.isProductAvailable(123, 10)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable("Laptop", "ten")).to.throw("Invalid input.");
        });
    });

    describe("canAffordProduct", function() {
        it("should return insufficient funds message if accountBalance is less than productPrice", function() {
            expect(onlineStore.canAffordProduct(100, 50)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it("should return remaining balance message if accountBalance is greater than or equal to productPrice", function() {
            expect(onlineStore.canAffordProduct(50, 100)).to.equal("Product purchased. Your remaining balance is $50.");
            expect(onlineStore.canAffordProduct(100, 100)).to.equal("Product purchased. Your remaining balance is $0.");
        });

        it("should throw an error if productPrice or accountBalance is not a number", function() {
            expect(() => onlineStore.canAffordProduct("fifty", 100)).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct(50, "one hundred")).to.throw("Invalid input.");
        });
    });

    describe("getRecommendedProducts", function() {
        it("should return recommended products for a valid category", function() {
            const productList = [
                { name: "Camera", category: "Photography" },
                { name: "Laptop", category: "Electronics" },
                { name: "Lens", category: "Photography" }
            ];
            expect(onlineStore.getRecommendedProducts(productList, "Photography")).to.equal("Recommended products in the Photography category: Camera, Lens");
        });

        it("should return no recommended products message if no products match the category", function() {
            const productList = [
                { name: "Camera", category: "Photography" },
                { name: "Laptop", category: "Electronics" }
            ];
            expect(onlineStore.getRecommendedProducts(productList, "Toys")).to.equal("Sorry, we currently have no recommended products in the Toys category.");
        });

        it("should throw an error if productList is not an array or category is not a string", function() {
            expect(() => onlineStore.getRecommendedProducts("not an array", "Photography")).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts([], 123)).to.throw("Invalid input.");
        });
    });
});