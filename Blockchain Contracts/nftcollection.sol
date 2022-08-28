pragma solidity >=0.5.0 <0.6.0;
pragma experimental ABIEncoderV2;

import "./safemath.sol";
contract NFTCollection{
  using SafeMath for uint256;
  using SafeMath32 for uint32;
  using SafeMath16 for uint16;


    struct NFTCollection{
      address payable creator;
      address payable ownerOfNFT ;
      string uri;
      string name;
      string NFTType;
      string Category;
    }

  NFTCollection[]  NFTCollections;

  mapping (uint => address) public NFTCollectionToOwner;
  mapping (address => uint) NFTCollectionCount;

 function _createNFTCollection(string memory _uri,string memory _name,string memory _NFTType,string memory _category) internal {   
    //check used names?
    require(msg.sender != address(0));
    uint id = NFTCollections.push(NFTCollection(msg.sender,msg.sender,_uri,_name,_NFTType,_category)) - 1;
    NFTCollectionToOwner[id] = msg.sender;
    NFTCollectionCount[msg.sender] = NFTCollectionCount[msg.sender].add(1);
    //emit NewNFT(id,uri);
  }
  function _viewCreatedCollections()external view returns(NFTCollection[] memory) {
    return NFTCollections;
  }



}