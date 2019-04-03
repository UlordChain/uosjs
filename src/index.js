
import Uos from "index"

class bull{
    constructor(){

        this.CHAINID = "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473";
        this.RPC_HOST = "jungle2.cryptolions.io"
        this.RPC_PORT = "80"
        this.RPC_PROTO = "http"
        this.HTTPRPC = RPC_PROTO + "://" +  RPC_HOST + ":" + RPC_PORT;
        this.TRANSFER_CONTRACT = "eosio.token";
        this.FromAccount = "test12121212";
        this.ToAccount = "bullfighting";
    }


    QUERY_OPTIONS(){
        return {
            httpEndpoint   : this.HTTPRPC,
            expireInSeconds: 60,
            broadcast      : true,
            debug          : false,
            sign           : false
        };
    }

    NetWork(){

        return {
            blockchain: "eos",
            host: this.RPC_HOST,
            port: this.RPC_PORT,
            protocol: this.RPC_PROTO,
            chainId: this.CHAINID
        }

    }

    

    Test() {
        console.log("tag","ok")
            return new Promise(function(resolve, reject){
                const uos = Uos(QUERY_OPTIONS());
                uos.getTableRows({
                    code:TRANSFER_CONTRACT,
                    scope:this.FromAccount,
                    table:"accounts",
                    json:true
                }).then(result=>{
                    for(var idx = 0; idx < result.rows.length; idx ++){
                            var balance = result.rows[idx].balance;
                            var spts = balance.split(" ");
                            //if(spts[1] == "UOS"){
                                console.log("test_checkAccount",result.rows[idx])
                            // }
                        }
                })
        });

    }



}


// module.export = bull;

export default bull;
