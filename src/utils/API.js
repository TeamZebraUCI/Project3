import axios from "axios";
export default {
  search: function(symbArr) {
    let symbols = "symbols=";
    for(let i=0;i<symbArr.length;i++){
        let symbol = symbArr[i];
        if (i !== (symbArr.length - 1)){
            symbol += ","
        }
        symbols += symbol;
      }
    const types  = "types=chart,logo";
    const range  = "range=1d";
    return axios.get(
        "https://api.iextrading.com/1.0/stock/market/batch?" + 
            symbols+"&"+types+"&"+range
        );
  }
};
