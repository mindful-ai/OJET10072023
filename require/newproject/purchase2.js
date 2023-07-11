require.config({
  baseUrl: "./scripts", 
  paths: { c2:"./credit2",
           cdn4jquery: "cdn"}
})


define(["c2","./product2", "cdn4jquery"], function(credits,products, $) {

    console.log("Function : purchaseProduct");
    return {
        
        purchaseProduct: function() {
              
                var credit = credits.getCredits();
                this.incrpoints();
                if(credit > 0){
                  products.reserveProduct();
                  return true;
        };
        return false;
      }
    }
  });