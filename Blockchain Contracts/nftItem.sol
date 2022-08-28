pragma solidity >=0.5.0 <0.6.0;
pragma experimental ABIEncoderV2;
//import "./ownable.sol";
import "./safemath.sol";


contract NFT {
  using SafeMath for uint256;
  using SafeMath32 for uint32;
  using SafeMath16 for uint16;


    struct NFTitem{
      address payable creator;
      string uri;
      string NFTType;
      string Category;
      bool collection;
    }

  NFTitem[] public NFTs;

  mapping (uint => address payable) NFTToOwner;
  mapping (address => uint)  NFTCount;
  mapping (uint => string) NFTToName;
  event newNFT (uint id,string uri,string name ,string NFTType,string category,bool collection);

 function _createNFT(string calldata _uri,string calldata _name,string calldata _NFTType,string calldata _category,bool _collection) external {   
    bool found = false;
    for (uint i = 0; i < NFTs.length; i++) {if (keccak256(abi.encodePacked(NFTToName[i])) == keccak256(abi.encodePacked(_name))) {found = true;}}
    require(found = false,"name already used");
    require(msg.sender != address(0));
    uint id = NFTs.push(NFTitem(msg.sender,_uri,_NFTType,_category,_collection)) - 1;
    NFTToOwner[id] = msg.sender;
    NFTToName[id] = _name;
    NFTCount[msg.sender] = NFTCount[msg.sender].add(1);
    emit newNFT(id,_uri,_name,_NFTType,_category,_collection);
  }
 function _viewCreatedNFTs()external view returns(NFTitem[] memory) {
    return NFTs;
  }
  function _viewmyNFTs()external view returns(NFTitem[] memory) {
    NFTitem[] memory result = new NFTitem[](NFTCount[msg.sender]);
    uint counter = 0;
    for (uint i = 0; i < NFTs.length; i++) {
      if (NFTToOwner[i] == msg.sender) {
        result[counter] = NFTs[i];
        counter++;
      }
    }
    return result;
  }

  function _searchByName(string calldata _name) external view returns(NFTitem memory){
    for (uint i = 0; i < NFTs.length; i++) {
      if (keccak256(abi.encodePacked(NFTToName[i])) == keccak256(abi.encodePacked(_name))) {
        return NFTs[i];
      }
  }
  }

  function _searchByCategory (string calldata _category) external view returns(NFTitem memory){
    for (uint i = 0; i < NFTs.length; i++) {
      if (keccak256(abi.encodePacked(NFTs[i].Category)) == keccak256(abi.encodePacked(_category))) {
        return NFTs[i];
      }
  }
  }
  //cancel nft
}