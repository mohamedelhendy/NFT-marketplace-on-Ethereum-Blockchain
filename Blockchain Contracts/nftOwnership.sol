pragma solidity >=0.5.0 <0.6.0;
pragma experimental ABIEncoderV2;
import "./erc721.sol";
import "./nftitem.sol";
//import "./nftcollection.sol";


contract nftOwnership is NFT,ERC721{
    function ownerOf(uint256 _tokenId) external view returns (address){
        return NFTToOwner[_tokenId];
    }
    function balanceOf(address _owner) external view returns (uint256) {
        return NFTCount[_owner]; 

    }
    function _transfer(address payable _from, address payable _to, uint256 _tokenId) public {
    NFTCount[_to]++;
    NFTCount[_from]--;
    NFTToOwner[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
  }


}