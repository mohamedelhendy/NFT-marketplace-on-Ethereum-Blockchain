
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
  var address ="0x189B6075372046889b4ba9d98973729328f2e290" ;
  var contract =new web3.eth.Contract(abi,address);
}else{
 web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}


function Getid(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    return id;
}

async function viewNFT(){  
	const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
	const account =accounts[0];
	  var data =await contract.methods._viewCreatedNFTs().call();
	  var tx = parse(data);
	return (tx);
}  

async function getName(nftId){  
	const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
	const account =accounts[0];
	var tx =await contract.methods.NFTToName(nftId).call();
	return (tx);
}


 async function parse(data){
	const words = data.toString().split(',');
	let arr2 = [];
  
	for(var i = 0; i < words.length/6; i++){
		var arr = new Array(8);
		 const name =await getName(i);
		for(var j = 2; j < 8; j++){
			arr[0]=i;
			arr[1]=name
			  arr[j] = words[(i*6)+(j-2)]
	  }
	  arr2[i] = arr;
	}
	return arr2
}  

async function NftPage(){

async function getNftIdsByOwnerAdress(address){
		let data = await contract.methods.getNFTsByOwner(address).call();
		return data
}
async function setAccount(){
		const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
		const account = accounts[0];
		return account;
	  
}

async function setCurrentNFT(){
    let NftList = await viewNFT();
    return NftList[id];
}

const id=Getid();
const account =await setAccount();
const currentNft= await setCurrentNFT();

async function setImageURI(){
	document.getElementById("Name").innerHTML=currentNft[1];
    document.getElementById("NftImage").src=currentNft[3];
	document.getElementById("OwnerAddress").innerHTML +=account;
    document.getElementById("CreatorAddress").innerHTML +=currentNft[2];
    document.getElementById("Type").innerHTML+=currentNft[4];
    document.getElementById("Category").innerHTML+=currentNft[5].toString();
    document.getElementById("collection").innerHTML+=currentNft[6].toString();
    document.getElementById("ForRent").innerHTML+=currentNft[7].toString();

}
let changeImage = setImageURI()



}
 
async function parseListed(data){
    if(data.length!=0){
	const words = data.toString().split(',');
	let arr2 = [];
  //i = listed id  //parameter id = nft id   // nftid  -- list id  -- bid  - - buynow  --  duration  - - sold
	for(var i = 0; i < words.length/9; i++){
		var arr = new Array(6);
		arr[0]= await contract.methods.getNFTidByNFTListedId(i).call();
		arr[1]=i;
		arr[2] = await contract.methods.minBid(i).call(); 
		for(var j = 3; j < 5; j++){
			arr[j] = words[(i*9)+(j+3)]
	  }
	  arr[5]= await contract.methods.ListedToSold(i).call();
	  arr2[i] = arr;
	}
	
    return arr2
}
else{
    return data
}
	
} 

async function listNft(id,bid,duration,buynow){
	const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
	const account =accounts[0];
	let data2 = await  getListedNFTs();
	let found = "false"
    if(data2.length!= 0){
	for(var i =0;i<data2.length;i++){
		if(data2[i][0]==id){found = "true";}}
		if(found=="true"){
			console.log("already listed");
	}	
		else{let data = await contract.methods._listNFT(id,bid,duration,buynow).send({from:account,});}
    }else{
        console.log("no data listed")
        let data = await contract.methods._listNFT(id,bid,duration,buynow).send({from:account,});
    }
}
async function getListedNFTs(){
	let data = await contract.methods._viewListedNFTs().call();
	let data2= await parseListed(data);
	return data2
}
async function checkTime(listid){
	let data = await contract.methods._auctionended(listid).call();
	let hours = Math.floor(data/3600);
	let rem = data % 3600;
	let mins = Math.floor(rem/60);
	let secs = rem % 60; 
	let data2 = [hours,mins,secs]
	return data2;
}
async function ListNftGamd(){
    	

    let minBid =document.getElementById("MinBidHolder").value;
    let buyNow =document.getElementById("BuyNowHolder").value;
    let duration =document.getElementById("Duration").value;
    let id=Getid();

    let list=await listNft(id,minBid,duration[0],buyNow);
}

NftPage();


async function ChecklistNft(id){
	const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
	const account =accounts[0];
	let data2 = await  getListedNFTs();
	let found = "false"
    if(data2.length!= 0){
	for(var i =0;i<data2.length;i++){
		if(data2[i][0]==id){
			found = "true";
		}
		}
    }
    console.log(found)
	if(found=="true"){
		console.log("in Condition")
		var form = document.getElementById("ListForSale");
        var elements = form.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].readOnly = true;
    }
	document.getElementById("button").style.backgroundColor= "#f4511e"; 
	document.getElementById("button").disabled = true;


	}
}

async function checkTimeButton(){
	let id=Getid();

	let nftList= await getListedNFTs();
	let nftListId;
	let minBid;
	let buyNow;
	var found=false;

	for(let i=0;i<=nftList.length;i++){
		if(nftList[i] && id==nftList[i][0]){
			found=true;

			nftListId=nftList[i][1];
			minBid=nftList[i][2]
			buyNow=nftList[i][4]
			break;
		}
	}
	if(!found){
		return
	}
	let trans=1000000000000000;
	let elapsedTime=await checkTime(nftListId);
	document.getElementById("Hours").innerHTML+=elapsedTime[0];
	document.getElementById("Minutes").innerHTML+=elapsedTime[1];
	document.getElementById("Seconds").innerHTML+=elapsedTime[2];
	document.getElementById("MinBid").innerHTML+=(minBid/trans)+" Finney";
	document.getElementById("BuyNow").innerHTML+=(buyNow/trans)+" Finney";


}


const form=document.getElementById("ListForSale");
form.addEventListener("submit",async(event) => {
	event.preventDefault();	
    await ListNftGamd();

});
checkTimeButton();
ChecklistNft(Getid());





