import React, { useState } from "react";

//INTERNAL IMPORT
import {
  Header,
  UserProfile,
  Footer,
  Profile,
  ERC20,
  Transfer,
} from "../Components/index";
import { useStateContext } from "../Context/index";
const create = () => {
  const [active, setActive] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const {
    createERC20,
    getAllERC20TokenListed,
    getUserERC20Tokens,
    getAllDonation,
    fee,
    address,
    balance,
    widthdrawFund,
    donateFund,
    mainBalance,
    transferNativeToken,
    nativeToken,
  } = useStateContext();
  return(
    <div>
     <Header />
     {active && <ERC20 setActive={setActive} createERC20={createERC20} />}
     {transfer && (
      <Transfer
        setTransfer={setTransfer}
        transferNativeToken={transferNativeToken}
        />
     )}
     <main>
       <UserProfile />
       <Profile
      nativeToken={nativeToken}
      transferNativeToken={transferNativeToken}
      mainBalance={mainBalance}
      getAllDonation={getAllDonation}
      widthdrawFund={widthdrawFund}
      balance={balance}
      getAllERC20TokenListed={getAllERC20TokenListed}
      getUserERC20Tokens={getUserERC20Tokens}
      setActive={setActive}
      setTransfer={setTransfer}
      address={address}
      fee={fee}
      createERC20={createERC20}
      donateFund={donateFund} 
      />
  </main>
  <Footer />
  </div>
  );
};

export default create;
