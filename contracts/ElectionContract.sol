// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract ElectionContract {
    address public owner;
    uint public candidateCount;
    uint public voterCount;
    bool public start;
    bool public end;

    constructor() {
        owner = msg.sender;
        candidateCount = 0;
        voterCount = 0;
        start = false;
        end = false;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    modifier onlyAdmin() {
        require(
            msg.sender == owner &&
                owner == 0x7a91980974508Bd6eE908b005576Cc197B365124,
            "***** only Admin verification error!"
        );
        _;
    }

    struct Candidate {
        string name;
        string party;
        string gender;
        uint age;
        uint uniqueId;
        uint voteCount;
        uint candidateId;
    }

    mapping(uint => Candidate) public candidateDetails;

    function addCandidate(
        string memory _name,
        string memory _party,
        string memory _gender,
        uint _age,
        uint _uniqueId
    ) public onlyAdmin {
        Candidate memory newCandidate = Candidate({
            name: _name,
            party: _party,
            gender: _gender,
            age: _age,
            uniqueId: _uniqueId,
            voteCount: 0,
            candidateId: candidateCount
        });
        candidateDetails[candidateCount] = newCandidate;
        candidateCount += 1;
    }

    function getTotalCandidates() public view returns (uint) {
        return candidateCount;
    }

    struct Voter {
        address voterAdd;
        string name;
        string voterId;
        bool hasVoted;
        bool isVerified;
    }

    address[] public voters;
    mapping(address => Voter) public voterDetails;

    event VoterRegister(string _voterId);

    event VoteEvent(uint indexed _candidateId);

    function registerVoter(string memory _name, string memory _voterId) public {
        Voter memory newVoter = Voter({
            voterAdd: msg.sender,
            name: _name,
            voterId: _voterId,
            hasVoted: false,
            isVerified: false
        });
        voterDetails[msg.sender] = newVoter;
        voters.push(msg.sender);
        voterCount += 1;
        emit VoterRegister(_voterId);
    }

    function getVoterCount() public view returns (uint) {
        return voterCount;
    }

    function verifyVoter(address _address) public onlyAdmin {
        voterDetails[_address].isVerified = true;
    }

    function castVote(uint candidateId) public {
        require(
            voterDetails[msg.sender].hasVoted == false,
            "***** castVote error!"
        );
        require(
            voterDetails[msg.sender].isVerified == true,
            "***** castVote error!"
        );
        require(start == true, "***** castVote error!");
        require(end == false, "***** castVote error!");
        candidateDetails[candidateId].voteCount += 1;
        voterDetails[msg.sender].hasVoted = true;
        emit VoteEvent(candidateId);
    }

    function startElection() public onlyAdmin {
        start = true;
        end = false;
    }

    function endElection() public onlyAdmin {
        start = false;
        end = true;
    }

    function getStart() public view returns (bool) {
        return start;
    }

    function getEnd() public view returns (bool) {
        return end;
    }
}
