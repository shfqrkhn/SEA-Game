// Shared pure rules. Bundled into each offline HTML with no runtime dependency.
const APP=Object.freeze({version:"3.0.0-local",ruleset:"STANDARD",deck:"synthetic-v1",rounds:7,lotsPerRound:10,bidIncrementCents:5000000});
const SEA_AUCTION=Object.freeze({
 visible(mode,currentLot,currentRevealed,lot){
  if(mode==="ROUND")return true;
  if(lot<currentLot)return true;
  if(mode==="JIT")return lot===currentLot;
  return lot===currentLot&&currentRevealed;
 }
});
