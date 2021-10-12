class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name != 'Full Coverage' && this.products[i].name != 'Special Full Coverage') {
        if (this.products[i].price > 0) {
          if (this.products[i].name != 'Mega Coverage') {
            if (this.products[i] instanceof NewProducts)
              this.products[i].newInsuranceData();
            else
              this.products[i].price = this.products[i].price - 1;
          }
        }
      } else {
        if (this.products[i].price < 50) {
          this.products[i].price = this.products[i].price + 1;
          if (this.products[i].name == 'Special Full Coverage') {
            if (this.products[i].sellIn < 11) {
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1;
              }
            }
            if (this.products[i].sellIn < 6) {
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1;
              }
            }
          }
        }
      }
      
      if (this.products[i].name != 'Mega Coverage') {
          this.products[i].sellIn = this.products[i].sellIn - 1;        
      }
      if (this.products[i].sellIn < 0) {
        if (this.products[i].name != 'Full Coverage') {
          if (this.products[i].name != 'Special Full Coverage') {
            if (this.products[i].price > 0) {
              if (this.products[i].name != 'Mega Coverage') {
                if (this.products[i] instanceof NewProducts)
                  this.products[i].newInsuranceData();
                else
                  this.products[i].price = this.products[i].price - 1;
              }
            }
          } else {
            this.products[i].price = this.products[i].price - this.products[i].price;
          }
        } else {
          if (this.products[i].price < 50) {
            this.products[i].price = this.products[i].price + 1;
          }
        }
      }    
    }

    return this.products;
  }
}
 
class NewProducts extends Product {
  constructor(name, sellIn, price, rules = {}){
    super(name, sellIn, price);
    this.rules = rules;    
  }

  newInsuranceData(){

    if (this.price > 0){
      if (this.price <= 50 || this.rules['legendary']) {
        if(this.name == 'Super Sale'){
          if(this.price >=1){
            this.price = this.price - 2;
            if (this.price < 0 || this.sellIn <= 0)
              this.price = 0;
          }
        }
        else{
          if (!this.rules['legendary']){
            if (this.rules['increasePrice']){
              this.price = this.price + this.rules['amountPerDay'];
              if (this.price >= 50)
                this.price = 50;
              if (this.sellIn <= 0)
                this.price = 0;
            }
            else{
              if (this.rules['specialDays']){
                for (let i = 0; i < this.rules['specialDays'].length; i ++){
                  if (!this.rules['staticPrice']){
                    this.rules['staticDay'] = this.rules['specialDays'][i]['day'];
                    this.rules['staticPrice'] = this.rules['specialDays'][i]['price'];
                    if (this.sellIn <= this.rules['staticDay']){
                      this.price = this.price + this.rules['staticPrice'];
                      if (this.price >= 50)
                        this.price = 50;
                      if (this.sellIn <= 0)
                        this.price = 0;
                      break;
                    }
                    else{
                      this.price = this.price - 1;
                      this.rules['specialDays'].shift(); 
                      break;
                    }
                  }
                  else{
                    if (this.sellIn <= this.rules['staticDay']){
                      this.price = this.price + this.rules['staticPrice'];
                      if (this.rules['specialDays'][i]['day'] == this.sellIn){
                        this.rules['staticDay'] = this.rules['specialDays'][i]['day'];
                        this.rules['staticPrice'] = this.rules['specialDays'][i]['price'];
                        this.rules['specialDays'].shift(); 
                      }
                      if (this.price >= 50)
                        this.price = 50;
                      if (this.sellIn <= 0)
                        this.price = 0;
                      break;
                    }
                    else{
                      this.price = this.price - 1;
                      break;
                    }
                  }
                  
                }
                if (this.sellIn < 1 && this.rules['specialDays'].length == 0){
                  this.price = 0;
                }
              }
              else{
                if (this.rules['minusByDay']){
                  this.price = this.price - this.rules['minusByDay'];
                  if (this.price <= 0)
                    this.price = 0;
                }
                else
                  if (this.price > 1)
                    this.price = this.price - 1;
              }
            }
          }
          else
            this.price = this.rules['legendaryPrice']
        }
      }
    }
  }
}


module.exports = {
  Product,
  CarInsurance,
  NewProducts
}
