// Support funcs
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function createListNode(nums) {
  const result = new ListNode(0)
  let head = result;
  for (let i = 0; i < nums.length; i++) {
    head.next = new ListNode(nums[i])
    head = head.next;
  }
  return result.next
}

function verifyListNode(listNode, output) {
  let _listNode = Object.assign(listNode)
  const nodeValues = []

  do {
    nodeValues.push(_listNode.val);
    _listNode = _listNode.next;
  } while (_listNode)

  const isNodeValuesEqualToOutput = JSON.stringify(nodeValues)==JSON.stringify(output);
  console.log(isNodeValuesEqualToOutput)
}

// Solution
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode(0);
  let currentResultNode = result;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    const currentL1Val = l1 ? l1.val : 0;
    const currentL2Val = l2 ? l2.val : 0

    const sum = currentL1Val + currentL2Val + carry;
    currentResultNode.next = new ListNode(sum % 10);
    currentResultNode = currentResultNode.next;
    
    // Prepare for the next loop
    carry = Math.floor(sum / 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return result.next;
};


// Testing
const testCases = require('./data.json');

for (let testCase of testCases) {
  const { input: { l1, l2 }, output } = testCase
  const indexOfTestCase = testCases.indexOf(testCase);
  const listNode1 = createListNode(l1);
  const listNode2 = createListNode(l2);


  console.time(`Test case #${indexOfTestCase + 1}`)
  const newListNode = addTwoNumbers(listNode1, listNode2)
  console.timeEnd(`Test case #${indexOfTestCase + 1}`)

  verifyListNode(newListNode, output);
}

