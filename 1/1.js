const temp = {}
for(let i = 0; i<nums.length;i++) {
    
    if(temp[nums[i]]  >=0) {
        return [i, temp[nums[i]]]
    }
    temp[target - nums[i]] =i
          
}