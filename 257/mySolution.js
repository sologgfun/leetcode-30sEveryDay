/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */


var binaryTreePaths = function(root) {
    var array  = [];
    if(root){
        walkLeaf(root,root.val,array)
        return array
    }else{
        return []
    }
};

var walkLeaf = function(root,value,array){
    if(root.left){
        var valueleft = value?`${value}->${root.left.val}`:`${root.left.val}`;
        walkLeaf(root.left,valueleft,array)
    }
    if(root.right){
        var valueright = value?`${value}->${root.right.val}`:`${root.right.val}`; 
        walkLeaf(root.right,valueright,array)
    }
    //当没有叶子时
    if(!root.left&&!root.right){
        array.push(value.toString())
        return array
    }
}