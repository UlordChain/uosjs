UOS接口使用说明

详情见index.html
# 注册事件
### 注册usmart事件 通过此插件获得usmart插件的准备通知
```
var usmart;
document.addEventListener('usmartLoaded', Extension => {
    usmart = window.usmart;
    if(usmart == null){
        alert("请先配置Usmart!");
        return
    }
    // TODO CODE
});
```
### 获取usmart中账户身份
```
function test_Identity(){
    usmart
        .getIdentity({ accounts: [get_new_work()] })
            .then(identity => {
            const account = identity.accounts.find(
                function(result) {
                    return result.blockchain === "uos"
            })
            // TODO CODE
            .catch(err => {
            });
        });
}
```
### 注销
```
    this.usmart.forgetIdentity();
```
# 使用API

### 查询账户信息
```
function test_getaccount(){
    const uos = Uos(get_query_options());
    uos.getAccount({account_name:FromAccount}).then(data=>{
        console.log("result");
        console.log("account",data);
    })
}
```
### 获取UOS金额
```
function  test_checkAccount(){
    const uos = Uos(get_query_options());
        uos.getTableRows({
            code:TRANSFER_CONTRACT,
            scope:par.account_name,
            table:"accounts",
            json:true
        }).then(result=>{
            for(var idx = 0; idx < result.rows.length; idx ++){
                    var balance = result.rows[idx].balance;
                    var spts = balance.split(" ");
                    if(spts[1] == "UOS"){
                        #  TODO CODE
                    }
                }
        })

}
```
### 转帐
```
function test_Pay(){
    var net=get_new_work();
    usmart
        .getIdentity({ accounts: [net] })
        .then(identity => {
            const account = identity.accounts.find(
                acc => acc.blockchain === "uos"
            );
            test_Pay2(account,net);
        })
        .catch(err => { });
}
function test_Pay2(account,net){
    var options = {
            authorization: account.name+'@'+account.authority,
            broadcast: true,
            sign: true
        }
        const usmartUOS = usmart.uos(net, Uos, options, net.protocol);
        usmartUOS.contract(TRANSFER_CONTRACT,{accounts:[net]}).then(contract => {
            test_Pay3(contract,account);
        }).catch(e => {});
}
function test_Pay3(contract,account){
        const opts = { authorization:[account.name+'@'+account.authority] };
        var memostr = "oneshot;;66"; //66 是押注的数字 其他内容 保持不变
        contract.transfer(account.name, DICE_SERVANT, "1.0000 UOS", memostr).then(trx => {
        seti("成功")
        }).catch(e => { console.error(e); });
}
```
### 投票
```
function test_tp(){
    var net=get_new_work();
    const usmartUOS = usmart.uos(net, Uos);
    usmartUOS.voteproducer(FromAccount,"1.0000 UOS","uosvegasjack",["uosvegasjack"]).then(result=>{
        # TODO CODE
    })
}
```
### 取消投票
```
function test_canvote(){
    var net=get_new_work();
    const usmartUOS = usmart.uos(net, Uos);
    usmartUOS.transaction({
        actions:[
            {
                account:"uosio",
                name:"cancelvote",
                authorization:[
                    {
                        actor:FromAccount,
                        permission:'active'
                    }
                ],data :{
                    voter:FromAccount,
                    quantity:"1.0000 UOS",
                    producers:["uosvegasjack"]
                }
            }
        ],
    }).then(result=>{
        # TODO CODE
    })
}
```
### 抵押
```
function test_dy(){
    var net=get_new_work();
    const usmartUOS = usmart.uos(net, Uos);
    usmartUOS.delegatebw(FromAccount,FromAccount,"5.0000 UOS","0.0000 UOS",0).
    then(result=>{
        # TODO CODE
    })

}
```
### 取消抵押
```
function test_undelegatebw(){
    var net=get_new_work();
    const usmartUOS = usmart.uos(net, Uos);
    usmartUOS.transaction({
        actions:[
            {
                account:"uosio",
                name:"undelegatebw",
                authorization:[
                    {
                        actor:FromAccount,
                        permission:'active'
                    }
                ],data :{
                    from:FromAccount,
                    receiver:FromAccount,
                    unstake_net_quantity:"25.0000 UOS",
                    unstake_cpu_quantity:"25.0000 UOS",
                }
            }
        ],
    }).then(result=>{
        # TODO CODE
    })
}
```












