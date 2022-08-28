pragma solidity >=0.5.0 <0.6.0;

import "./nftOwnership.sol";

contract nftMarketplaceHelper is nftOwnership {


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

 

  /*
  function _transfer(address _from, address _to, uint256 _tokenId) private {
    require(NFTToOwner[_tokenId] = _from;)
    NFTCount[_to]++;
    NFTCount[_from]--;
    NFTToOwner[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
  }
  */
}