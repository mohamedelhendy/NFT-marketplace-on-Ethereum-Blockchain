async function setImageGallery(){
	let NftList= await viewNFT();
	if(NftList.length >= 0){

	for(let i=0 ; i<=6; i++){
		if(NftList[i]==null){
			return
		}
    let x=i+1;
	document.getElementById("auct"+x).src=NftList[i][3];
	document.getElementById("auct"+x+"Thumb").src=NftList[i][3];
	document.getElementById("auct"+x+"Thumb").dataset.href="NFT-template.html?id="+i;
	}
    }else{
	}
}
function getPageName(){
	var path =window.location
	var pagearr = path.toString().split('/');
	return pagearr[3];
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
  var address ="0x189B6075372046889b4ba9d98973729328f2e290" ;
  var contract =new web3.eth.Contract(abi,address);
 

}else{
 web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
async function setAccount(){
	const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
	const account = accounts[0];
	return account;
  
}

async function viewNFT(){  
	const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
	const account =accounts[0];
	  var data =await contract.methods._viewCreatedNFTs().call();
	  var tx = await parse(data);
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
async function searchCategory(category){  
	var tx =await viewNFT();
	const result = [];
	let counter = 0;
	for(var i =0;i<tx.length;i++){
		if(tx[i][5]==category){
			let arr = new Array(8);
			for(var j=0;j<8;j++){
				arr[j]=await tx[i][j];
			}
			result[counter]= arr;
			counter++;
		}
	}
	return result;
}
async function dispSearchImage(tx){
	const NftList=await tx;
	let x;
	for(let i=0 ; i<NftList.length ; i++){
		x=i+1;
		document.getElementById("img"+x).src=NftList[i][3];
		document.getElementById("Heading"+x).innerHTML=NftList[i][1];
		document.getElementById("Paragraph"+x).innerHTML=NftList[i][4];
		document.getElementById("div"+x).dataset.id=NftList[i][0];


		

		if(i==5){
			return
		}
	}
}

async function SearchMusic(){  
	var tx =searchCategory("Music");
	if(!tx){
		return
	}
	await dispSearchImage(tx);


} 
async function SearchArts(){  
	var tx =searchCategory("Arts");
	if(!tx){
		return
	}
	await dispSearchImage(tx);
	
} 
async function SearchMemes(){  
	var tx =searchCategory("Memes");
	if(!tx){
		return
	}
	await dispSearchImage(tx);
} 
async function SearchDomain(){  
	var tx =searchCategory("Domain Name");
	if(!tx){
		return
	}
	await dispSearchImage(tx);

} 
async function SearchGames(){  
	var tx =searchCategory("Games");
	if(!tx){
		return
	}
	await dispSearchImage(tx);
} 
async function SearchSports(){  
	var tx =searchCategory("Sports");
	if(!tx){
		return
	}
	await dispSearchImage(tx);
} 
async function SearchName(name){  
	var tx =await contract.methods._searchByName(name).call();
	return tx;
}
async function getIdByName(name){
	var tx =await contract.methods._getIdByName(name).call();
	return tx;
}
async function getName(nftId){  
	const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
	const account =accounts[0];
	var tx =await contract.methods.NFTToName(nftId).call();
	return (tx);
}

 if(getPageName()=='Home.html'){
	
	setImageGallery();

	const buttonSearch=document.getElementById("search3");
    buttonSearch.addEventListener("click",async(event) => {
	event.preventDefault();
	let name = document.getElementById("name-c86b").value;
	 await goSearchPage(name)
    });
}
 async function goToPage(e){
	const id=e.dataset.id;
	if(id==null || id==-1){
		return
	}
	let href="NFT-template.html?id="+id;
	var path =window.location
	var pagearr = path.toString().split('/');
	window.location=pagearr[0]+pagearr[1]+href;
 }
 async function goSearchPage(name){
	const id= await getIdByName(name);
	if(id==null || id==-1){
		return
	} 
	let href="NFT-template.html?id="+id;
	var path =window.location
	var pagearr = path.toString().split('/');
	window.location=await pagearr[0]+pagearr[1]+href;
 }

 async function getNftIdsByOwnerAdress(address){
	let data = await contract.methods.getNFTsByOwner(address).call();
	return data
}

 async function profile(){
	const account =await setAccount();
	console.log(account)
	var id =await getNftIdsByOwnerAdress(account);
	let NftList=await viewNFT();
	let data=[]
	for(var i =0;i<id.length;i++){
		let c=id[i]
		let arr= NftList[c]
	data[i]=arr
    }
	if(!data){
		return
	}
	await dispSearchImage(data);
} 
 
 
 async function parseListed(data){
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

async function listNft(id,bid,duration,buynow){
	const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
	const account =accounts[0];
	let data2 = await  getListedNFTs();
	let found = "false"
	for(var i =0;i<data2.length;i++){
		if(data2[i][0]==id){found = "true";}}
		if(found=="true"){console.log("already listed")
	
	}	
		else{let data = await contract.methods._listNFT(id,bid,buynow,duration).send({from:account,});}
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
async function makeBid(listId, bidAmount , BidderAddress ){
	let data = await contract.methods._makeBid(listId,bidAmount,BidderAddress).send({from:account,});
}
async function buyNow(listId , BidderAddress ){
	let data = await contract.methods._makeBid(listId,bidAmount,BidderAddress).send({from:account,});
}
async function ViewBidHistory(listId ){
	let data = await contract.methods._viewAuctionHistory(listId).call();
	return data;
}

	
  


