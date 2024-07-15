// SPDX-License-Identifier: MIT

pragma solidity >=0.8.2 <0.9.0;

import {IERC20} from "./ISwapIt.sol";

contract SwapIt {
    address public owner;
    address public auditor;
    address public collector;
    uint public  discountRate;

    IERC20 cUSD = IERC20(0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1);

    event Deposited(address indexed user, uint indexed amount);
    event WithdrawBalance(address indexed admin, uint indexed amount);
    event MarkCompleted(address indexed by, uint indexed amount);
    event OwnerUpdated(address indexed oldOwner, address indexed newOwner);
    event AuditorUpdated(address indexed oldAuditor, address indexed newAuditor);
    event UpdateDiscountRate(uint indexed  amount);
    event UpdateCollector(address indexed  collector);
    

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    modifier onlyAuditor() {
        require(msg.sender == auditor, "Caller is not auditor");
        _;
    }

    constructor() {
         owner = msg.sender;
         collector = msg.sender;
    }

   function deposit(uint amount) external {
        require(amount > 0, "Amount must be greater than zero");

        // Calculate fee if the deposit amount is below 20 cUSD
        uint256 fee = calculateFee(amount);
        uint256 amountAfterFee = amount + fee;

        // Transfer cUSD tokens from the sender to this contract
        bool success = cUSD.transferFrom(msg.sender, address(this), amount);
        require(success, "Token transfer failed");

        emit Deposited(msg.sender, amountAfterFee);
    }
    
    function updateOwner(address newOwner) isOwner public {
        require(newOwner != address(0), "New owner is the zero address");
        emit OwnerUpdated(owner, newOwner);
        owner = newOwner;
    }
    
    function updateAuditor(address newAuditor) isOwner public {
        require(newAuditor != address(0), "New auditor is the zero address");
        emit AuditorUpdated(auditor, newAuditor);
            auditor = newAuditor;
    }

    function updateCollector(address _collector) onlyAuditor public {
        emit UpdateCollector(_collector);
        collector = _collector;
    }

    function updateDiscountRate(uint _discountRate) onlyAuditor public {
        require(_discountRate > 0, "New auditor is the zero address");
        emit UpdateDiscountRate(_discountRate);
        discountRate = _discountRate;
    }
    
    function calculateFee(uint256 amount) view  private  returns (uint256) {
        // Apply a fee of 1.5% if the amount is below 20 cUSD
        if (amount < discountRate * 1e18) { // Assuming cUSD has 18 decimals
            return (amount * 15) / 1000; // 1.5% fee
        }
        return 0;
    }

    function withdraw(uint256 amount) isOwner public {
        require(amount > 0, "Amount must be greater than zero");
        bool success = cUSD.transfer(collector, amount);
        require(success, "Token transfer failed");
        emit WithdrawBalance(msg.sender, amount);
    }
}

