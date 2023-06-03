pragma solidity ^0.8.18;


interface ITicket{
    function mint(
        address _signal,
        uint256 _root,
        uint256 _nullifierHash,
        uint256[8] calldata _proof,
        address _to
    ) external;
}

