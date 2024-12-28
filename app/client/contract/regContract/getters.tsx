import { JoinersResult, TeamDataInterface, UserData } from '../../interface/interface';
import { InitEthereumWeb3 } from '../../web3/web3';
import { regContract } from '../contracts/regContract';
import { EventLog } from 'web3';


export const getUserData = async (userAddress: string) => {
  try {
    const web3Data = await initWeb3();
    let contract;

    if (!web3Data.success) {
      return { success: false, response: 'Failed to initialize Ethereum web3' };
    }

    if (typeof web3Data.response !== 'string') {
      contract = web3Data.response.regContractInstance;
    }

    const userData : UserData = await contract!.methods.users(userAddress).call();
    if (userData) {
      return { success: true, response: userData };
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      success: false,
      response: `Error: ${error || 'Failed to get user data'}`,
    };
  }
};

export const IsRegistered = async (userAddress: string) => {
  try {
    const web3Data = await initWeb3();
    let contract;
    if (!web3Data.success) {
      return { success: false, response: 'Failed to initialize Ethereum web3' };
    }
    if (typeof web3Data.response !== 'string') {
      contract = web3Data.response.regContractInstance;
    }
    const isRegistered = await contract!.methods
      .isRegistered(userAddress)
      .call();
    if (isRegistered) {
      return { success: true, response: isRegistered };
    }
  } catch (error) {
    console.error('Error checking if user is registered:', error);
    return {
      success: false,
      response: `Error: ${error || 'Failed to check user registration'}`,
    };
  }
};



export const GetDirectDownlines = async (userAddress: string) => {
  try {
    const web3Data = await initWeb3();
    let contract;
    if (!web3Data.success) {
      return { success: false, response: 'Failed to initialize Ethereum web3' };
    }
    if (typeof web3Data.response !== 'string') {
      contract = web3Data.response.regContractInstance;
    }
    const directs : string [] = await contract!.methods
      .getDirectDownlines(userAddress)
      .call();
    if (directs) {
      return { success: true, response: directs };
    }
  } catch (error) {
    console.error('Error checking directs :', error);
    return {
      success: false,
      response: `Error: ${error || 'Failed to check user directs'}`,
    };
  }
};



export const getUserTeamData = async (userAddress: string) => {
  try {
    const web3Data = await initWeb3();
    let contract;

    if (!web3Data.success) {
      return { success: false, response: 'Failed to initialize Ethereum web3' };
    }

    if (typeof web3Data.response !== 'string') {
      contract = web3Data.response.regContractInstance;
    }
   let teamData : TeamDataInterface = {
    directDownlinesCount : 0 ,
    teamSize : 0 ,
    directDownlinesArray : []
   }

    const directDownlinesCount : number = await contract!.methods.directDownlinesCount(userAddress).call();
    if (directDownlinesCount) {
      teamData.directDownlinesCount = directDownlinesCount
      for (let i = 0; i < teamData.directDownlinesCount; i ++) {
        const currentDownline : string = await contract!.methods.directDownlines(userAddress, i).call();
        if (currentDownline) {
          teamData.directDownlinesArray.push(currentDownline)
        }

      }
    }
    const teamSize : number = await contract!.methods.getTotalTeamSize(userAddress).call();
    if (teamSize) {
      teamData.teamSize = teamSize
    }

    return { success: true, response: teamData };
    
   
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      success: false,
      response: `Error: ${error || 'Failed to get user data'}`,
    };
  }
};



export const NumberOfUsers = async () => {
  try {
    const web3Data = await initWeb3();
    let contract;
    if (!web3Data.success) {
      return { success: false, response: 'Failed to initialize Ethereum web3' };
    }
    if (typeof web3Data.response !== 'string') {
      contract = web3Data.response.regContractInstance;
    }
    const NumberOfUsers : number= await contract!.methods
      .NumberOfUsers()
      .call();
    if (NumberOfUsers) {
      return { success: true, response: NumberOfUsers };
    } else {
      return { success: false, response: 'User not found' };
    }
  } catch (error) {
    console.error('Error checking  NumberOfUsers:', error);
    return {
      success: false,
      response: `Error: ${error || 'Failed to get NumberOfUsers'}`,
    };
  }
};
export const AddressById = async (id: number) => {
  try {
    const web3Data = await initWeb3();
    let contract;
    if (!web3Data.success) {
      return { success: false, response: 'Failed to initialize Ethereum web3' };
    }
    if (typeof web3Data.response !== 'string') {
      contract = web3Data.response.regContractInstance;
    }
    const address : string = await contract!.methods
      .countIdToAddress(id)
      .call();
    if (address) {
      return { success: true, response: address };
    } else {
      return { success: false, response: 'User not found' };
    }
  } catch (error) {
    console.error('Error checking if user address:', error);
    return {
      success: false,
      response: `Error: ${error || 'Failed to check user address'}`,
    };
  }
};


export const get24hoursTeamData = async (address : string)=> {
  try {
    const web3Data = await initWeb3();
    let contract;
    if (!web3Data.success) {
      return { success: false, response: 'Failed to initialize Ethereum web3' };
    }
    if (typeof web3Data.response !== 'string') {
      contract = web3Data.response.regContractInstance;
    }

    const directTeam24Result =  await contract?.methods.getDirectJoinersIn24Hours(address).call()
    const totalTeam24Hours = await contract?.methods.getTotalJoinersIn24Hours(address).call()

    const joinersResult : JoinersResult = {
      direct : Number(directTeam24Result),
      total : Number(totalTeam24Hours)
    }
    return { success: true, response: joinersResult };

    
  } catch (error) {
    console.error('Error getting 24 hours team data:', error);
    return { success: false, response: `Error: ${error || 'Failed to get 24 hours team data'}`, };
    
  }
}



export const GetLastEvents = async () => {
  try {
      const init = await initWeb3();
      let contract 
      let web3

      if (init.success) {
          if (typeof init.response !== "string") {
             contract = init.response.regContractInstance
             web3 = init.response.web3
          }

      }
    console.log("Web3 initialized successfully", web3);
    console.log("MainContract instance created: ", contract);

    if (!contract) throw new Error("Failed to create contract instance");

    const latestBlock = Number(await web3?.eth.getBlockNumber());
    console.log("Latest block: ", latestBlock);

    const fromBlock = latestBlock - 3000 >= 0 ? latestBlock - 3000 : 0;

    const eventResponse = await contract.getPastEvents("allEvents", {
      fromBlock: fromBlock, 
      toBlock: 'latest',
    });
    let events : EventLog [] = []
    eventResponse.forEach((event)=> {
      if (typeof event !== "string") {
          events.push(event) 
      }

    } )
   
    if (events && events.length > 0) {
      console.log(`Found ${events.length} events: `, events);
      return {success : true , response : events}; 
    } else {
      console.log("No events found.");
      return {success : false , response :"No events found." };
    }

  } catch (error) {
    console.error("An error occurred while fetching contract events:", error);
    return {success : false , response : error as string };
  }
};

const initWeb3 = async () => {
  try {
    const web3Response = await InitEthereumWeb3();
    const web3 = web3Response.response;
    if (!web3) {
      return { success: false, response: 'Failed to initialize Ethereum web3' };
    }

    const regContractInstance = new web3.eth.Contract(
      regContract.abi,
      regContract.address
    );
    if (!regContractInstance) {
      return { success: false, response: 'Failed to initialize contract' };
    }

    return { success: true, response: { regContractInstance, web3 } };
  } catch (error) {
    return {
      success: false,
      response: `Error: ${error || 'Failed to initialize contract'}`,
    };
  }
};
