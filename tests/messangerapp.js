const anchor = require('@project-serum/anchor');

describe('mycalculatordapp',()=>{
anchor.setProvider(anchor.Provider.env());

it('is initialized!',async ()=>{
    const program = anchor.workspace.Mycalculatordapp;
    const tx = await program.rpc.initialize();
    console.log("Your transaction signature",tx);
});
});