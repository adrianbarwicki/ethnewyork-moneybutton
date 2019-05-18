import * as contractInstance from "./contractProvider";

export const voteStuff = async (contentId: string) => {
  console.log("Voting stuff");

  /**
   * This will send Ether to a smart contract responsible for upvote distribution.
   */
  const res = await contractInstance
    .get()
    .methods
    .vote(
      /**add here some content ID (maybe?) */
      contentId
    )
    .call({
      from: contractInstance.getDefaultAddress()
    });

  // @todo what do we return? Consult Nagy
  console.log(res);
  
  return res.toString();
};