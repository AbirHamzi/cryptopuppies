// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;
pragma experimental ABIEncoderV2;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract cryptopuppies is Ownable, ERC721{


    string[] public puppies;
    mapping(string => bool) _puppyExists;

    constructor() ERC721("Puppy", "PUPPY") {
    }

        
    function mint(string memory _puppy) public returns(bool) {
        require(!_puppyExists[_puppy]);
        puppies.push(_puppy);
        _safeMint(msg.sender, puppies.length);
        _puppyExists[_puppy] = true;
        return true;
    }

    function getpuppies() public view returns(string [] memory) {
        return puppies;
    }
}