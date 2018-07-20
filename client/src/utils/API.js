import axios from "axios";



export default {
    // makes a call to the stocks API using a list of company symbols
    getData: function(symbArr) {
        // types: what information to retreive
        const types  = "types=chart,logo";
        // range: how far back we want the charts to go
        const range  = "range=1d";
        // symbols: list of companies to search
        let symbols = "symbols=";
        for(let i=0;i<symbArr.length;i++){
            let symbol = symbArr[i];
            if (i !== (symbArr.length - 1)){
                symbol += ","
            }
            symbols += symbol;
        }
        return axios.get(
            "https://api.iextrading.com/1.0/stock/market/batch?" + 
            symbols+"&"+types+"&"+range
        );
    },

    // retreive symbol logo (if logo exists, then company exists)
    searchSymbol: function(symbol) {
        console.log(symbol);
        return axios.get(
            "https://api.iextrading.com/1.0/stock/"+symbol+"/logo"
        );
    },


};

// example API.search use
// API.getData(["aapl"]).then(res=>{
//     console.log("API::getData::SUCCESS");
//     console.log(res);
//   }).catch(error=>{
//     console.log("API::getData::FAIL");
//     console.log("INVALID COMPANY SYMBOL");  
//   });
  
//   API.searchSymbol("aapl").then(res=>{
//     console.log("API::SearchSymbol::SUCCESS");
//     console.log(res);
//   }).catch(error=>{
//     console.log("API::SearchSymbol::FAIL");
//     console.log("INVALID COMPANY SYMBOL");
//   });
//   ;
  