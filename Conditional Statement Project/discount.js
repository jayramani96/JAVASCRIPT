function calculatediscount(price) {
    if (price >= 100) {
      return 20;
    } else if (price >= 50) {
      return 10;
    } else if (price < 50) {
      return 0;
    }
  }
  
  const price = 50;
  const discount = calculatediscount(price);
  console.log(`The discount  on ${price}  is: ${discount}%`);