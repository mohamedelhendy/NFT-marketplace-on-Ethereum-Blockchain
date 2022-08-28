pragma solidity >=0.5.0 <0.6.0;
pragma experimental ABIEncoderV2;

import "./nftOwnership.sol";


contract nftMarketplace is nftOwnership {

  modifier availible(uint256 _NFTListId){
    require(ListedToCancelled[_NFTListId] == false && ListedToSold[_NFTListId] == false );
    _;
  }
  modifier owner(uint256 _NFTId){
    require(NFTToOwner[_NFTId] == msg.sender,"only owner can do this");
    _;
  }
  modifier stillAvailible(uint256 _NFTListId){
    require(now <forSaleNFT[_NFTListId].listedTill);
    _;
  }
  event newList(string name,uint minBid,uint buyNow,uint duration);

  struct itemForSale{
    NFTitem NFT;
    uint256 duration;
    uint buyNow;
    uint256 listedTill;
  } 

  struct  bid{
    address bidder;
    uint bidTime;
    uint biddedAmount;
 }

   itemForSale[] forSaleNFT;
  mapping (uint => address) public NFTAuctionToOwner;
  mapping (address => uint) NFTAuctionCount;
  mapping (uint => bid[]) bidHistory;
  mapping (uint =>uint) public minBid;
  mapping ( uint => uint) public getNFTidByNFTListedId;
  mapping (uint =>bool) public ListedToCancelled;
  mapping (uint =>bool) public ListedToSold;

function _listNFT(uint256 _NFTid,uint256 _minBid,uint256 _duration,uint256  _buyNow) owner(_NFTid) public {   
    uint256 _listedTill  = now + (_duration*86400); 
    NFTitem memory _NFT =NFTs[_NFTid];
    uint id = forSaleNFT.push(itemForSale(_NFT,_duration,_buyNow,_listedTill)) - 1;
    NFTAuctionToOwner[id] = msg.sender;
    NFTAuctionCount[msg.sender] = NFTAuctionCount[msg.sender].add(1);
    minBid[id] =_minBid;
    ListedToCancelled[id]=false;
    ListedToSold[id]=false;
    emit newList(NFTToName[_NFTid],_minBid,_buyNow,_duration);
    getNFTidByNFTListedId[id] = _NFTid;
  }


  function _makeBid (uint256 _NFTListId,uint _bid,address _bidder) availible(_NFTListId) stillAvailible(_NFTListId) external{
   require(msg.sender != address(0));
   require (_bid > minBid[_NFTListId] && _bid<forSaleNFT[_NFTListId].buyNow);
      minBid[_NFTListId] =_bid;
     bidHistory[_NFTListId].push(bid(_bidder,now,_bid));
  }

   function _buyNow (uint256 _NFTListId,address payable _bidder) availible(_NFTListId) stillAvailible(_NFTListId) external payable{
     require(msg.sender != address(0));
      require(msg.value >= forSaleNFT[_NFTListId].buyNow );
      uint256 NFTid = getNFTidByNFTListedId[_NFTListId];
      address payable owner =NFTToOwner[NFTid];
      owner.transfer(forSaleNFT[_NFTListId].buyNow);
      _transfer(owner,_bidder,NFTid);
     bidHistory[_NFTListId].push(bid(_bidder,now,forSaleNFT[_NFTListId].buyNow));
     ListedToSold[_NFTListId] = true;
  }

  

   function getListedNFTsByOwner(address _owner) external view returns(uint[] memory) {
    uint[] memory result = new uint[](NFTAuctionCount[_owner]);
    uint counter = 0;
    for (uint i = 0; i < forSaleNFT.length; i++) {
      if (NFTAuctionToOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }

   function getNFTsByOwner(address _owner) external view returns(uint[] memory) {
    uint[] memory result = new uint[](NFTCount[_owner]);
    uint counter = 0;
    for (uint i = 0; i < NFTs.length; i++) {
      if (NFTToOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }

  //function cancelNFT(_NFTListId) availible(_NFTListId) stillAvailible(_NFTListId) external{}



  function _viewListedNFTs()public view returns(itemForSale[] memory) {
    return forSaleNFT;
  }

  function _viewAuctionHistory(uint256 _NFTListId)public view returns(bid[] memory) {
    itemForSale memory requiredNFT =forSaleNFT[_NFTListId];
   // return requiredNFT.history;
   return bidHistory[_NFTListId];
  }


  function _auctionended(itemForSale memory _ListedNFT) internal view returns (bool) {
      return (_ListedNFT.listedTill <= now);   
  }

   function _viewmyListedNFTs()external view returns(itemForSale[] memory) {
    itemForSale[] memory result = new itemForSale[](NFTAuctionCount[msg.sender]);
    uint counter = 0;
    for (uint i = 0; i < forSaleNFT.length; i++) {
      if (NFTAuctionToOwner[i] == msg.sender) {
        result[counter] = forSaleNFT[i];
        counter++;
      }
    }
    return result;
  }


  function _searchListedByName(string calldata _name) external view returns(itemForSale memory){
    for (uint i = 0; i < forSaleNFT.length; i++) {
      if (keccak256(abi.encodePacked(NFTToName[getNFTidByNFTListedId[i]])) == keccak256(abi.encodePacked(_name))) {
        return forSaleNFT[i];
      }
  }
  }




  }/// checking if  auction ended  //  search  */


