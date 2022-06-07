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
  let iterator = result;
  let sum = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    iterator.next = new ListNode(sum % 10);
    iterator = iterator.next;
    sum = sum > 9 ? 1 : 0;
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

