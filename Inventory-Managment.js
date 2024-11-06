class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOfStock = [];
  }

  addItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    if (this.items.length >= this.capacity) {
      throw new Error("The inventory is already full.");
    }

    const item = this.items.find((item) => item.name === itemName);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ name: itemName, quantity: quantity });
    }

    return `Added ${quantity} ${itemName}(s) to the inventory.`;
  }

  sellItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const item = this.items.find((item) => item.name === itemName);
    if (!item) {
      throw new Error(
        `The item ${itemName} is not available in the inventory.`
      );
    }

    if (item.quantity < quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }

    item.quantity -= quantity;

    if (item.quantity === 0) {
      this.items = this.items.filter((i) => i.name !== itemName);
      this.outOfStock.push(itemName);
    }

    return `Sold ${quantity} ${itemName}(s) from the inventory.`;
  }

  restockItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const item = this.items.find((item) => item.name === itemName);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ name: itemName, quantity: quantity });
    }

    // Remove from outOfStock if it's restocked
    const outOfStockIndex = this.outOfStock.indexOf(itemName);
    if (outOfStockIndex !== -1) {
      this.outOfStock.splice(outOfStockIndex, 1);
    }

    return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
  }

  getInventorySummary() {
    let summary = "Current Inventory:\n";
    summary += this.items
      .map((item) => `${item.name}: ${item.quantity}`)
      .join("\n");

    if (this.outOfStock.length > 0) {
      summary += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
    }

    return summary;
  }
}

// Example usage
const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
