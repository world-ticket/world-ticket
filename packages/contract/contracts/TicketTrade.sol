// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract TicketTrade {

    struct TradeData {
        address seller;
        address buyer;
        IERC721 token;
        uint256 tokenId;
        address paymentToken;
        uint256 paymentTokenPrice;
        bool isSold;
    }

    mapping(address => mapping( uint256 => TradeData)) public trades;

    event TradeCreated(address indexed _seller, address indexed _buyer, IERC721 indexed _token, uint256 _tokenId, address _paymentToken, uint256 _paymentTokenPrice);
    event TradeCancelled(address indexed _seller, address indexed _buyer, IERC721 indexed _token, uint256 _tokenId, address _paymentToken, uint256 _paymentTokenPrice);
    event TradeSucceeded(address indexed _seller, address indexed _buyer, IERC721 indexed _token, uint256 _tokenId, address _paymentToken, uint256 _paymentTokenPrice);

    constructor() {}

    function createTrade(IERC721 _token, uint256 _tokenId, address _paymentToken, uint256 _paymentTokenPrice) public {
        require(_token.ownerOf(_tokenId) == msg.sender, "TicketTrade: Only owner can create trade");

        TradeData memory tradeData = TradeData(msg.sender, address(0), _token, _tokenId, _paymentToken, _paymentTokenPrice, false);
        trades[address(_token)][_tokenId] = tradeData;
        _token.approve(address(this), _tokenId);

        emit TradeCreated(msg.sender, address(0), _token, _tokenId, _paymentToken, _paymentTokenPrice);
    }


    function cancelTrade(address _token, uint256 _tokenId) public {
        require(trades[_token][_tokenId].seller == msg.sender, "TicketTrade: Only seller can cancel trade");

        TradeData memory oldTradeData = trades[_token][_tokenId];
        delete trades[_token][_tokenId];

        emit TradeCancelled(oldTradeData.seller, oldTradeData.buyer, oldTradeData.token, oldTradeData.tokenId, oldTradeData.paymentToken, oldTradeData.paymentTokenPrice);
    }


    function dealTrade(address _token, uint256 _tokenId) public {
        require(trades[_token][_tokenId].buyer == address(0), "TicketTrade: Trade already completed");
        require(trades[_token][_tokenId].seller != msg.sender, "TicketTrade: Seller cannot buy own ticket");

        TradeData memory oldTradeData = trades[_token][_tokenId];
        oldTradeData.isSold = true;

        IERC20(oldTradeData.paymentToken).transferFrom(msg.sender, oldTradeData.seller, oldTradeData.paymentTokenPrice);

        oldTradeData.token.safeTransferFrom(oldTradeData.seller, msg.sender, oldTradeData.tokenId);

        emit TradeSucceeded(oldTradeData.seller, msg.sender, oldTradeData.token, oldTradeData.tokenId, oldTradeData.paymentToken, oldTradeData.paymentTokenPrice);
    }

}