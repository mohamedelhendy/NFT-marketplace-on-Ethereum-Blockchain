	const IPFS=require('ipfs-http-client');
	const fs = require('fs-web')
	var URI= "https://ipfs.io/ipfs/";

	async function add(data){
	const ipfs = await IPFS.create("https://ipfs.infura.io:5001/api/v0");	
	let added = await ipfs.add(data)
	return(added.path);
}


var abi =[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minBid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "buyNow",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "newList",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "NFTType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "collection",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "royality",
				"type": "bool"
			}
		],
		"name": "newNFT",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListedToCancelled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListedToSold",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NFTAuctionToOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NFTListIdtoWinnedbid",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "bidder",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "bidTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "biddedAmount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NFTToName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NFTs",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "NFTType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Category",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "collection",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isRoyality",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NftIdToRentId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NFTListId",
				"type": "uint256"
			}
		],
		"name": "_auctionended",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NFTListId",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_bidder",
				"type": "address"
			}
		],
		"name": "_buyNow",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_uri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_NFTType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_category",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_collection",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_royality",
				"type": "bool"
			}
		],
		"name": "_createNFT",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "_getIdByName",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NFTid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minBid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_buyNow",
				"type": "uint256"
			}
		],
		"name": "_listNFT",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NFTid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minBid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_buyNow",
				"type": "uint256"
			}
		],
		"name": "_listagain",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NFTListId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_bid",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_bidder",
				"type": "address"
			}
		],
		"name": "_makeBid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NFTId",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_renter",
				"type": "address"
			}
		],
		"name": "_rentMyNft",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_category",
				"type": "string"
			}
		],
		"name": "_searchByCategory",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "uri",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "NFTType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Category",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "collection",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isRoyality",
						"type": "bool"
					}
				],
				"internalType": "struct NFT.NFTitem",
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "_searchByName",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "uri",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "NFTType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Category",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "collection",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isRoyality",
						"type": "bool"
					}
				],
				"internalType": "struct NFT.NFTitem",
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "_transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NFTListId",
				"type": "uint256"
			}
		],
		"name": "_viewAuctionHistory",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "bidder",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "bidTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "biddedAmount",
						"type": "uint256"
					}
				],
				"internalType": "struct nftMarketplace.bid[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_viewCreatedNFTs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "uri",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "NFTType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Category",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "collection",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isRoyality",
						"type": "bool"
					}
				],
				"internalType": "struct NFT.NFTitem[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_viewListedNFTs",
		"outputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "address payable",
								"name": "creator",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "uri",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "NFTType",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "Category",
								"type": "string"
							},
							{
								"internalType": "bool",
								"name": "collection",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "isRoyality",
								"type": "bool"
							}
						],
						"internalType": "struct NFT.NFTitem",
						"name": "NFT",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "duration",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "buyNow",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "listedTill",
						"type": "uint256"
					}
				],
				"internalType": "struct nftMarketplace.itemForSale[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NFTId",
				"type": "uint256"
			}
		],
		"name": "_viewRentedNftStatus",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_viewRentedNftStatusoutput",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_viewmyNFTs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "uri",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "NFTType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Category",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "collection",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isRoyality",
						"type": "bool"
					}
				],
				"internalType": "struct NFT.NFTitem[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_viewrentedNFTs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "renter",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "NFTid",
						"type": "uint256"
					}
				],
				"internalType": "struct nftRoyalty.rent[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getListedNFTsByOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "getNFTidByNFTListedId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getNFTsByOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NFTId",
				"type": "uint256"
			}
		],
		"name": "getpaid",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "minBid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NFTListId",
				"type": "uint256"
			}
		],
		"name": "payBid",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rentIdToViews",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
if(typeof web3 !== "undefined"){
  web3=new Web3(ethereum);
  console.log(web3.eth.accounts);
  var address ="0x189B6075372046889b4ba9d98973729328f2e290" ;
  var contract =new web3.eth.Contract(abi,address);
  console.log(contract);
  
  


}else{
 web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}


async function handleData(evt){
var imago = (evt.target.files[0]);
let Hamada= await add(imago);
console.log(Hamada)
URI = URI + Hamada
return imago;
}

document.getElementById("myFile").addEventListener('change',handleData,false);

async function makeNft(){
	//const node = await IPFS.create();
	let name=document.getElementById("name-fc26").value;
	let mail=document.getElementById("email-fc26").value;
	let category=document.getElementById("select-5aaa").value;
	let collection=document.getElementById("checkbox-06a5");
	let royalty=document.getElementById("checkbox-2ff1");
	if(collection.checked){
		collection=true;
	}else{
		collection=false;
	}
	if(royalty.checked){
		royalty=true;
	}else{
		royalty=false;
	}
	

	
	console.log(collection,royalty);

	console.log(URI,name,mail,category,collection,royalty);
	
  
	
  
  const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
  const account =accounts[0];
  console.log(account)
  var tx =await contract.methods._createNFT( URI , name , mail , category , collection,royalty).send({
	from:account,
  });

}

const form=document.getElementById("nftMake");
form.addEventListener("submit",(event) => {
	event.preventDefault();	
	makeNft();

});






